/**
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate = (nums) => {
  let t = nums[0],
    h = nums[0];

  while (true) {
    t = nums[t];
    h = nums[nums[h]];
    if (t == h) break;
  }

  let ptr1 = nums[0],
    ptr2 = t;

  while (ptr1 != ptr2) {
    ptr1 = nums[ptr1];
    ptr2 = nums[ptr2];
  }
  return ptr1;
};

console.log("solution 1:", findDuplicate([3, 1, 3, 4, 2]));

const findDuplicateTwo = (nums) => {
  const dict = {};
  for(let num in nums){
    if(dict[nums[num]]){
        return nums[num];
    }else{
        dict[nums[num]] = 1;
    }
  }
};

console.log("solution 2 simple:", findDuplicateTwo([1, 2, 3, 3, 4, 5]));