# sliding window pattern
def numSubarrayProductLessThanK(nums, k):
    if k <= 1:
        return 0
    
    product = 1
    left = 0
    result = 0
    
    for right in range(len(nums)):
        product *= nums[right]
        
        while product >= k and left <= right:
            product //= nums[left]
            left += 1
        
        result += right - left + 1
    
    return result


print(numSubarrayProductLessThanK([1,2,3],4)) #4
print(numSubarrayProductLessThanK([2,2,4,5,6,8],8)) #2

# brute force solution
def numSubarrayProductLessThanKBS(nums, k):
    size = len(nums)
    result = 0
    
    for i in range(size):
        count = 1
        for j in range(i, size):
            count*=nums[j]
            
            if count >= k:
                break
            result+=1
    
    return result

print(numSubarrayProductLessThanKBS([1,2,3],4)) #4
print(numSubarrayProductLessThanKBS([2,2,4,5,6,8],8)) #2