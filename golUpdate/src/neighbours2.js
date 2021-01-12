function changeAlive2(arr) {
  let neighboursArray = [];
  for (let j = 0; j < arr.length; j++) {
    for (let i = 0; i < arr[j].length; i++) {
      let neighbours = [];
      if (arr[j - 1] && arr[j + 1]) {
        neighbours = [
          arr[j - 1][i - 1],
          arr[j - 1][i],
          arr[j - 1][i + 1],
          arr[j][i - 1],
          arr[j][i + 1],
          arr[j + 1][i - 1],
          arr[j + 1][i],
          arr[j + 1][i + 1],
        ];
      } else if (!arr[j - 1] && arr[j + 1]) {
        neighbours = [
          arr[j][i - 1],
          arr[j][i + 1],
          arr[j + 1][i - 1],
          arr[j + 1][i],
          arr[j + 1][i + 1],
        ];
      } else if (arr[j - 1] && !arr[j + 1]) {
        neighbours = [
          arr[j - 1][i - 1],
          arr[j - 1][i],
          arr[j - 1][i + 1],
          arr[j][i - 1],
          arr[j][i + 1],
        ];
      }

      let livingNeighbours = neighbours.filter((item) => item).length;
      neighboursArray.push(livingNeighbours);
    }
  }
  return neighboursArray;
}

module.exports =  changeAlive2;
