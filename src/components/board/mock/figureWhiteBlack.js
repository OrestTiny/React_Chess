const boardLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const boardNumbers = [1, 2, 3, 4, 5, 6, 7, 8];

const figureBlack = [
  {
    id: 'br',
    letter: "a",
    number: 1,
  },
  {
    id: 'bn',
    letter: "b",
    number: 1
  },
  {
    id: 'bb',
    letter: "c",
    number: 1
  },
  {
    id: 'bk',
    letter: "d",
    number: 1
  },
  {
    id: 'bq',
    letter: "e",
    number: 1
  },
  {
    id: 'bb',
    letter: "f",
    number: 1
  },
  {
    id: 'bn',
    letter: "g",
    number: 1
  },
  {
    id: 'br',
    letter: "h",
    number: 1
  },
  {
    id: 'bp',
    letter: "h",
    number: 2
  },
  {
    id: 'bp',
    letter: "a",
    number: 2
  },
  {
    id: 'bp',
    letter: "b",
    number: 2
  },
  {
    id: 'bp',
    letter: "c",
    number: 2
  },
  {
    id: 'bp',
    letter: "d",
    number: 2
  },
  {
    id: 'bp',
    letter: "e",
    number: 2
  },
  {
    id: 'bp',
    letter: "f",
    number: 2
  },
  {
    id: 'bp',
    letter: "g",
    number: 2
  }
]

const figureWhiteBlack = [
  {
    id: 'wr',
    letter: "a",
    number: 8
  },
  {
    id: 'wn',
    letter: "b",
    number: 8
  },
  {
    id: 'wb',
    letter: "c",
    number: 8
  },
  {
    id: 'wq',
    letter: "d",
    number: 8
  },
  {
    id: 'wk',
    letter: "e",
    number: 8
  },
  {
    id: 'wb',
    letter: "f",
    number: 8
  },
  {
    id: 'wn',
    letter: "g",
    number: 8
  },
  {
    id: 'wr',
    letter: "h",
    number: 8
  },
  {
    id: 'wp',
    letter: "a",
    number: 7
  },
  {
    id: 'wp',
    letter: "b",
    number: 7
  },
  {
    id: 'wp',
    letter: "c",
    number: 7
  },
  {
    id: 'wp',
    letter: "d",
    number: 7
  },
  {
    id: 'wp',
    letter: "e",
    number: 7
  },
  {
    id: 'wp',
    letter: "f",
    number: 7
  },
  {
    id: 'wp',
    letter: "g",
    number: 7
  },
  {
    id: 'wp',
    letter: "h",
    number: 7
  },
  ...figureBlack
]

export { figureWhiteBlack, boardNumbers, boardLetters }