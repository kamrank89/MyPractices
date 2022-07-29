function pivotHelper(arr, startingInd = 0, endingInd = arr.length - 1) {
  let pivot = arr[startingInd];
  let pivotind = startingInd;

  for (let i = startingInd + 1; i < endingInd; i++) {
    if (pivot > arr[i]) {
      pivotind++;
      [arr[i], arr[pivotind]] = [arr[pivotind], arr[i]];
    }
  }
  [arr[startingInd], arr[pivotind]] = [arr[pivotind], arr[startingInd]];

  return pivotind;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotindex = pivotHelper(arr, left, right);
    quickSort(arr, left, pivotindex - 1);
    quickSort(arr, pivotindex + 1, right);
  }
  return arr;
}
console.log(quickSort([1, 10, 6, 5, 4, 3, 2]));
