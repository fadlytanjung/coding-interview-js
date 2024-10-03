def minimum_difference(nums, k):
    if k == 1:
        return 0  # If k == 1, the difference between the only chosen student is always 0.
    
    # Sort the scores
    nums.sort()
    
    # Initialize the minimum difference as a large number
    min_diff = float('inf')
    
    # Iterate over the sorted array to find the minimum difference
    for i in range(len(nums) - k + 1):
        current_diff = nums[i + k - 1] - nums[i]
        min_diff = min(min_diff, current_diff)
    
    return min_diff

# Example usage:
nums1 = [90]
k1 = 1
print(minimum_difference(nums1, k1))  # Output: 0

nums2 = [9, 4, 1, 7]
k2 = 2
print(minimum_difference(nums2, k2))  # Output: 2