function same(arr1, arr2) {
  let counter1 = {};
  let counter2 = {};
  if (arr1.length === arr2.length) {
    for (let val of arr1) {
      counter1[val] = (counter1[val] || 0) + 1;
    }
    for (let val of arr2) {
      counter2[val] = (counter2[val] || 0) + 1;
    }
    for (let key in counter1) {
      if (!(key ** 2 in counter2)) {
        return false;
      }
      if (counter2[key ** 2] !== counter1[key]) {
        return false;
      }
    }
    return true;
  }
  return false;
}

console.log(same([1, 2, 3, 2], [1, 10, 4, 4]));
// let k = 4;
// console.log(k * k);
