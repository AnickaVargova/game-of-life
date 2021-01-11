import Row from "./Row";

const Board = (props) => (
  <tbody>
    {props.board.map((row, rowIndex) => (
      <Row
        rowInfo={row}
        key={rowIndex}
        rowIndex={rowIndex}
        handleClick={props.handleClick}
      />
    ))}
  </tbody>
);

export default Board;
