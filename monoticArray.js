/**
 * @param {number[]} nums
 * @return {boolean}
 */
const isMonotonic = function (nums) {
  let increasing = true;
  let decreasing = true;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] < nums[i]) {
      decreasing = false;
    } else if (nums[i - 1] > nums[i]) {
      increasing = false;
    }
  }
  return increasing || decreasing;
};

console.log("Solution 1: ", isMonotonic([1,2,2,3,4]));

var isMonotonicTwo = function (nums) {
  let a = nums.length;
  let count1 = 0;
  let count2 = 0;

  for (let i = 0; i < a; i++) {
    if (nums[i] <= nums[i + 1]) {
      count1++;
    }
    if (nums[i] >= nums[i + 1]) {
      count2++;
    }
  }
  return (count1 === a - 1 || count2 === a - 1)
};

console.log("Solution 2: ", isMonotonic([1, 2, 2, 3, 4]));
