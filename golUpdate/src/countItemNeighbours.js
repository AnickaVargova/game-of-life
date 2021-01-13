function countItemNeighbours(j, i, arr) {
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

  return  neighbours.filter((item) => item).length;
}

export default countItemNeighbours;
