function Square(props) {
    
return <td>{props.squareInfo?<div className="whiteSquare" onClick={props.handleClick}></div>:<div className="blackSquare" onClick={props.handleClick}></div>}</td>

}
  export default Square;