function merge(arr1, arr2) {
  let mergedArray = [];
  let arr1Length = arr1.length;
  let arr2Length = arr2.length;
  let i = Number(0);
  let j = Number(0);

  while (i !== arr1Length && j !== arr2Length) {
    if (arr1[i] <= arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }
  return mergedArray;
}

console.log(merge([], [1, 3]));
