import { useState, useEffect } from "react";
import Board from "./Board";
import startData from "../data/startData";
import updateBoard from "../utils/updateBoard";
import resetData from "../data/resetData";
import updateSquare from "../utils/updateSquare";
import styled from "styled-components";

const App = () => {
  const [boardInfo, setBoardInfo] = useState(startData);
  const [tempo, setTempo] = useState(500);
  const [playGame, setPlayGame] = useState(null);

  function startGame() {
    if (!playGame) {
      setPlayGame(
        setInterval(() => setBoardInfo(updateBoard(boardInfo)), tempo)
      );
    }
  }

  useEffect(startGame, []);

  function stopGame() {
    if (playGame) {
      clearInterval(playGame);
      setPlayGame(null);
    }
  }

  function resetGame() {
    clearInterval(playGame);
    setPlayGame(null);
    let resetDataCopy = resetData.map((row) => row.slice());
    setBoardInfo(resetDataCopy);
  }

  function handleClick(index, rowIndex) {
    setBoardInfo(updateSquare(boardInfo, index, rowIndex));
  }

  function changeTempo(num) {
    if (playGame) {
      clearInterval(playGame);
      setPlayGame(null);
      setPlayGame(setInterval(() => setBoardInfo(updateBoard(boardInfo)), num));
    }
    setTempo(num);
  }

  
  const Table = styled.table`
    border: 1px solid black;
    margin: auto;
    margin-top: 100px;
    padding: 0;
  `;
  

  return (
    <div className="App">
      <Table>
        <Board board={boardInfo} handleClick={handleClick} />
      </Table>
      <div id="buttons">
        <button onClick={stopGame}>Stop</button>
        <button onClick={startGame}>Play</button>
        <button onClick={resetGame}>Reset</button>
      </div>
      <div id="tempo">
        <span>Set the speed of changes: </span>
        <select value={tempo} onChange={(e) => changeTempo(e.target.value)}>
          <option value="50">0.05 s</option>
          <option value="300">0.3 s</option>
          <option value="500">0.5 s</option>
          <option value="700">0.7 s</option>
          <option value="2000">2 s</option>
        </select>
      </div>
    </div>
  );
};

export default App;
