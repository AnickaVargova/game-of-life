import Square from "./Square";

function Row(props) {
 

  return <tr>{props.rowInfo.map((square, index) => (
    <Square squareInfo={square} key={index} handleClick={()=>props.handleClick(index, props.rowIndex)}/>
  ))}</tr>;
}
 
export default Row;
