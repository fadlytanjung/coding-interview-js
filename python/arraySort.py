def bubble_sort(arr):
    n = len(arr)
    # Traverse through all elements in the array
    for i in range(n):
        # Last i elements are already in place
        for j in range(0, n - i - 1):
            # Swap if the element found is greater than the next element
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]

# Example
my_list = [64, 34, 25, 12, 22, 11, 90]
bubble_sort(my_list)
print("Sorted list:", my_list)

def selection_sort(arr):
    n = len(arr)
    for i in range(n):
        # Assume the minimum is the first element
        min_index = i
        # Find the minimum element in the unsorted portion
        for j in range(i + 1, n):
            if arr[j] < arr[min_index]:
                min_index = j
        # Swap the found minimum element with the first element of the unsorted part
        arr[i], arr[min_index] = arr[min_index], arr[i]

# Example
my_list = [64, 25, 12, 22, 11]
selection_sort(my_list)
print("Sorted list:", my_list)


def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        # Move elements of arr[0..i-1], that are greater than key, to one position ahead of their current position
        j = i - 1
        while j >= 0 and key < arr[j]:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key

# Example
my_list = [12, 11, 13, 5, 6]
insertion_sort(my_list)
print("Sorted list:", my_list)


def merge_sort(arr):
    if len(arr) > 1:
        # Finding the mid of the array
        mid = len(arr) // 2

        # Dividing the elements into 2 halves
        left_half = arr[:mid]
        right_half = arr[mid:]

        # Recursively sort both halves
        merge_sort(left_half)
        merge_sort(right_half)

        # Merging the sorted halves
        i = j = k = 0

        # Copy data to temp arrays left_half[] and right_half[]
        while i < len(left_half) and j < len(right_half):
            if left_half[i] < right_half[j]:
                arr[k] = left_half[i]
                i += 1
            else:
                arr[k] = right_half[j]
                j += 1
            k += 1

        # Checking if any element was left
        while i < len(left_half):
            arr[k] = left_half[i]
            i += 1
            k += 1

        while j < len(right_half):
            arr[k] = right_half[j]
            j += 1
            k += 1

# Example usage:
my_list = [38, 27, 43, 3, 9, 82, 10]
merge_sort(my_list)
print("Sorted list with Merge Sort:", my_list)


def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    else:
        # Choosing the pivot (here we choose the last element)
        pivot = arr[-1]
        # Elements smaller than pivot
        smaller = [x for x in arr[:-1] if x <= pivot]
        # Elements larger than pivot
        larger = [x for x in arr[:-1] if x > pivot]

        # Recursively sort the smaller and larger lists, then combine them with the pivot
        return quick_sort(smaller) + [pivot] + quick_sort(larger)

# Example usage:
my_list = [10, 7, 8, 9, 1, 5]
sorted_list = quick_sort(my_list)
print("Sorted list with Quick Sort:", sorted_list)
