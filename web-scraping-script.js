const Nightmare = require('nightmare');
const nightmare = Nightmare({ show: true });

nightmare
  .goto('https://www.google.com/shopping?hl=en')
  .type('#lst-ib', 'winter boots')
  .click('#sfibbbc input')
  .wait('.O8U6h')
  // evaluate runs a function in the console and returns data from the function and passes the data to .then
  .evaluate(() => {
    const shoppingDivs = [...document.querySelectorAll('.sh-dgr__grid-result')];

    const shoppingData = shoppingDivs.map(shoppingDiv => {
      let title = shoppingDiv.querySelector('.EI11Pd').innerText;
      let price = shoppingDiv.querySelector('.O8U6h').innerText;

      return { title, price };
    });
    return shoppingData;
  })
  .end()
  .then(result => console.log(result))
  .catch(err => console.log('Something went wrong', err));
