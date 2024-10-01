def sum_first_last_two(n):
    is_negative = n < 0
    
    num = -n if is_negative else n

    last_two = num % 100

    first_two = num
    while first_two >= 100:
        first_two //= 10

    return first_two + last_two

# Test cases
print(sum_first_last_two(-2024))  # Output: 44  (-20 + 24)
print(sum_first_last_two(1910))   # Output: 29  (19 + 10)
