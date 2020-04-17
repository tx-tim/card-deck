const Deck = require('./index.js');

describe('standard deck', () => {
    let standardDeck;
    beforeEach(() => {
        standardDeck = new Deck();
    });

    test('deck with no init params returns standard deck configuration', () => {
        expect(standardDeck.deck.length).toBe(52);
    });

    test('decktype', () => {
        const std = ['Clubs', 'Hearts', 'Spades', 'Diamonds'];
        expect(standardDeck.deckType.suitNames).toEqual(
            expect.arrayContaining(std)
        );
    });
});

describe('tarot deck', () => {
    let tarotDeck;
    beforeEach(() => {
        tarotDeck = new Deck('tarot');
    });

    test('decktype', () => {
        const tarot = ['Wands', 'Cups', 'Swords', 'Pentacles'];
        expect(tarotDeck.deckType.suitNames).toEqual(
            expect.arrayContaining(tarot)
        );
    });
});
