## API

The deck has itself has a few methods to make use of

### instantiate a deck

Create a new deck with the `new` keyword

`let standardDeck = new Deck();`

### Shuffle the Deck

`let shuffled = standardDeck.shuffle();`

### Get a card(s) off the top of the deck

`let single_card = shuffled.emitCard();`

`let four_cards = shuffled.emitCard(4);`

You can now use this card in your game. Notice that this **does** mutate the deck by removing the card(s) from the deck's `deck` array.

When the deck is empty, emitCards will return null.
