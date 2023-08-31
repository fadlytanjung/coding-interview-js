const myPow = (x, n) => {
  if (n === 0) {
    return 1;
  }

  if (x === 0) {
    return 0;
  }

  if (n < 0) {
    x = 1 / x;
    n = -n;
  }

  if (n % 2 === 0) {
    let halfPower = myPow(x, n / 2);
    return halfPower * halfPower;
  } else {
    return x * myPow(x, n - 1);
  }
};

console.log("solution 1 (recursive): ", myPow(2, -6));

const myPowTwo = (x, n) => {
  if (n === 0) {
    return 1;
  }

  if (x === 0) {
    return 0;
  }

  if (n < 0) {
    x = 1 / x;
    n = -n;
  }
  let res = 1;
  for (let i = 0; i < n; i++) {
    res = res * x;
  }

  return res;
}


console.log("solution 2: ", myPowTwo(2, -6));

