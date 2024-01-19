import React, { Component } from "react";

class Board extends Component {
  render() {
    const boardSize = 8;
    const chessBoard = [];

    for (let row = 0; row < boardSize; row++) {
      for (let col = 0; col < boardSize; col++) {
        const cellColorClass = (row + col) % 2 === 0 ? 'white-cell' : 'black-cell';
        chessBoard.push(
          <div data-key={`${row}-${col}`} className={`chess-cell ${cellColorClass}`}></div>
        );
      }
    }

    return (
      <div className="chess-board">
        {chessBoard}
      </div>
    )
  }
}

export default Board;
