function insertionSorting(arr) {
  for (let i = 0; i < arr.length; i++) {
    let smallestElement = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[smallestElement]) {
        smallestElement = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[smallestElement];
    arr[smallestElement] = temp;
  }
  return arr;
}

console.log(insertionSorting([9, 3, 4, 6, 5]));
