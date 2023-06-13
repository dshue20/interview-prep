# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        if not list1:
            return list2
        if not list2:
            return list1
        if list1.val < list2.val:
            finalList = list1
            otherList = list2
        else:
            finalList = list2
            otherList = list1
        head = finalList
        while otherList and finalList.next:
            if finalList.next.val < otherList.val:
                finalList = finalList.next
            else:
                nextFinal = finalList.next
                finalList.next = otherList
                otherList = otherList.next
                finalList.next.next = nextFinal
                finalList = finalList.next
        if otherList:
            finalList.next = otherList
        return head