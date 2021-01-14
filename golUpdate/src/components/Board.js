import Row from "./Row";


const Board = ({board,handleClick}) => {
  return (
    <tbody>
      {board.map((row, rowIndex) => (
        <Row
          rowInfo={row}
          key={rowIndex}
          rowIndex={rowIndex}
          handleClick={handleClick}
        />
      ))}
    </tbody>
  );
};
export default Board;
