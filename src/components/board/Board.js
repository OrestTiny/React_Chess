import Figure from "./Figure";

const boardLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const figureWhite = [
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
  }
]

const figureBlack = [
  {
    id: 'br',
    letter: "a",
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

      {figureWhite.map(item => (
        <Figure itemData={item} key={item.id + item.letter + item.number} positionData={positionsFigure} />
      ))}

      {figureBlack.map(item => (
        <Figure itemData={item} key={item.id + item.letter + item.number} positionData={positionsFigure} />
      ))}

    </div>
  )
}

export default Board;