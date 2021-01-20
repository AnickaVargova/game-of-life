import { useState } from "react";
import Board from "./Board";
import data from "../data";
import updateBoard from "../utils/updateBoard";
import updateSquare from "../utils/updateSquare";
import styled from "styled-components";

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
`;

const Button = styled.button`
  margin: 10px;
  margin-top: 20px;
  color: white;
  background-color: blue;
  border-radius: 5px;
  padding: 10px;
`;

const Tempo = styled.div`
  text-align: center;
  margin-top: 20px;
  height: 20px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
`;

const App = () => {
  const [boardInfo, setBoardInfo] = useState(data);
  const [tempo, setTempo] = useState(500);
  const [isRunning, setRunning] = useState(false);

  function handleClick(index, rowIndex) {
    setBoardInfo((prevBoardInfo) =>
      updateSquare(prevBoardInfo, index, rowIndex)
    );
  }

  return (
    <div className="App">
      <Board
        board={boardInfo}
        handleClick={handleClick}
        isRunning={isRunning}
        tempo={tempo}
        step={() => setBoardInfo((prevBoardInfo) => updateBoard(prevBoardInfo))}
      />

      <Buttons>
        <Button onClick={() => setRunning(true)}>Play</Button>
        <Button onClick={() => setRunning(false)}>Stop</Button>
        <Button
          onClick={() => {
            setRunning(false);
            setBoardInfo(data);
          }}
        >
          Reset
        </Button>
      </Buttons>
      <Tempo>
        <span>Change the speed: </span>
        <select
          value={tempo}
          onChange={(e) => {
            setTempo(e.target.value);
          }}
        >
          <option value="50">0.05 s (very fast)</option>
          <option value="300">0.3 s</option>
          <option value="500">0.5 s (medium)</option>
          <option value="700">0.7 s</option>
          <option value="2000">2 s (very slow)</option>
        </select>
      </Tempo>
    </div>
  );
};

export default App;
