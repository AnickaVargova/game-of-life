
  
  function changeAlive1(arr) {
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

  


module.exports = changeAlive1;