def twoSum(nums, target):
    temp = {}

    for i in range(len(nums)):
        if target - nums[i] in temp:
            return [temp[target - nums[i]], i]
        temp[nums[i]] = i

print(twoSum([2,7,11,15],9))