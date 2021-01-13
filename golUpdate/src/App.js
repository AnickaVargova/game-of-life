import { useState, useEffect } from "react";
import Board from "./Board";
import data from "./data";
import updateBoard from "./updateBoard";
import defaultState from "./defaultState";
import { updateSquare } from "./functionsToTest";

const App = () => {
  const [boardInfo, setBoardInfo] = useState(data);
  // const [originalData, setOriginalData] = useState(defaultState);

  // useEffect(()=>setOriginalData(defaultState))

  function changeAlive(arr) {
    setBoardInfo(updateBoard(arr));
  }

  const [tempo, setTempo] = useState(500);
  const [playGame, setPlayGame] = useState(null);

  function startGame() {
    if (!playGame) {
      setPlayGame(setInterval(() => changeAlive(boardInfo), tempo));
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
    setBoardInfo(defaultState);
    //nefunguje
  }

  function handleClick(index, rowIndex) {
    setBoardInfo(updateSquare(boardInfo, index, rowIndex));
  }

  function changeTempo(num) {
    if (playGame) {
      clearInterval(playGame);
      setPlayGame(null);
      let newTempo = num;
      setPlayGame(setInterval(() => changeAlive(boardInfo), newTempo));
      setTempo(num);
    } else {
      setTempo(num);
    }
  }

  return (
    <div className="App">
      <table>
        <Board board={boardInfo} handleClick={handleClick} />
      </table>
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
