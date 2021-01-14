import styled from "styled-components";

const BlackSquare = styled.div`
  height: 20px;
  width: 20px;
  background-color: black;
  margin: 0;
  padding: 0;
`;

const WhiteSquare = styled.div`
  height: 20px;
  width: 20px;
  background-color: white;
  margin: 0;
  padding: 0;
`;

const Cell = styled.td`
  height: 20px;
  width: 20px;
  margin: 0;
  padding: 0;
`;

const Square = ({ handleClick, squareInfo }) => (
  <Cell>
    {squareInfo ? (
      <BlackSquare onClick={handleClick} />
    ) : (
      <WhiteSquare onClick={handleClick} />
    )}
  </Cell>
);

export default Square;
