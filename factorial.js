function FirstFactorial(num) {
  let res = 1;

  for (let i = 0; i < num; i++) {
    res = res * (num - i);
  }
  return res;
}

function FirstFactorialRecursive(num) {
  if (num === 1) {
    return num;
  } else {
    return num * FirstFactorialRecursive(num - 1);
  }
}

console.log("solution 1:", FirstFactorial(8));
console.log("solution 2 (recursive):", FirstFactorialRecursive(8));
