# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def addTwoNumbers(l1: ListNode, l2: ListNode) -> ListNode:
    dummy_head = ListNode(0)
    current = dummy_head
    carry = 0
    
    while l1 is not None or l2 is not None:
        # Use the .val attribute of ListNode
        x = l1.val if l1 is not None else 0
        y = l2.val if l2 is not None else 0
        
        total = carry + x + y
        carry = total // 10
        current.next = ListNode(total % 10)
        
        current = current.next
        
        if l1 is not None:
            l1 = l1.next
        if l2 is not None:
            l2 = l2.next
    
    if carry > 0:
        current.next = ListNode(carry)
    
    return dummy_head.next

data1 = [2,4,3]
data2 = [5,6,4]

# Helper function to convert a list to a linked list
def list_to_linkedlist(arr):
    dummy = ListNode(0)
    current = dummy
    for num in arr:
        current.next = ListNode(num)
        current = current.next
    return dummy.next

# Helper function to convert a linked list to a list
def linkedlist_to_list(node):
    result = []
    while node:
        result.append(node.val)
        node = node.next
    return result

l1 = list_to_linkedlist([2, 4, 3])
l2 = list_to_linkedlist([5, 6, 4])

result = addTwoNumbers(l1, l2)
result_list = linkedlist_to_list(result)
print(result_list)