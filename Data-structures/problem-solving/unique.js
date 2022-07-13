function countUniqueValues(arr1) {
  let values = [];
  let left = 0;
  // console.log(left);
  let right = arr1.length - 1;
  // console.log(right);
  while (left < right) {
    if (!(arr1[left] in values)) {
      values.push(arr1[left]);
    }
    left += 1;
    if (!(arr1[right] in values)) {
      values.push(arr1[right]);
    }
    right -= 1;
  }
  if (arr1[left] < 0) {
    return values.length + 1;
  }
  return values.length;
}

console.log(countUniqueValues([-2, -1, -1, 0, 1]));
