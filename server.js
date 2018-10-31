const express = require('express');
const app = express();

app.set('port', process.env.PORT || 4000);

app.post('http://localhost:4000/spotify_return', (req, res) => {
  console.log(req.params);
});

app.listen(app.get('port'), () => {
  console.log(`App listening on PORT ${app.get('port')}`);
});
