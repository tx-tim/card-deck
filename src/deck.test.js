const Deck = require('./deck.js');

describe('standard deck', () => {
    let standardDeck;
    beforeEach(() => {
        standardDeck = new Deck();
    });

    test('deck with no init params returns standard deck configuration', () => {
        expect(standardDeck.deck.length).toBe(52);
    });

    test('decktype', () => {
        expect(standardDeck.deckType.suitNames).toBeTruthy();
    });

    test('shuffled deck is not in order', () => {
        let shuffled = standardDeck.shuffle();
        let consecTest1 = shuffled[0].value + 1 === shuffled[1].value;
        let consecTest2 = shuffled[1].value + 1 === shuffled[2].value;
        let consecTest3 = shuffled[2].value + 1 === shuffled[3].value;
        expect(consecTest1 && consecTest2 && consecTest3).toBeFalsy();
    });

    test('cards are emitted', () => {
        let numcards = 5;
        let initLength = standardDeck.emitDeck().length;
        let card = standardDeck.emitCard(numcards);
        expect(initLength).toBeGreaterThan(standardDeck.deck.length);
        expect(initLength - standardDeck.deck.length).toBe(numcards);
    });

    test('handle overdealing', () => {
        let numcards = 53;
        let initLength = standardDeck.emitDeck().length;
        let cards = standardDeck.emitCard(numcards);
        expect(cards).toBe(null);
    });

    test('deal hand with 1 player', () => {
        let hand = [];
        let numcards = 4;
        let tempcards = [];
        while (tempcards) {
            tempcards = standardDeck.emitCard(numcards);
            if (tempcards) {
                hand = [...hand, ...tempcards];
            }
        }
        expect(hand.length).toBe(52);
    });
    test('deal hand with two players', () => {
        let hand1 = [];
        let hand2 = [];
        let numcards = 1;
        let tempcards = standardDeck.emitCard(numcards);
        let counter = 1;
        while (tempcards) {
            if (counter % 2 === 0) {
                hand2 = [...hand2, ...tempcards];
            } else {
                hand1 = [...hand1, ...tempcards];
            }
            tempcards = standardDeck.emitCard(numcards);
            counter += 1;
        }
        expect(hand1.length).toBe(26);
        expect(hand2.length).toBe(26);
    });
});
