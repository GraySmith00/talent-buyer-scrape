const caaArtists = [
  "3LAU",
  "APRE",
  "Air",
  "Alex Adair",
  "Alex Ross",
  "Alex Winston",
  "Ali Love",
  "All Day I Dream",
  "Alle Farben",
  "Anabel Englund",
  "Andreas Moss",
  "Anna of the North",
  "Anohni",
  "Anton Powers",
  "Arctic Lake",
  "Art Vs. Science",
  "Astrid S",
  "Atoms for Peace",
  "Autograf",
  "Bailo",
  "Becky Hill",
  "Bedouin",
  "Bella Thorne",
  "Ben Phipps",
  "Black Eyed Peas",
  "Bloc Party",
  "Booka Shade",
  "Brasstracks",
  "Brody Jenner",
  "CADE",
  "CVBZ",
  "Cameron A G",
  "Capital Cities",
  "Captain Cuts",
  "Caravan Palace",
  "Cedric Gervais",
  "Cheat Codes",
  "Christine and the Queens",
  "Chromeo",
  "Client Liaison",
  "Conway",
  "Cosha",
  "Cosmo's Midnight",
  "Crystal Fighters",
  "DJ Falcon",
  "DJ Sam Spiegel",
  "DJ Windows 98",
  "DJ Z-Trip",
  "Daft Punk",
  "Dakota",
  "DallasK",
  "Darren King",
  "David Guetta",
  "Deepend",
  "Demo Taped",
  "Dena Amy",
  "Desert Hearts",
  "Detlef",
  "Detox Unit",
  "Digital Farm Animals",
  "Dimitri Vegas & Like Mike",
  "Dr. Fresch",
  "Dub Fx",
  "Elderbrook",
  "Elephante",
  "Eliot Sumner",
  "Exmag",
  "Far East Movement",
  "Feder",
  "Flight Facilities",
  "Fono",
  "Forest Swords",
  "Francis and the Lights",
  "G Jones",
  "GRIZ",
  "Galcher Lustwerk",
  "Galimatias",
  "Gavin Turek",
  "Gesaffelstein",
  "Gianluca Vacchi",
  "Glass Animals",
  "Glenn Morrison",
  "GoldLink",
  "Goldroom",
  "Gramatik",
  "Grandtheft",
  "Grouplove",
  "HER",
  "Hayden James",
  "Henry Wu",
  "Hercules & Love Affair",
  "Hernan Cattaneo",
  "Herobust",
  "Holy F*ck",
  "Holy Ghost!",
  "Hot Creations",
  "Hucci",
  "Hudson Mohawke",
  "Hugel",
  "IHF",
  "IO Echo",
  "Icona Pop",
  "Jack Garratt",
  "Jade Cicada",
  "Jadu Heart",
  "Jagwar Ma",
  "Jamie Jones",
  "Janelle Kroll",
  "Jenaux",
  "Jerome Price",
  "Joe Jonas",
  "John Martin",
  "John Splithoff",
  "Jonas Blue",
  "Jonny Greenwood",
  "Justin Caruso",
  "KAMIO",
  "KDA",
  "KRANE",
  "Kaleida",
  "Karnaval Blues",
  "Kasbo",
  "Kiah Victoria",
  "Kidnap",
  "Klingande",
  "Kraddy",
  "Kraftwerk",
  "Kungs",
  "Kylie Minogue",
  "Lana Del Rey",
  "Lauren Lane",
  "Lee Burridge",
  "Lee Foss",
  "Little Dragon",
  "Lo Down Loretta Brown",
  "Lo Moon",
  "Loosid",
  "Lost Frequencies",
  "Lykke Li",
  "MALLRAT",
  "MONKI",
  "MSTRKRFT",
  "Mansionz",
  "Mark Hoppus",
  "Mark Ronson",
  "Markus Schulz",
  "Mashrou’ Leila",
  "Matt DiMona",
  "Max Frost",
  "MiM0SA",
  "Michal Menert",
  "Mike WiLL Made-It",
  "Mikey Lion",
  "Mo Kolours",
  "Monolink",
  "Monte Booker",
  "Moses Boyd",
  "Motez",
  "Mutemath",
  "Myles Hendrik",
  "N.A.S.A.",
  "Nathan Barato",
  "Natureboy Flako",
  "Naughty Boy",
  "New Order",
  "New World Punx",
  "Nicky Romero",
  "Noodles",
  "Oberhofer",
  "Oliver Heldens",
  "Osunlade",
  "Otzeki",
  "Owl City",
  "PREP",
  "Paradise",
  "Patrick Baker",
  "Paul Kalkbrenner",
  "Pretty Lights",
  "Purple Disco Machine",
  "Q-Tip",
  "RAC",
  "Radiohead",
  "Rebel and a Basketcase",
  "Ricky Reed",
  "Rob da Bank",
  "Robert DeLong",
  "Robin Schulz",
  "Roisin Murphy",
  "Roosevelt",
  "RÜFÜS DU SOL",
  "SNBRN",
  "STS9",
  "Sam Gellaitry",
  "Scott Quinn",
  "Sebu of Capital Cities DJ set",
  "Seramic",
  "Sevdaliza",
  "Shaun Frank",
  "Silk City",
  "Sir Rosevelt",
  "Smallpools",
  "Starling",
  "StayLoose (fka STéLOUSE)",
  "Super Duper",
  "SuperVision",
  "Swell",
  "TJR",
  "Tears For Fears",
  "Tei Shi",
  "Tensnake",
  "Tep No",
  "The Big Pink",
  "The Chainsmokers",
  "The Cure",
  "The Naked and Famous",
  "The Righteous Young",
  "The Sounds",
  "Thom Yorke",
  "Tipper",
  "Tom Misch",
  "Travis Barker",
  "Tunji Ige",
  "Twenty One Pilots",
  "Two Door Cinema Club",
  "TÂCHES",
  "Uncle Jxm",
  "Vancouver Sleep Clinic",
  "Vice",
  "Vicetone",
  "Wet",
  "White Cliffs",
  "Will Heard",
  "Winston Surfshirt",
  "Yuma X",
  "Zac Samuel",
  "Zak Abel",
  "Zero 7",
  "††† (CROSSES)"
]

