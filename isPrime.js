function isPrime(num){
  let isPrime = true;

  if (num === 1) {
    return;
  }

  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      isPrime = false;
      break;
    }
  }

  return isPrime;
}

console.log("solution 1: ", isPrime(2));

function isPrimeTwo(num){
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
}

console.log("solution 2 (best): ", isPrimeTwo(2));