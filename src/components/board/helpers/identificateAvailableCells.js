import {
  boardLetters,
  boardNumbers,
  figureWhiteBlack,
} from "../mock/figureWhiteBlack";

export function identificateAvailableCells(props) {
  const { data: curFg, figurePosition, setActiveCells } = props;

  const x = boardLetters.findIndex((item) => item === curFg.letter);
  const y = boardNumbers.findIndex((item) => item === curFg.number);
  const availableXY = [];
  const isInitialPosition = figureWhiteBlack.some(
    ({ number, letter, id }) =>
      id === curFg.id && number === curFg.number && letter === curFg.letter
  );


  const checkEnemyFigure = (positionAttack) => {
    const attackCoord = positionAttack.map((item) => {
      return figurePosition.find(positionEnemy =>
        positionEnemy.letter === boardLetters[item.x] &&
        positionEnemy.number === boardNumbers[item.y] &&
        positionEnemy.id.split('')[0] !== item.id.split('')[0])
    }).filter(position => position !== undefined);

    attackCoord.map(item => {
      availableXY.push({
        x: boardLetters.indexOf(item.letter),
        y: boardNumbers.indexOf(item.number),
      })
    })
  }

  if (curFg.id === "wp") {
    availableXY.push({ x: x, y: y - 1 });

    checkEnemyFigure([
      { id: "wp", x: x - 1, y: y - 1 },
      { id: "wp", x: x + 1, y: y - 1 }
    ])

    console.log(availableXY);
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

  setActiveCells(availableCells);

  return;
}
