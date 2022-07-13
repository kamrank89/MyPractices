function sumZero(arr) {
  for (i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      } else return false;
    }
  }
}

console.log(sumZero([2, -3, 1, 1, 1, 2]));
