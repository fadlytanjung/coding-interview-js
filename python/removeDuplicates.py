def removeDuplicates(nums: int) -> int:
    if not nums:
        return 0
      
    j = 1
      
    for i in range(1, len(nums)):
        if nums[i] != nums[i-1]:
            nums[j] = nums[i]
            j+=1
              
    return j

print(removeDuplicates([1,1,2,2,3,4,4,5,5,5]))