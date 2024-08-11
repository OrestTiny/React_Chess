import Figure from "./Figure";
import React, { useState } from "react";
import { figureWhiteBlack, boardLetters } from "./mock/figureWhiteBlack";
import { identificateAvailableCells } from "./helpers/identificateAvailableCells";

function Board() {
  const [figurePosition, setPositionsFigure] = useState(
    JSON.parse(JSON.stringify(figureWhiteBlack))
  );
  const [activeCells, setAciveCells] = useState([]);
  const [actionStarted, setActionStarted] = useState(-1);

  const [isWhiteSide, setIsWhiteSide] = useState(true);

  const stepSize = 12.5;
  let positionsFigure = [];
  const square = (el, couples, squareCoord) => {
    const isActive = activeCells.some(
      (ac) =>
        ac.letter === squareCoord.letter && ac.number === squareCoord.number
    );

    return (
      <div
        className={`item ${couples}`}
        key={el}
        style={{ backgroundColor: isActive ? "red" : "" }}
        onClick={() => {
          if (actionStarted > -1 && isActive) {
            setPositionsFigure((oldFigures) => {
              oldFigures[actionStarted].letter = squareCoord.letter;
              oldFigures[actionStarted].number = squareCoord.number;
              return oldFigures;
            });
            setAciveCells([]);
            setActionStarted(-1);
          }
        }}
      >
        {squareCoord.letter === "a" && (
          <span className="item-list-number">{squareCoord.number}</span>
        )}
        {squareCoord.number === 8 && (
          <span className="item-list-letter">{squareCoord.letter}</span>
        )}
      </div>
    );
  };
  let allBoard = [];
  let count = 0;
  let boardNumber = 1;
  let boardLetterIndex = 0;

  for (let i = 0; i < 64; i++) {
    let couples;
    count = count + 1;

    if (count <= 8) {
      couples = i % 2 ? "item-bg" : "";
    } else if (count > 8 && count < 17) {
      couples = i % 2 ? "" : "item-bg";
    } else {
      count = 1;
    }

    const squareCoord = {
      letter: boardLetters[boardLetterIndex],
      number: boardNumber,
      x: stepSize * boardLetterIndex + 1,
      y: stepSize * boardNumber,
    };

    if (boardLetterIndex === 7) {
      boardLetterIndex = 0;
      boardNumber++;
    } else {
      boardLetterIndex++;
    }

    positionsFigure.push(squareCoord);
    allBoard.push(square(i, couples, squareCoord));
  }

  const handleFigureClick = (data, index) => {
    identificateAvailableCells({ data, figurePosition, setAciveCells });
    setActionStarted(index);
  };

  return (
    <div className="board">
      {allBoard}
      {figurePosition.map((item, index) => (
        <Figure
          itemData={item}
          key={item.id + index}
          positionData={positionsFigure}
          isEnemy={
            (isWhiteSide && figurePosition[index].id.split("")[0] === "b") ||
            (!isWhiteSide && figurePosition[index].id.split("")[0] === "w")
          }
          onFigureClick={() => handleFigureClick(item, index)}
        />
      ))}
    </div>
  );
}

export default Board;
