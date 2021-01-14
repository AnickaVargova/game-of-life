import Square from "./Square";

const Row = ({rowInfo, rowIndex, handleClick}) => (
  <tr>
    {rowInfo.map((square, index) => (
      <Square
        squareInfo={square}
        key={index}
        handleClick={() => handleClick(index, rowIndex)}
      />
    ))}
  </tr>
);

export default Row;
