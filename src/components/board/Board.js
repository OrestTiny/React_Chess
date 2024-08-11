import Figure from "./Figure";
import React, { useEffect, useState } from 'react';
import { figureWhiteBlack, boardLetters } from "./mock/figureWhiteBlack";
import moveLogic from "./logic/moveLogic";

const figureCurrSide = 'white';

function Board() {
  const [figurePosition, setPositionsFigure] = useState(figureWhiteBlack);
  const [board, triggerBoard] = useState([]);
  const [currentSide, changeSide] = useState(figureCurrSide);

  const stepSize = 12.5;
  let positionsFigure = [];
  let currentFigure;
  const square = (el, couples, squareCoord) => {
    return (
      <div className={`item ${couples}`} key={el} onClick={() => {
        if (!(currentFigure && squareCoord)) return;

        if (currentFigure) {
          setPositionsFigure(prevState => {
            const updatedPositions = prevState.map(item => {
              if (item.letter === currentFigure.letter && item.number === currentFigure.number && item.id === currentFigure.id) {
                return {
                  ...item,
                  letter: squareCoord.letter,
                  number: squareCoord.number,
                }
              }
              return item;
            });

            return updatedPositions;
          });
        }
      }
      }>
        {squareCoord.letter === 'a' && <span className="item-list-number">{squareCoord.number}</span>}
        {squareCoord.number === 8 && <span className="item-list-letter">{squareCoord.letter}</span>}
      </div >
    )
  };
  let allBoard = [];
  let count = 0;
  let boardNumber = 1;
  let boardLetterIndex = 0;

  for (let i = 0; i < 64; i++) {
    let couples;
    count = count + 1;

    if (count <= 8) {
      couples = i % 2 ? 'item-bg' : '';
    } else if (count > 8 && count < 17) {
      couples = i % 2 ? '' : 'item-bg';
    } else {
      count = 1;
    }

    const squareCoord = {
      letter: boardLetters[boardLetterIndex],
      number: boardNumber,
      x: stepSize * boardLetterIndex + 1,
      y: stepSize * boardNumber
    }

    if (boardLetterIndex === 7) {
      boardLetterIndex = 0;
      boardNumber++;
    } else {
      boardLetterIndex++;
    }

    positionsFigure.push(squareCoord)
    allBoard.push(square(i, couples, squareCoord));
  }

  useEffect(() => {
    triggerBoard(allBoard);
  }, []);

  const handleFigureClick = (data) => {
    currentFigure = data;

    console.log(board);


  };


  return (
    <div className="board">
      {board}

      {figurePosition.map((item, index) => (
        <Figure itemData={item} key={item.id + index} positionData={positionsFigure} onFigureClick={handleFigureClick} />
      ))}

    </div>
  )
}

export default Board;