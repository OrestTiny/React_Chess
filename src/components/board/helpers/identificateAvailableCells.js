import {
  boardLetters,
  boardNumbers,
  figureWhiteBlack,
} from "../mock/figureWhiteBlack";

export function identificateAvailableCells(props) {
  const { data: curFg, figurePosition, setActiveCells, isWhiteSide } = props;
  let availableCellsValid = [];
  const x = boardLetters.findIndex((item) => item === curFg.letter);
  const y = boardNumbers.findIndex((item) => item === curFg.number);
  const availableXY = [];
  const isInitialPosition = figureWhiteBlack.some(
    ({ number, letter, id }) =>
      id === curFg.id && number === curFg.number && letter === curFg.letter
  );

  const checkEnemyFigure = (positionAttack) => {
    const attackCoord = positionAttack.map((item) => {
      return figurePosition.find(positionEnemy => {
        if (positionEnemy === undefined) return;

        return (
          positionEnemy.letter === boardLetters[item.x] &&
          positionEnemy.number === boardNumbers[item.y] &&
          positionEnemy.id.split('')[0] !== item.id.split('')[0])
      }
      );
    }).filter(position => position !== undefined);

    attackCoord.forEach(item => {
      availableXY.push({
        x: boardLetters.indexOf(item.letter),
        y: boardNumbers.indexOf(item.number),
        isAttack: true
      });
    });
  }

  const checkCellValid = (props) => {
    const { x, y } = props;
    const coordinates = {
      letter: boardLetters[x],
      number: boardNumbers[y],
    }

    const flag = figurePosition.some(item => {
      if (item === undefined) return;

      return item.letter === coordinates.letter && item.number === coordinates.number
    });

    return flag;
  };


  if (curFg.id === "wp") {
    availableXY.push({ x: x, y: y - 1 });

    checkEnemyFigure([
      { id: "wp", x: x - 1, y: y - 1 },
      { id: "wp", x: x + 1, y: y - 1 }
    ])
  }

  if (curFg.id === "wp" && isInitialPosition) {
    availableXY.push({ x: x, y: y - 2 });
  }

  if (curFg.id === "bp") {
    availableXY.push({ x: x, y: y + 1 });

    checkEnemyFigure([
      { id: "bp", x: x - 1, y: y + 1 },
      { id: "bp", x: x + 1, y: y + 1 }
    ])
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

  if (curFg.id === "wn" || curFg.id === "bn") {
    availableXY.push({ x: x - 1, y: y - 2 });
    availableXY.push({ x: x - 1, y: y + 2 });

    availableXY.push({ x: x + 1, y: y - 2 });
    availableXY.push({ x: x + 1, y: y + 2 });

    availableXY.push({ x: x - 2, y: y + 1 });
    availableXY.push({ x: x - 2, y: y - 1 });

    availableXY.push({ x: x + 2, y: y + 1 });
    availableXY.push({ x: x + 2, y: y - 1 });
  }


  if (curFg.id === "wn" || curFg.id === "bn") {
    availableXY.push({ x: x - 1, y: y - 2 });
    availableXY.push({ x: x - 1, y: y + 2 });

    availableXY.push({ x: x + 1, y: y - 2 });
    availableXY.push({ x: x + 1, y: y + 2 });

    availableXY.push({ x: x - 2, y: y + 1 });
    availableXY.push({ x: x - 2, y: y - 1 });

    availableXY.push({ x: x + 2, y: y + 1 });
    availableXY.push({ x: x + 2, y: y - 1 });
  }


  if (curFg.id === "wr" || curFg.id === "br") {

    for (let i = x + 1; i < 8; i++) {
      if (checkCellValid({ x: i, y })) {
        break;
      } else {
        availableXY.push({ x: i, y });
      }
    }

    for (let i = y - 1; i > 0; i--) {
      if (checkCellValid({ x, y: i })) {
        break;
      } else {
        availableXY.push({ x, y: i });
      }
    }
  }

  const availableCells = availableXY.map((item) => {
    return {
      id: curFg.id,
      letter: boardLetters[item.x],
      number: boardNumbers[item.y],
    }
  }).filter(item => item.letter !== undefined && item.number !== undefined);


  availableCellsValid = availableCells.map((item) => {
    const figure = figurePosition.find((position) => {
      if (position === undefined) return;

      return position.letter === item.letter && position.number === item.number && position.id.split('')[0] === item.id.split('')[0];

    });

    return figure ? null : item;
  }).filter(item => item !== null);


  console.log(availableCellsValid);


  setActiveCells(availableCellsValid);

  return;
}
