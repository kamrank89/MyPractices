function power(base, power1) {
  if (power1 === 0) return 1;
  return base * power(base, power1 - 1);
}

console.log(power(2, 0));
