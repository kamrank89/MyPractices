function countUpAndDown(n) {
  console.log("Going Up!");
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  console.log("At the top!\nGoing down...");
  for (let j = n - 1; j >= 0; j--) {
    console.log(j);
  }
  console.log("Back down.Bye!");
}

let t1 = performance.now();
countUpAndDown(100000);
let t2 = performance.now();
console.log(`Time elapsed ${(t2 - t1) / 1000} seconds`);
