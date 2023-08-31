// Javascript implementation of simple method to find count of
// pairs with given sum.

// Returns number of pairs in arr[0..n-1] with sum equal
// to 'sum'
function getPairsCount(arr, sum) {
  let count = 0;

  for (let i = 0; i < arr.length; i++)
    for (let j = i + 1; j < arr.length; j++)
      if (arr[i] + arr[j] == sum) count++;

  return count;
}

console.log("Solution 1:", getPairsCount([1, 5, 7, -1], 6));

function getPairsCountTwo(arr, k) {
  var m = new Map();
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (m.has(k - arr[i])) {
      count += m.get(k - arr[i]);
    }
    if (m.has(arr[i])) {
      m.set(arr[i], m.get(arr[i]) + 1);
    } else {
      m.set(arr[i], 1);
    }
  }
  console.log({ m })
  return count;
}


console.log("Solution 2:", getPairsCountTwo([1, 5, 7, -1], 6));
