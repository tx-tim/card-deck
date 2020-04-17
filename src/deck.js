
const deckConfigs =  require('./config');

class Deck {
    constructor(type='standard') {
        this.deckType = deckConfigs[type];
        this.deck = this.initializeDeck();
    }

    emitDeck() {
        return this.deck;
    }

    createSuit(name) {
        return this.deckType.suitNums.map((c, i) => {
            return {
            value: i + 1,
            suit: name,
            name: c + " Of " + name
            };
        });
    };

    initializeDeck() {
        return this.deckType.suitNames.reduce( (acc, item, i) => {
            return acc.concat(this.createSuit(item));
        }, [])
    };

    shuffle() {
        var j, placeholder, i;
        for (i = this.deck.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            placeholder = this.deck[i];
            this.deck[i] = this.deck[j];
            this.deck[j] = placeholder;
        }
        return this.deck;
    }

    emitCard(num) {
        //console.log('remove cards from the deck and return them from this function');
        return this.deck.pop();
    }


}

//export default Deck;
module.exports = Deck;

