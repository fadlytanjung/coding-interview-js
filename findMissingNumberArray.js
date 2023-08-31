// a represents the array
// n : Number of elements in array a
function getMissingNo(a, n) {
  let i, total = 1;

  for (i = 2; i < n + 1; i++) {
    total += i;
    total -= a[i - 2];
  }
  return total;
}

console.log("solution 1:", getMissingNo([1, 2, 4, 5], 4));
  
function getMissingNoTwo(a, n) { // N*(N+1)/2

  let total = Math.floor(((n + 1) * (n + 2)) / 2); // (4+1) * (4+2) /2
  for (let i = 0; i < n; i++) {
    total -= a[i];
  }
  return total;
}

console.log("solution 2:", getMissingNoTwo([1, 2, 3, 5], 4));
