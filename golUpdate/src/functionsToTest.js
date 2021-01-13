  import countItemNeighbours from './countItemNeighbours';

  export function neighbours1(arr) {
    let neighboursArray = [];
   
    for (let j = 0; j < arr.length; j++) {
      for (let i = 0; i < arr[j].length; i++) {
        let neighbours = [];
        if (arr[j - 1] && arr[j + 1]) {
          neighbours = arr[j - 1]
            .slice(i - 1, i + 2)
            .concat(arr[j][i - 1])
            .concat(arr[j][i + 1])
            .concat(arr[j + 1].slice(i - 1, i + 2));
        } else if (!arr[j - 1] && arr[j + 1]) {
          neighbours = [arr[j][i - 1]]
            .concat(arr[j][i + 1])
            .concat(arr[j + 1].slice(i - 1, i + 2));
        } else if (arr[j - 1] && !arr[j + 1]) {
          neighbours = arr[j - 1]
            .slice(i - 1, i + 2)
            .concat(arr[j][i - 1])
            .concat(arr[j][i + 1]);
        }

        let livingNeighbours = neighbours.filter((item) => item).length;
        neighboursArray.push(livingNeighbours);
      }
    }
    return neighboursArray;
  }

  export function neighbours2(arr) {
    let neighboursArray = [];
    for (let j = 0; j < arr.length; j++) {
      for (let i = 0; i < arr[j].length; i++) {
       
        neighboursArray.push(countItemNeighbours(j,i,arr));
      }
    }
    return neighboursArray;
  }

  export function updateSquare(boardInfo,index,rowIndex){
    boardInfo[rowIndex][index] = !boardInfo[rowIndex][index];

    let newRow = boardInfo[rowIndex]
      .slice(0, index)
      .concat(boardInfo[rowIndex][index])
      .concat(boardInfo[rowIndex].slice(index + 1));

    let newBoard = boardInfo
      .slice(0, rowIndex)
      .concat([newRow])
      .concat(boardInfo.slice(rowIndex + 1));

    return newBoard;
  }

