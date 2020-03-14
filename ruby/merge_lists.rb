# Merge two sorted linked lists and return it as a new list. The new list should be made 
# by splicing together the nodes of the first two lists.

# Example:

# Input: 1->2->4, 1->3->4
# Output: 1->1->2->3->4->4

class ListNode
    attr_accessor :val, :next
    def initialize(val)
        @val = val
        @next = nil
    end
end

def merge_two_lists(l1, l2)
    head = ListNode.new(nil)
    current = ListNode.new(nil)
    head.next = current
    while l1 || l2 do 
        if !l1
            current.next = ListNode.new(l2.val)
            l2 = l2.next
        elsif !l2
            current.next = ListNode.new(l1.val)
            l1 = l1.next
        elsif l2.val < l1.val
            current.next = ListNode.new(l2.val)
            l2 = l2.next
        else
            current.next = ListNode.new(l1.val)
            l1 = l1.next
        end
        current = current.next
    end
    head.next.next
end