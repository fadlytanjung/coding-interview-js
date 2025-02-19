# Solution One
# def solution_one(arr):
#     index = 0
#     while index < len(arr):
#         if arr[index] == 0:
#             arr.remove(0)
#             arr.append(0)
#         else:
#             index += 1
#     return arr

# print("Solution 1:", solution_one([2, 4, 0, 4, 3, -1, 0, 5, 0]))


# Solution Two
def solution_two(arr):
    m = 0
    for i in range(len(arr)):
        if arr[i] != 0:
            arr[i], arr[m] = arr[m], arr[i]
            m += 1
    return arr

print("Solution 2:", solution_two([2, 4, 0, 4, 3, -1, 0, 5, 0]))


# # Solution Three
def solution_three(arr):
    j = 0
    i = 1
    while i < len(arr):
        if arr[j] == 0 and arr[i] != 0:
            arr[j] = arr[i]
            arr[i] = 0
            j += 1
        if arr[j] != 0:
            j += 1
        i += 1
    return arr

print("Solution 3:", solution_three([2, 4, 0, 4, 3, -1, 0, 5, 0]))
