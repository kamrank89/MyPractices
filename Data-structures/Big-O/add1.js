function addUpto(n) {
  total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}

let t1 = performance.now();
addUpto(1000000000);
let t2 = performance.now();

console.log(`Time Elapsed ${(t2 - t1) / 1000} seconds`);
