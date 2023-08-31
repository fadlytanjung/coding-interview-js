function fibonacci(num) {
  let n1 = 0,
    n2 = 1,
    nextTerm;
  let fib = [];

  for (let i = 1; i <= num; i++) {
    // Next fibonacci number = previous + one before previous
    fib.push(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }

  return fib;
}

console.log("solution 1:", fibonacci(10));

function fibonacciTwo(num) {
 if (num < 2) {
   return num;
 } else {
   return fibonacciTwo(num - 1) + fibonacciTwo(num - 2);
 }
}

function mainFibonacciTwo(num){
  let fib = [];
  for (let i = 0; i < num; i++) {
    fib.push(fibonacciTwo(i));
  }

  return fib;
}

console.log("solution 2 (recursive):", mainFibonacciTwo(10));

