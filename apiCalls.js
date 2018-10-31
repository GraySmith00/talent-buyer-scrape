const axios = require(`axios`);
var SpotifyWebApi = require(`spotify-web-api-node`);
const fs = require(`fs-extra`);

const SPOTIFY_CLIENT_ID = require(`./keys`).SPOTIFY_CLIENT_ID;
const SPOTIFY_CLIENT_SECRET = require(`./keys`).SPOTIFY_CLIENT_SECRET;
const SONGKICK_KEY = require(`./keys`).SONGKICK_KEY;

const testAgency = require(`./agencies/testAgency`);
const caa = require(`./agencies/caa/caaArtistData.json`);

var spotifyApi = new SpotifyWebApi({
  clientId: SPOTIFY_CLIENT_ID,
  clientSecret: SPOTIFY_CLIENT_SECRET,
  redirectUri: `http://localhost:4000/spotify_return`
});

const makeCalls = async agency => {
  try {
    const data = await spotifyApi.clientCredentialsGrant();
    spotifyApi.setAccessToken(data.body[`access_token`]);

    const token = spotifyApi.getAccessToken();

    const unresolved = caa.map(async artist => {
      return await getArtistInfo(artist, agency, token);
    });

    const result = await Promise.all(unresolved);

    fs.writeFile(
      'caaArtistInfo.json',
      JSON.stringify(result, null, '\t'),
      function(err) {
        if (!err) {
          console.log('file saved!');
        }
      }
    );
  } catch (err) {
    // console.log(`Something went wrong when retrieving an access token`, err);
  }
};

makeCalls(`caa`);

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
    console.log(error);
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
    console.log(error);
  }
};
