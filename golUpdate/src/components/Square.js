
const Square = ({handleClick, squareInfo}) => (
  
  <td>
    {squareInfo ? (
      <div className="blackSquare" onClick={handleClick}></div>
    ) : (
      <div className="whiteSquare" onClick={handleClick}></div>
    )}
  </td>
);

export default Square;
