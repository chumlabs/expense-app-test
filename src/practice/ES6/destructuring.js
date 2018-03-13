// DESTRUCTURING
// --------------------- //
// object destructuring
// -- variable renaming
// -- default values

const book = {
  title: 'Leviathan Wakes',
  author: 'James S. A. Corey',
  publisher: {
    name: 'Orbit Books'
  }
};

// const { name: publisherName = 'self-published' } = book.publisher;
const { publisher: { name: publisherName = 'self-published' } } = book;
console.log(publisherName);

// --------------------- //
// array destructuring
// -- default values

const address = ['200 Shore Dr', 'Trellis Bay', 'BVI', '345YDS'];
const [, city, country] = address;
console.log(`Enjoy your trip to ${city}, ${country}`);

const product = ['Coffee (hot)', '$1.95', '$2.55', '$2.95'];
const [item, , priceMed] = product;
console.log(`A medium ${item} costs ${priceMed}`);
