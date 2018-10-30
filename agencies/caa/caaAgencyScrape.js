const Nightmare = require('nightmare');
const nightmare = Nightmare({ show: true });

const fs = require('fs-extra');

nightmare
  .goto('https://www.caa.com/entertainmenttalent/touring/search#electronic')
  .wait(10000)
  .evaluate(() => window.scrollTo(0, document.body.scrollHeight))
  .wait(10000)
  .evaluate(() => window.scrollTo(0, document.body.scrollHeight))
  .wait(10000)
  .evaluate(() => window.scrollTo(0, document.body.scrollHeight))
  .wait(10000)
  .evaluate(() => window.scrollTo(0, document.body.scrollHeight))
  .wait(10000)
  .evaluate(() => window.scrollTo(0, document.body.scrollHeight))
  .evaluate(() => {
    // window.scrollTo(0, document.body.scrollHeight);
    const artistTags = [...document.querySelectorAll('.artist-name')];
    const artistNames = artistTags.map(tag => tag.innerText);
    return artistNames;
  })
  .end()
  .then(result => {
    fs.writeFile(
      './agencies/caa/caaArtistData.json',
      JSON.stringify(result, null, '\t'),
      function(err) {
        if (!err) {
          console.log('file saved!');
        }
      }
    );
  })
  .catch(err => console.log('oooops something went wrong: ', err));
