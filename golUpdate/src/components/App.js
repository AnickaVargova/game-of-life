import { useState, useEffect } from "react";
import Board from "./Board";
import data from "../data";
import updateBoard from "../utils/updateBoard";
import updateSquare from "../utils/updateSquare";
import styled from "styled-components";

const Table = styled.table`
  border: 1px solid black;
  margin: auto;
  margin-top: 100px;
  padding: 0;
`;

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
  const [playGame, setPlayGame] = useState(null);

  function startGame() {
    if (!playGame) {
      setPlayGame(
        setInterval(
          () => setBoardInfo((prevBoardInfo) => updateBoard(prevBoardInfo)),
          tempo
        )
      );
    }
  }

  useEffect(startGame, []);

  function stopGame() {
    if (playGame) {
      setPlayGame((prevPlayGame) => {
        clearInterval(prevPlayGame);
        return null;
      });
    }
  }

  function resetGame() {
    stopGame();
    setBoardInfo(data);
  }

  function handleClick(index, rowIndex) {
    setBoardInfo((prevBoardInfo) =>
      updateSquare(prevBoardInfo, index, rowIndex)
    );
  }

  function changeTempo(num) {
    if (playGame) {
      setPlayGame((prevPlayGame) => {
        clearInterval(prevPlayGame);
        return null;
      });

      setPlayGame(
        setInterval(
          () => setBoardInfo((prevBoardInfo) => updateBoard(prevBoardInfo)),
          num
        )
      );
    }
    setTempo(() => num);
  }

  return (
    <div className="App">
      <Table>
        <Board board={boardInfo} handleClick={handleClick} />
      </Table>
      <Buttons>
        <Button onClick={stopGame}>Stop</Button>
        <Button onClick={startGame}>Play</Button>
        <Button onClick={resetGame}>Reset</Button>
      </Buttons>
      <Tempo>
        <span>Change the speed: </span>
        <select value={tempo} onChange={(e) => changeTempo(e.target.value)}>
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
