const axios = require(`axios`);
var SpotifyWebApi = require(`spotify-web-api-node`);
const fs = require(`fs-extra`);

const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const SONGKICK_KEY = process.env.SONGKICK_KEY;

const testAgency = require(`./agencies/testAgency`);

const caaArtists = require(`./agencies/caa/caaArtistData.json`)
const utaArtists = require(`./agencies/uta/utaArtistData.json`)

var spotifyApi = new SpotifyWebApi({
  clientId: SPOTIFY_CLIENT_ID,
  clientSecret: SPOTIFY_CLIENT_SECRET,
  redirectUri: `http://localhost:4000/spotify_return`
});

const makeCalls = async (agencyData, agency) => {
  try {
    const data = await spotifyApi.clientCredentialsGrant();
    spotifyApi.setAccessToken(data.body[`access_token`]);

    const token = spotifyApi.getAccessToken();

    agencyData.map(async artist => {
      const artistInfo = await getArtistInfo(artist, agency, token);
      axios.post('https://talent-buyer-api.herokuapp.com/api/v1/artists', artistInfo);
    });

    // const result = await Promise.all(unresolved);

    // fs.writeFile(
    //   'caaArtistInfo.json',
    //   JSON.stringify(result, null, '\t'),
    //   function(err) {
    //     if (!err) {
    //       console.log('file saved!');
    //     }
    //   }
    // );
  } catch (err) {
    // console.log(`Something went wrong when retrieving an access token`, err);
  }
};

const firstRun = () => {
  caaArtists.forEach(function(artist, index) {
  setTimeout(function(){
    makeCalls([artist], 'caa')
  }, index * 300)
})
}

const secondRun = () => {
  utaArtists.forEach(function(artist, index) {
  setTimeout(function(){
    makeCalls([artist], 'uta')
  }, index * 300)
})
}

const seedArtists = async () => {
  await firstRun();
  await secondRun();
}


const getArtistInfo = async (artistName, agency, token) => {
  try {
    const url = `https://api.songkick.com/api/3.0/search/artists.json?apikey=${SONGKICK_KEY}&query=${artistName}`;
    const response = await axios.get(url);
    const { data } = await response;

    const spotifyInfo = await getSpotifyInfo(artistName, token);

    if (spotifyInfo) {
      return {
        name: artistName,
        agency: agency,
        songkick_id: data.resultsPage.results.artist[0].id,
        ...spotifyInfo
      };
    }
  } catch (error) {
    console.log('---ERROR---');
  }
};

const getSpotifyInfo = async (artistName, token) => {
  try {
    const url = `https://api.spotify.com/v1/search?q=${artistName}&type=artist`;
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    const { data } = await response;
    if (data.artists.items) {
      const result = data.artists.items[0];
      console.log(result.name);
      const spotifyInfo = {
        name: result.name,
        image_url: result.images[0].url,
        popularity: result.popularity,
        spotify_followers: result.followers.total,
        spotify_url: result.external_urls.spotify,
        spotify_id: result.id,
        genres: result.genres.join(`, `)
      };
      return spotifyInfo;
    }
  } catch (error) {
    console.log('---ERROR---');
  }
};

seedArtists()
