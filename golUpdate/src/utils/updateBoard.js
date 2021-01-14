import countItemNeighbours from "./countItemNeighbours";

function updateBoard(arr) {
  let changedBoard = [];

  for (let j = 0; j < arr.length; j++) {
    let changedRow = [];
    for (let i = 0; i < arr[j].length; i++) {
      let livingNeighbours = countItemNeighbours(j, i, arr);

      if (arr[j][i] && (livingNeighbours === 2 || livingNeighbours === 3)) {
        arr[j][i] = true;
      } else if (arr[j][i] && (livingNeighbours < 2 || livingNeighbours > 3)) {
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

  return changedBoard;
}

export default updateBoard;
