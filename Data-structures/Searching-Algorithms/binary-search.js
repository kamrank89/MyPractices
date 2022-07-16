function binary(arr, num) {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    let middle = Math.floor((left + right) / 2);
    if (middle === num) {
      return arr.indexOf(middle);
    }
    if (middle < num) {
      left = middle;
    }
    if (middle > num) {
      right = middle;
    }
    return -1;
  }
}

console.log(binary([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11));
