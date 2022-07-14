function sameFrequency(num1, num2) {
  num1 = num1.toString();
  num2 = num2.toString();
  obj1 = {};
  obj2 = {};
  if (num1.length !== num2.length) return false;
  for (i = 0; i < num1.length; ++i) {
    let k = num1[i];
    obj1[k] ? (obj1[k] += 1) : (obj1[k] = 1);
  }

  for (j = 0; j < num2.length; j++) {
    let k = num2[j];

    if (!obj1[k]) {
      return false;
    } else {
      obj1[k] -= 1;
    }
  }
  return true;
}

console.log(sameFrequency(34, 14));
