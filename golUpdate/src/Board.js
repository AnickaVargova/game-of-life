import Row from "./Row";

function Board(props) {
 
  let board = props.board.map((row, rowIndex) => (
    <Row rowInfo={row} key={rowIndex} rowIndex={rowIndex} handleClick={props.handleClick} />
  ));

  return <tbody>{board}</tbody>;
}

export default Board;
