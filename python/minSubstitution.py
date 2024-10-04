def minSubstitutions(s):
    substitutions = 0
    char = ""

    for ch in s:
        if ch != char:
            char = ch  # Update char to the current character
        else:
            substitutions += 1  # Count a substitution
            char = ""  # Reset char to avoid counting duplicates
    
    return substitutions

print(minSubstitutions("aabb"))
print(minSubstitutions("aaab"))
print(minSubstitutions("abab"))
print(minSubstitutions("aaaabb"))