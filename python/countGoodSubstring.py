# sliding window pattern
def countGoodSubstrings(s: str) -> int:
    if not s or len(s) < 3:
        return 0
    
    # Solution: use a hashmap to keep track of characters
    # while iterating thorugh the string with a sliding window
    # Once window size exceeds k => move left up
    # Once a character frequency exceeds 1 => move left up
    # Once window size == k => res += 1

    l = res = 0
    count = {}

    for r in range(len(s)):
        # Populate hashmap:
        count[s[r]] = 1 + count.get(s[r], 0)

        # Once window size exceeds k => move left up
        # Once a character frequency exceeds 1 => move left up
        while (r - l + 1 > 3 or count.get(s[r]) > 1):
            count[s[l]] -= 1
            l += 1
    
        if r - l + 1 == 3:
            res += 1
    return res

print(countGoodSubstrings('aababcabc')) # 4
# { a: 1 } l = 0 r = 0 r = 0
# { a: 2 } l = 0 r = 1 -> { a: 1 } l = 1 r = 1
# { a: 1 b: 1} l = 1 r = 2
# { a: 2 b: 1} l = 1 r = 3 -> { a: 1 b: 1 } l = 2 r = 3
# { a: 2 b: 1} l = 2 r = 4 -> { a: 1 b: 1 } l = 3 r = 4
print(countGoodSubstrings('xyzzaz')) # 1


def simpleSolution(s):
    if not s or len(s) < 3:
        return 0
    
    count = 0
    for i in range(2, len(s)):
        if s[i] != s[i-1] and s[i] != s[i-2] and s[i-1] != s[i-2]:
            count+=1
            
    return count

print(simpleSolution('aababcabc')) # 4
print(simpleSolution('xyzzaz')) # 1