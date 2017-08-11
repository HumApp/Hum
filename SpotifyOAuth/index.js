const axios = require('axios');
const CLIENT_ID = '';
const CLIENT_SECRET = '';
const REDIRECT_URI = '';

/*
order:
1 execute step 1 from the front end, which will result in step 2 being called. step two calls step three, and four is then delivered inside the promise
*/

// 1. https://accounts.spotify.com/authorize/?client_id={CLIENT ID}&response_type=code&redirect_uri={REDIRECT URI}&scope={SCOPES}}

axios.get('https://accounts.spotify.com/authorize/', {
  params: {
    client_id: CLIENT_ID,
    response_type: 'code',
    redirect_uri: REDIRECT_URI,
    scope: 'playlist-read-private playlist-read-collaborative playlist-modify-public playlist-modify-private user-read-private user-read-emailuser-top-read'
  }
});

// 2. recieve on REDIRECT_URI https://example.com/callback?code={CODE}
// 3. send post to https://accounts.spotify.com/api/token with body:
const app= {};
app.get(REDIRECT_URI, (req, res) => {
  if (req.params.code !== 'access_denied') {
    axios.post('https://accounts.spotify.com/api/token', {
      params: {
        grant_type: 'authorization_code',
        code: req.param.code,
        redirect_uri: REDIRECT_URI,
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
      }
    })
    .then(response => {
      console.log(response);
    });
  }
});

/*
{
  grant_type: "authorization_code",
  code: code,
  redirect_uri: uri,
  client_id: ID,
  client_secret: SECRET
}
*/

// 4. recieve tokens in body

// 5. opt: request access token from refresh: https://accounts.spotify.com/api/token
/*
body: {
  grant_type: refresh_token,
  refresh_token: TOKEN
}

header:

var clientId = 'a0bda580-cb41-4ff6-8f06-28ffb4227594';
var clientSecret = 'e4meQ53cXGq53j6uffdULVjRl8It8M3FVsupKei0nSg';
var encodedData = window.btoa(clientId + ':' + clientSecret);
var authorizationHeaderString = 'Authorization: Basic ' + encodedData;
*/
