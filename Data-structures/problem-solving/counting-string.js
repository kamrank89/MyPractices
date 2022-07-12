function countingNumberOfCharacter(string) {
  counter = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === " ") {
      counter += 0;
    } else {
      counter += 1;
    }
  }
  return counter;
}

console.log(countingNumberOfCharacter("kamra n"));
