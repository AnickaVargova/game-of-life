import { useState } from "react";
import Board from "./Board";

function App() {

 
  const [boardInfo, setBoardInfo] = useState([
    [true, false, true, true, false, true, false, false, true],
    [false, false, true, false, true, false, true, false, false],
    [true, false, true, true, false, true, false, false, true],
    [false, false, true, false, true, false, true, false, false],
    [true, true, true, false, false, true, false, false, true],
    [false, false, true, false, true, false, true, false, false],
    [true, false, true, false, false, true, false, false, true],
    [false, false, false, false, true, false, true, false, false],
    [true, false, true, false, false, true, false, false, true],
    [false, false, true, false, true, true, true, false, false],
  ]);

  function changeAlive(arr) {
    let changedBoard = [];

    for (let j = 0; j < arr.length; j++) {
      let changedRow = [];
      for (let i = 0; i < arr[j].length; i++) {
        let neighbours = [];

        if (arr[j - 1]) {
          if (arr[j - 1][i - 1]) {
            neighbours.push(arr[j - 1][i - 1]);
          }
          neighbours.push(arr[j - 1][i]);
          if (arr[j - 1][i + 1]) {
            neighbours.push(arr[j - 1][i + 1]);
          }
        }

        if (arr[j][i - 1]) {
          neighbours.push(arr[j][i - 1]);
        }

        if (arr[j][i + 1]) {
          neighbours.push(arr[j][i + 1]);
        }

        if (arr[j + 1]) {
          if (arr[j + 1][i - 1]) {
            neighbours.push(arr[j + 1][i - 1]);
          }
          neighbours.push(arr[j + 1][i]);
          if (arr[j + 1][i + 1]) {
            neighbours.push(arr[j + 1][i + 1]);
          }
        }

        let livingNeighbours = 0;

        for (let item of neighbours) {
          if (item) {
            livingNeighbours++;
          }
        }

        if (arr[j][i] && (livingNeighbours === 2 || livingNeighbours === 3)) {
          arr[j][i] = true;
        } else if (
          arr[j][i] &&
          (livingNeighbours < 2 || livingNeighbours > 3)
        ) {
          arr[j][i] = false;
        } else if (!arr[j][i] && livingNeighbours === 3) {
          arr[j][i] = true;
        } else {
          arr[j][i] = false;
        }
        changedRow.push(arr[j][i]);
      }
      changedBoard.push(changedRow);
    }

    setBoardInfo(changedBoard);
  }

  const [tempo, setTempo] = useState(500);
  const [playGame, setPlayGame] = useState(null);

  function startGame() {
    setPlayGame(setInterval(() => changeAlive(boardInfo), tempo));
  }

  function stopGame() {
    setPlayGame(null);
    clearInterval(playGame);
  }

  function handleClick(index, rowIndex) {
    boardInfo[rowIndex][index] = !boardInfo[rowIndex][index];

    let newRow = boardInfo[rowIndex]
      .slice(0, index)
      .concat(boardInfo[rowIndex][index])
      .concat(boardInfo[rowIndex].slice(index + 1));

    let newBoard = boardInfo
      .slice(0, rowIndex)
      .concat([newRow])
      .concat(boardInfo.slice(rowIndex + 1));
    setBoardInfo(newBoard);
  }

  function changeTempo(e) {
    if (playGame) {
      clearInterval(playGame);
      setPlayGame(null);
      let newTempo = e.target.value;
      setPlayGame(setInterval(() => changeAlive(boardInfo), newTempo));
    } else {
      setTempo(e.target.value);
    }
  }

  return (
    <div className="App">
      <table>
        <Board board={boardInfo} handleClick={handleClick} />
      </table>
      <div id="buttons">
        <button onClick={startGame}>Start</button>
        <button onClick={stopGame}>Stop</button>
      </div>
      <div id="tempo">
        <span>Set the speed of changes: </span>
        <select value={tempo} onChange={(e) => changeTempo(e)}>
          <option value="50">0.05 s</option>
          <option value="300">0.3 s</option>
          <option value="500">0.5 s</option>
          <option value="700">0.7 s</option>
          <option value="2000">2 s</option>
        </select>
      </div>
    </div>
  );
}

export default App;
