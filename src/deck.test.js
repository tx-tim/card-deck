const Deck = require('./deck.js');

describe('standard deck', () => {
    let standardDeck;
    beforeEach( () => {
        standardDeck = new Deck();
    })

    test('deck with no init params returns standard deck configuration', () => {
        expect(standardDeck.deck.length).toBe(52);
    });

    test('decktype', () => {
        
        expect(standardDeck.deckType.suitNames).toBeTruthy();
    });

    test('shuffled deck is not in order', () => {
        let shuffled = standardDeck.shuffle();
        let consecTest1 = shuffled[0].value +1 === shuffled[1].value;
        let consecTest2 = shuffled[1].value +1 === shuffled[2].value;
        let consecTest3 = shuffled[2].value +1 === shuffled[3].value;
        expect(consecTest1 && consecTest2 && consecTest3).toBeFalsy();
    })

    test('cards are emitted', () => {
        let initLength = standardDeck.emitDeck().length;
        let card = standardDeck.emitCard(1);
        expect(card).toMatchObject({
            value: expect.anything(),
            suit: expect.anything(),
            name: expect.anything()
        });
        expect(initLength).toBeGreaterThan(standardDeck.deck.length);
    })
})