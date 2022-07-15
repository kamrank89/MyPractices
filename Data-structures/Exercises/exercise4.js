function areThereDuplicates() {
  if (typeof arguments === "number") {
    arguments = arguments.toString();
  }
  obj = {};
  for (i = 0; i < arguments.length; i++) {
    let k = arguments[i];
    obj[k] ? (obj[k] += 1) : (obj[k] = 1);
  }

  for (i = 0; i < arguments.length; i++) {
    let k = arguments[i];
    if (obj[k] > 1) return true;
  }
  return false;
}

console.log(areThereDuplicates("a", "b", "c", "a"));
