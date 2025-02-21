# slash code interview
def solution(nums: int) -> list[int]:
    result = []
    
    while nums > 0:
        result.append(nums%10)
        nums=nums//10
        
    return result
    
print(solution(34879)) # [9, 7, 8, 4, 3]