// const fs = require('fs-extra');
// const caaArtists = require('../agencies/caa/caaArtistData');

const getAllArtistInfo = (artists, agency) => {
  const allArtistInfo = artists.map(artist => {
    return await setTimeout{ name: artist }
  })

  console.log(allArtistInfo)

  // fs.writeFile(
  //   `${agency}ArtistData.json`,
  //   JSON.stringify(result, null, '\t'),
  //   function(err) {
  //     if (!err) {
  //       console.log('file saved!');
  //     }
  //   }
  // );

}

// const getArtistInfo = async (artistName, agency) => {
//   const url = `https://api.songkick.com/api/3.0/search/artists.json?apikey=${
//     process.env.REACT_APP_SONGKICK_KEY
//   }&query=${artistName}`;
//
//   const response = await fetch(url);
//   const data = await response.json();
//
//   const spotifyInfo = await getSpotifyInfo(artistName);
//
//   if (spotifyInfo) {
//     return {
//       name: artistName,
//       agency: agency,
//       songkick_id: data.resultsPage.results.artist[0].id,
//       ...spotifyInfo
//     };
//   }
// };
//
// const getSpotifyInfo = async artistName => {
//   const url = `https://api.spotify.com/v1/search?q=${artistName}&type=artist`;
//   const response = await fetch(url, {
//     headers: {
//       Authorization: 'Bearer ' + process.env.REACT_APP_SPOTIFY_BEARER
//     }
//   });
//   const data = await response.json();
//   if (data.artists.items) {
//     const result = data.artists.items[0];
//
//     const spotifyInfo = {
//       name: result.name,
//       image_url: result.images[0].url,
//       popularity: result.popularity,
//       spotify_followers: result.followers.total,
//       spotify_url: result.external_urls.spotify,
//       spotify_id: result.id,
//       genres: result.genres.join(', ')
//     };
//
//     return spotifyInfo;
//   }
// };

getAllArtistInfo(caaArtists, 'caa')
