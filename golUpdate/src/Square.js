const Square = (props) => (
  <td>
    {props.squareInfo ? (
      <div className="blackSquare" onClick={props.handleClick}></div>
    ) : (
      <div className="whiteSquare" onClick={props.handleClick}></div>
    )}
  </td>
);

export default Square;
