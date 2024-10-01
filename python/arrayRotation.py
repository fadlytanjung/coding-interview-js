def rotate(nums, k):
    n = len(nums)
    k %= n  # Handle cases where k is greater than the length of the array
    
    # Helper function to reverse part of the array
    def reverse(start, end):
        while start < end:
            nums[start], nums[end] = nums[end], nums[start]
            start += 1
            end -= 1

    # Step 1: Reverse the entire array
    reverse(0, n - 1)

    # Step 2: Reverse the first k elements
    reverse(0, k - 1)

    # Step 3: Reverse the remaining elements
    reverse(k, n - 1)

# Test cases
nums1 = [1,2,3,4,5,6,7]
rotate(nums1, 3)
print(nums1)  # Output: [5,6,7,1,2,3,4]

nums2 = [-1,-100,3,99]
rotate(nums2, 2)
print(nums2)  # Output: [3,99,-1,-100]
