function binary(arr, num) {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((left + right) / 2);
  while (arr[middle] !== num) {
    middle = Math.floor((left + right) / 2);
    if (num < arr[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return middle;
}

console.log(binary([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
