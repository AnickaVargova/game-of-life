import styled from "styled-components";

const Cell = styled.td`
  margin: 0;
  padding: 0;
`;

const SquareBackground = styled.div`
  background: ${({black}) => (black ? "black" : "white")};
  height: 20px;
  width: 20px;
`;

const Square = ({ handleClick, squareInfo }) => (
  <Cell onClick={handleClick}>
    {squareInfo ? <SquareBackground black /> : <SquareBackground />}
  </Cell>
);

export default Square;
