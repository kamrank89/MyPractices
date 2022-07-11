function printAllPairs(n) {
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= n; j++) {
      console.log(i, j);
    }
  }
}

let t1 = performance.now();
printAllPairs(500);
let t2 = performance.now();
console.log(`Time elapsed ${(t2 - t1) / 1000} seconds`);
