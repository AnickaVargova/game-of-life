import { useState, useEffect } from "react";
import Board from "./Board";

const App = () => {
  const defaultState = [
    [
      true,
      false,
      true,
      true,
      false,
      true,
      false,
      false,
      true,
      true,
      false,
      true,
      false,
      false,
      true,
      false,
      false,
      true,
      false,
      true,
    ],
    [
      false,
      false,
      true,
      false,
      true,
      false,
      true,
      false,
      false,
      true,
      false,
      true,
      true,
      false,
      true,
      false,
      false,
      true,
      false,
      true,
    ],
    [
      true,
      false,
      true,
      true,
      false,
      true,
      false,
      false,
      true,
      false,
      false,
      true,
      true,
      false,
      true,
      true,
      false,
      true,
      false,
      true,
    ],
    [
      false,
      false,
      true,
      false,
      true,
      false,
      true,
      false,
      false,
      true,
      true,
      true,
      true,
      false,
      true,
      false,
      false,
      true,
      false,
      true,
    ],
    [
      true,
      true,
      true,
      false,
      false,
      true,
      false,
      false,
      true,
      true,
      false,
      true,
      false,
      false,
      true,
      false,
      true,
      false,
      false,
      true,
    ],
    [
      false,
      false,
      true,
      false,
      true,
      false,
      true,
      false,
      false,
      true,
      false,
      true,
      true,
      true,
      true,
      false,
      false,
      true,
      false,
      true,
    ],
    [
      true,
      false,
      true,
      false,
      false,
      true,
      false,
      false,
      true,
      false,
      true,
      false,
      true,
      false,
      true,
      false,
      false,
      true,
      false,
      true,
    ],
    [
      false,
      false,
      false,
      false,
      true,
      false,
      true,
      false,
      false,
      true,
      false,
      false,
      true,
      true,
      true,
      true,
      false,
      false,
      false,
      true,
    ],
    [
      true,
      false,
      true,
      false,
      false,
      true,
      false,
      false,
      true,
      true,
      false,
      true,
      false,
      false,
      true,
      false,
      true,
      true,
      false,
      true,
    ],
    [
      false,
      false,
      true,
      false,
      true,
      true,
      true,
      false,
      false,
      true,
      true,
      true,
      true,
      false,
      true,
      false,
      false,
      true,
      false,
      true,
    ],
    [
      true,
      false,
      true,
      true,
      false,
      true,
      false,
      false,
      true,
      false,
      false,
      false,
      true,
      false,
      false,
      false,
      false,
      true,
      false,
      true,
    ],
    [
      false,
      false,
      true,
      false,
      true,
      false,
      true,
      false,
      false,
      true,
      true,
      false,
      true,
      false,
      true,
      false,
      false,
      true,
      false,
      true,
    ],
    [
      true,
      false,
      true,
      true,
      false,
      true,
      false,
      false,
      true,
      true,
      false,
      true,
      false,
      false,
      true,
      false,
      true,
      true,
      false,
      true,
    ],
    [
      false,
      false,
      true,
      false,
      true,
      false,
      true,
      false,
      false,
      true,
      false,
      false,
      true,
      false,
      true,
      true,
      true,
      false,
      false,
      true,
    ],
    [
      true,
      true,
      true,
      false,
      false,
      true,
      false,
      false,
      true,
      true,
      true,
      true,
      true,
      false,
      true,
      false,
      false,
      true,
      false,
      true,
    ],
    [
      false,
      false,
      true,
      false,
      true,
      false,
      true,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      true,
      true,
      false,
      true,
      false,
      true,
    ],
    [
      true,
      false,
      true,
      false,
      false,
      true,
      false,
      false,
      true,
      true,
      false,
      true,
      false,
      false,
      true,
      false,
      false,
      false,
      false,
      true,
    ],
    [
      false,
      false,
      false,
      false,
      true,
      false,
      true,
      false,
      false,
      true,
      false,
      true,
      true,
      false,
      true,
      false,
      false,
      true,
      false,
      true,
    ],
    [
      true,
      false,
      true,
      false,
      false,
      true,
      false,
      false,
      true,
      true,
      false,
      true,
      true,
      false,
      true,
      false,
      true,
      true,
      false,
      true,
    ],
    [
      false,
      false,
      true,
      false,
      true,
      true,
      true,
      false,
      false,
      true,
      false,
      false,
      true,
      false,
      true,
      false,
      false,
      true,
      false,
      true,
    ],
  ];

  const [boardInfo, setBoardInfo] = useState(defaultState);

  function changeAlive(arr) {
    let changedBoard = [];

    for (let j = 0; j < arr.length; j++) {
      let changedRow = [];
      for (let i = 0; i < arr[j].length; i++) {
        let neighbours = [];
        if (arr[j - 1] && arr[j + 1]) {
          // neighbours = [
          //   arr[j - 1][i - 1],
          //   arr[j - 1][i],
          //   arr[j - 1][i + 1],
          //   arr[j][i - 1],
          //   arr[j][i + 1],
          //   arr[j + 1][i - 1],
          //   arr[j + 1][i],
          //   arr[j + 1][i + 1],
          // ];

          neighbours = arr[j - 1]
            .slice(i - 1, i + 2)
            .concat(arr[j][i - 1])
            .concat(arr[j][i + 1])
            .concat(arr[j + 1].slice(i - 1, i + 2));
        } else if (!arr[j - 1] && arr[j + 1]) {
          // neighbours = [
          //   arr[j][i - 1],
          //   arr[j][i + 1],
          //   arr[j + 1][i - 1],
          //   arr[j + 1][i],
          //   arr[j + 1][i + 1],
          // ];

          neighbours = [arr[j][i - 1]]
            .concat(arr[j][i + 1])
            .concat(arr[j + 1].slice(i - 1, i + 2));
        } else if (arr[j - 1] && !arr[j + 1]) {
          // neighbours = [
          //   arr[j - 1][i - 1],
          //   arr[j - 1][i],
          //   arr[j - 1][i + 1],
          //   arr[j][i - 1],
          //   arr[j][i + 1],
          // ];
          neighbours = arr[j - 1]
            .slice(i - 1, i + 2)
            .concat(arr[j][i - 1])
            .concat(arr[j][i + 1]);
        }

        let livingNeighbours = neighbours.filter((item) => item).length;

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
    if (!playGame) {
      setPlayGame(setInterval(() => changeAlive(boardInfo), tempo));
      // setPlayGame(setTimeout(() => changeAlive(boardInfo), tempo));
    }
  }

  useEffect(startGame, []);
  // useEffect(startGame, [boardInfo])

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
