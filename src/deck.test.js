let Deck = require('./deck.js');

let standardDeck = new Deck();
//let deck2 = new Deck('tarot');

// test error scenario

// test that deck with no params returns default deck configuration
// test that deck with params reflects requested configuration
// return n cards according to deck type (params above)
let x = standardDeck.emitDeck();
console.log(x)

// test that shuffled deck values are not in order
let shuffled = standardDeck.shuffle();
console.log(shuffled);

// test that the appropriate number of cards are emitted
// test that deck length has decremented by the number of cards emitted
console.log(standardDeck.emitDeck().length);
let card = standardDeck.emitCard(1);
console.log(card);
console.log(standardDeck.emitDeck().length);