function maxDiff(arr) {
  let max_diff = arr[1] - arr[0];
  let min_element = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - min_element > max_diff) {
      max_diff = arr[i] - min_element;
    }
    if (arr[i] < min_element) {
      min_element = arr[i];
    }
  }
  return max_diff;
}

console.log("Solution 1: ", maxDiff([1, 2, 90, 10, 110]));

function maxDiffTwo(nums) {
  let max = 0;
  let minNum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    let diff = nums[i] - minNum;
    if (diff > max) {
      max = diff;
    }
    if (minNum > nums[i]) {
      minNum = nums[i];
    }
  }
  return max || -1;
}

console.log("Solution 2 (best): ", maxDiffTwo([1, 2, 90, 10, 110]));
