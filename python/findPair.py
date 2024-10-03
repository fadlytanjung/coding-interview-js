def find_pairs(arr, target):
    seen = set()
    pairs = set()
    
    for num in arr:
        complement = target - num
        if complement in seen:
            pairs.add((min(num, complement), max(num, complement)))
        seen.add(num)
    
    return list(pairs)

# Example usage:
arr = [2, 4, 3, 5, 7, 8, 9]
target = 9
print(find_pairs(arr, target))
