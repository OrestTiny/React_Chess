import {
  boardLetters,
  boardNumbers,
  figureWhiteBlack,
} from "../mock/figureWhiteBlack";

// number is y, letter is x

export function identificateAvailableCells(props) {
  const { data: curFg, setAciveCells } = props;

  const x = boardLetters.findIndex((item) => item === curFg.letter);
  const y = boardNumbers.findIndex((item) => item === curFg.number);
  const availableXY = [];
  const isInitialPosition = figureWhiteBlack.some(
    ({ number, letter, id }) =>
      id === curFg.id && number === curFg.number && letter === curFg.letter
  );

  if (curFg.id === "wp") {
    availableXY.push({ x: x, y: y - 1 });
  }

  if (curFg.id === "wp" && isInitialPosition) {
    availableXY.push({ x: x, y: y - 2 });
  }

  if (curFg.id === "bp") {
    availableXY.push({ x: x, y: y + 1 });
  }

  if (curFg.id === "bp" && isInitialPosition) {
    availableXY.push({ x: x, y: y + 2 });
  }

  if (curFg.id === "wq" || curFg.id === "bq") {
    for (let i = 0; i < 8; i++) {
      availableXY.push({ x: i, y });
      availableXY.push({ x, y: i });
      availableXY.push({ x: x - i, y: y - i });
      availableXY.push({ x: x + i, y: y - i });
      availableXY.push({ x: x - i, y: y + i });
      availableXY.push({ x: x + i, y: y + i });
    }
  }

  const availableCells = availableXY.map(({ x, y }) => ({
    letter: boardLetters[x],
    number: boardNumbers[y],
  }));

  setAciveCells(availableCells);

  return;
}
