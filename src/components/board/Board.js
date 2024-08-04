
const boardLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function Board() {
  const stepSize = 12.5;
  const positionsFigure = [];
  const square = (el, couples, squareCoord) => {
    return (
      <div className={`item ${couples}`} key={el} onClick={() => {
        console.log(squareCoord);
      }}></div>
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

    if (boardLetterIndex == 7) {
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
    </div>
  )
}

export default Board;