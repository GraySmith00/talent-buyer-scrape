const axios = require('axios');
var SpotifyWebApi = require('spotify-web-api-node');

const SPOTIFY_CLIENT_ID = require('./keys').SPOTIFY_CLIENT_ID;
const SPOTIFY_CLIENT_SECRET = require('./keys').SPOTIFY_CLIENT_SECRET;

// credentials are optional
var spotifyApi = new SpotifyWebApi({
  clientId: SPOTIFY_CLIENT_ID,
  clientSecret: SPOTIFY_CLIENT_SECRET,
  redirectUri: 'http://localhost:4000/spotify_return'
});

spotifyApi.clientCredentialsGrant().then(
  function(data) {
    // Save the access token so that it's used in future calls
    spotifyApi.setAccessToken(data.body['access_token']);
  },
  function(err) {
    console.log('Something went wrong when retrieving an access token', err);
  }
);

// const getToken = async () => {
//   var client_id = process.env.SPOTIFY_CLIENT_ID;
//   var client_secret = process.env.SPOTIFY_CLIENT_SECRET;

//   const response = await axios.post(
//     'https://accounts.spotify.com/api/token?grant_type=client_credentials',
//     {
//       Authorization:
//         'Basic ' +
//         Buffer.from(client_id + ':' + client_secret).toString('base64')
//     }
//   );
//   console.log(response);
// };

// getToken();
