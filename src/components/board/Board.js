import Figure from "./Figure";
import React, { useState } from 'react';
import { figureWhiteBlack, boardLetters, boardNumbers } from "./mock/figureWhiteBlack";

const figureAction = {
  wp: {
    letter: [0],
    number: [1, 2]
  },
  bp: {
    letter: [0],
    number: [-1, -2]
  }
}

function Board() {
  const [figurePosition, setPositionsFigure] = useState(figureWhiteBlack);
  const stepSize = 12.5;
  let positionsFigure = [];
  let currentFigure;
  const square = (el, couples, squareCoord) => {
    return (
      <div className={`item ${couples}`} key={el} onClick={() => {
        if (!(currentFigure && squareCoord)) return;
        if (figureActionCalc({ currentFigure, squareCoord })) return;

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

  const figureActionCalc = (props) => {
    const { currentFigure, squareCoord } = props;
    const currentFigureAction = figureAction[currentFigure.id];
    const startNumberCheck = boardNumbers.indexOf(currentFigure.number);
    const endNumberCheck = boardNumbers.indexOf(squareCoord.number);
    let flag = true;

    if (currentFigure.id.split('')[0] === 'w') {
      currentFigureAction.number.forEach((item) => {
        if (startNumberCheck >= endNumberCheck && startNumberCheck <= endNumberCheck + item && currentFigure.letter === squareCoord.letter) {
          flag = false
        }
      })
    } else {
      currentFigureAction.number.forEach((item) => {
        if (startNumberCheck <= endNumberCheck && startNumberCheck + item >= endNumberCheck && currentFigure.letter === squareCoord.letter) {
          flag = false
        }
      })
    }

    return flag
  }

  const handleFigureClick = (data) => {
    currentFigure = data;

    console.log(data);

    console.log(figurePosition);


    // setPositionsFigure(prevState => {

    // });
  };


  return (
    <div className="board">
      {allBoard}

      {figurePosition.map((item, index) => (
        <Figure itemData={item} key={item.id + index} positionData={positionsFigure} onFigureClick={handleFigureClick} />
      ))}

    </div>
  )
}

export default Board;