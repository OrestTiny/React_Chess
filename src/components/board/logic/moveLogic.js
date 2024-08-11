import { boardNumbers, boardLetters } from "../mock/figureWhiteBlack";

const coordinatesIndex = (x, y) => {
  return {
    x: boardLetters.indexOf(x),
    y: boardNumbers.indexOf(y)
  }
}

function moveLogic(params) {
  const { currentFigure } = params;
  const currentCoordinates = coordinatesIndex(currentFigure.letter, currentFigure.number);

  console.log(currentCoordinates);

  const figurePawnAction = () => {
    const action = {
      wp: {
        startRotate: {
          x: [0],
          y: [-1, -2]
        },
        defaultRotate: {
          x: [0],
          y: [-1]
        },
        attackRotate: {
          x: [-1, 1],
          y: [-1]
        }
      },
      bp: {
        startRotate: {
          x: [0],
          y: [1, 2]
        },
        defaultRotate: {
          x: [0],
          y: [1]
        },
        attackRotate: {
          x: [-1, 1],
          y: [1]
        }
      }
    };



  }



  switch (currentFigure.id) {
    case 'wp' || 'bp':
      figurePawnAction();
      break;
    default:
      console.log(`Sorry, we are out of ${currentFigure.id}.`);
  }


  // const figureAction = {
  //   wp: {
  //     letter: [0],
  //     number: [1, 2]
  //   },
  //   bp: {
  //     letter: [0],
  //     number: [-1, -2]
  //   }
  // }


  // 
  // const currentFigureAction = figureAction[currentFigure.id];
  // const startNumberCheck = boardNumbers.indexOf(currentFigure.number);
  // const endNumberCheck = boardNumbers.indexOf(squareCoord.number);
  // let flag = true;

  // if (currentFigure.id.split('')[0] === 'w') {
  //   currentFigureAction.number.forEach((item) => {
  //     if (startNumberCheck >= endNumberCheck && startNumberCheck <= endNumberCheck + item && currentFigure.letter === squareCoord.letter) {
  //       flag = false
  //     }
  //   })
  // } else {
  //   currentFigureAction.number.forEach((item) => {
  //     if (startNumberCheck <= endNumberCheck && startNumberCheck + item >= endNumberCheck && currentFigure.letter === squareCoord.letter) {
  //       flag = false
  //     }
  //   })
  // }


  // return flag;
}


export default moveLogic;