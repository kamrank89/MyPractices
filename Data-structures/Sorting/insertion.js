function swap(arr, num1, num2) {
  var temp = arr[num1];
  arr[num1] = arr[num2];
  arr[num2] = arr[temp];
}

function inserionSort(arr) {
  let start = arr[1];
  if (arr[1] < arr[0]) {
    swap(arr, arr[1], arr[0]);
  }
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      for (let j = arr[i]; j > 0; j--) {
        if (arr[i] < arr[j]) {
          swap(arr[i], arr[j]);
        }
      }
    }
  }
  return arr;
}

console.log(swap([2, 4], 2, 4));
// console.log(inserionSort([3, 2, 7, 15, 8, 10]));
