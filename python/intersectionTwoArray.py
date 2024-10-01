def intersect(nums1, nums2):

    count1 = {}
    for num in nums1:
        if num in count1:
            count1[num] += 1
        else:
            count1[num] = 1
    count2 = {}
    for num in nums2:
        if num in count2:
            count2[num] += 1
        else:
            count2[num] = 1

    # Find the intersection by taking the minimum count for each element
    result = []
    for num in count1:
        if num in count2:
            min_count = min(count1[num], count2[num])
            result.extend([num] * min_count)  # Append the number 'min_count' times

    return result

print(intersect([1,2,2,1], [2,2]))  # Output: [2,2]
print(intersect([4,9,5], [9,4,9,8,4]))  # Output: [4,9] or [9,4]