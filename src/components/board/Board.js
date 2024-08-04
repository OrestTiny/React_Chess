
function Board() {
  const square = (el, couples) => <div className={`item ${couples}`} key={el}></div>;
  let allBoard = [];
  let count = 0;

  for (let i = 0; i < 64; i++) {
    let couples = i % 2 ? 'item-bg' : '';
    count = count + 1;

    if (count <= 8) {
      couples = i % 2 ? 'item-bg' : '';
    } else if (count > 8 && count < 17) {
      couples = i % 2 ? '' : 'item-bg';
    } else {
      count = 1;
    }

    allBoard.push(square(i, couples));
  }

  return (
    <div className="board">
      {allBoard}
    </div>
  )
}

export default Board;