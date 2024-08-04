import Figure from "./Figure";

const boardLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const figureAll = [
  { id: 'wp',
    
  }
]

function Board() {
  const stepSize = 12.5;
  const positionsFigure = [];
  const square = (el, couples, squareCoord) => {
    return (
      <div className={`item ${couples}`} key={el} onClick={() => {
        console.log(squareCoord);
      }}>
        {squareCoord.letter === 'a' && <span className="item-list-number">{squareCoord.number}</span>}
        {squareCoord.number === 8 && <span className="item-list-letter">{squareCoord.letter}</span>}
      </div>
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


  return (
    <div className="board">
      {allBoard}
      <Figure />
    </div>
  )
}

export default Board;