import Square from "./Square";
import { useDispatch, useSelector } from "react-redux";
import { updateSquareAction } from "./../reducer";

const Row = ({ rowIndex }) => {
  const dispatch = useDispatch();
  const rowInfo = useSelector((state) => state.boardInfo[rowIndex]);
  return (
    <tr>
      {rowInfo.map((square, index) => (
        <Square
          squareInfo={square}
          key={index}
          handleClick={() => dispatch(updateSquareAction(index, rowIndex))}
        />
      ))}
    </tr>
  );
};
export default Row;
