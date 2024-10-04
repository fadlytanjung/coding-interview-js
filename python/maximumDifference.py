def maximumDifference(nums):
    if len(nums) < 2:
        return -1

    min_val = nums[0]  # Initialize the minimum value to the first element
    max_diff = -1      # Initialize the max difference to -1

    for j in range(1, len(nums)):
        # Check if the current element can form a valid pair with min_val
        if nums[j] > min_val:
            diff = nums[j] - min_val
            # Manually update max_diff if the current difference is larger
            if diff > max_diff:
                max_diff = diff
        
        # Manually update min_val if the current element is smaller
        if nums[j] < min_val:
            min_val = nums[j]

    return max_diff

print(maximumDifference([7,1,5,4]))
print(maximumDifference([9,4,3,2]))
print(maximumDifference([1,5,2,10]))
