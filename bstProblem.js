/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

let sortedArrayToBST = function (nums) {
  const fn = (nums, left, right) => {
    if (left >= right) return null;
    const mid = Math.floor((left + right) / 2);
    return new TreeNode(
      nums[mid],
      fn(nums, left, mid),
      fn(nums, mid + 1, right)
    );
  };

  return fn(nums, 0, nums.length);
};

console.log("solution 1:", sortedArrayToBST([1, 4, 5, 6, 2, 5, 6, 6]));
