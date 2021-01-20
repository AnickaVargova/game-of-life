import { useEffect } from "react";
import Row from "./Row";
import styled from "styled-components";

const Table = styled.table`
  border: 1px solid black;
  margin: auto;
  margin-top: 100px;
  padding: 0;
`;

const Board = ({ board, handleClick, isRunning, tempo, step }) => {
  useEffect(() => {
    const interval = isRunning ? setInterval(step, tempo) : null;
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isRunning, tempo,step]);
  return (
    <Table>
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
    </Table>
  );
};
export default Board;
