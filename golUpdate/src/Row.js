import Square from "./Square";

const Row = (props) => (
  <tr>
    {props.rowInfo.map((square, index) => (
      <Square
        squareInfo={square}
        key={index}
        handleClick={() => props.handleClick(index, props.rowIndex)}
      />
    ))}
  </tr>
);

export default Row;
