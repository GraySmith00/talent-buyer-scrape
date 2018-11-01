const Nightmare = require('nightmare');
const nightmare = Nightmare({ show: true });

const fs = require('fs-extra');


nightmare
.goto('https://music.utatouring.com/full-roster/')
.wait('#charZ')
.evaluate(() => {
  const artistTags = [...document.querySelectorAll('a')].slice(30);
  const nonArtistVals = [
    ...'123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
    'Worldwide Roster',
    'UNITED STATES / CANADA AGENT FINDER',
    'OFFICES',
    'LONDON',
    'LOS ANGELES',
    'MALMÖ',
    'MIAMI',
    'NASHVILLE',
    'NEW YORK',
    'UTA MUSIC'
  ];
  const artistNames = artistTags.reduce((artistNames, tag) => {
    const notValid = nonArtistVals.find(val => val === tag.innerText);
    if (!notValid) {
      artistNames = [...artistNames, tag.innerText];
    }
    return artistNames;
  }, []);
  return artistNames;
})
.end()
.then(result => {
  fs.writeFile(
    './agencies/uta/utaArtistData.json',
    JSON.stringify(result, null, '\t'),
    function(err) {
      if (!err) {
        console.log('file saved!');
      }
    }
  );
})
.catch(err => console.log('oooops something went wrong: ', err));
