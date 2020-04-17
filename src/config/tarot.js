
// TODO - generaize definition of deck to accommodate standard playing cards and tarot cards

const pips = [
  "ace",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "paige",
  "knight",
  "queen",
  "king",
];

const suits = [
    "Cups", "Swords", "Wands", "Pentacles"
]

// what to do with major arcana?

const majorArcana = [
    "Fool", "Magician", "High Priestess", "Empress", "Emporer", "Hierophant", " The Lovers", "The Chariot",
    "The Hermit", "Wheel of Fortune"
]

module.exports = {
    suitNums: pips,
    suitNames: suits,
    majorArcana
}