# Merge k sorted linked lists and return it as one sorted list. Analyze and describe 
# its complexity.

# Example:

# Input:
# [
#   1->4->5,
#   1->3->4,
#   2->6
# ]
# Output: 1->1->2->3->4->4->5->6

def merge_k_lists(lists)
    arr = []
    (0...(lists.length)).each do |idx|
        current = lists[idx]
        while current do
            arr << current.val
            current = current.next
        end
    end
    arr = arr.sort
    head = ListNode.new(nil)
    current = ListNode.new(nil)
    head.next = current
    arr.each_with_index do |ele, idx|
        current.val = ele
        current.next = ListNode.new(nil) unless idx == arr.length-1
        current = current.next
    end
    head.next
end