export const getArtistInfo = async (artistName, agency) => {
  const url = `https://api.songkick.com/api/3.0/search/artists.json?apikey=${
    process.env.REACT_APP_SONGKICK_KEY
  }&query=${artistName}`;

  const response = await fetch(url);
  const data = await response.json();

  const spotifyInfo = await getSpotifyInfo(artistName);

  if (spotifyInfo) {
    return {
      name: artistName,
      agency: agency,
      songkick_id: data.resultsPage.results.artist[0].id,
      ...spotifyInfo
    };
  }
};

export const getSpotifyInfo = async artistName => {
  const url = `https://api.spotify.com/v1/search?q=${artistName}&type=artist`;
  const response = await fetch(url, {
    headers: {
      Authorization: 'Bearer ' + process.env.REACT_APP_SPOTIFY_BEARER
    }
  });
  const data = await response.json();
  if (data.artists.items) {
    const result = data.artists.items[0];

    const spotifyInfo = {
      name: result.name,
      image_url: result.images[0].url,
      popularity: result.popularity,
      spotify_followers: result.followers.total,
      spotify_url: result.external_urls.spotify,
      spotify_id: result.id,
      genres: result.genres.join(', ')
    };

    return spotifyInfo;
  }
};
