function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let counter1 = {};

  for (i = 0; i < str1.length; i++) {
    let k = str1[i];
    counter1[k] ? (counter1[k] += 1) : (counter1[k] = 1);
  }
  for (j = 0; j < str2.length; j++) {
    let k = str2[j];
    if (!counter1[k]) {
      return false;
    } else {
      counter1[k] -= 1;
    }
  }
  return true;
}

console.log(validAnagram("aabkamran", "abanamrak"));
