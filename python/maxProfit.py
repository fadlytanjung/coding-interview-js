def maxProfit(prices: int) -> int:
        
    profit = 0

    for i in range(1, len(prices)):
        if prices[i] > prices[i - 1]:
            profit += prices[i] - prices[i - 1]

    return profit

print(maxProfit([7, 1, 5, 3, 6, 4]))  # Output: 7
print(maxProfit([1, 2, 3, 4, 5]))     # Output: 4
print(maxProfit([7, 6, 4, 3, 1]))     # Output: 0