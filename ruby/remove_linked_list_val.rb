# Remove all elements from a linked list of integers that have value val.

# Example:

# Input:  1->2->6->3->4->5->6, val = 6
# Output: 1->2->3->4->5

class ListNode
    attr_accessor :val, :next
    def initialize(val)
        @val = val
        @next = nil
    end
end

def remove_elements(head, val)
    nil_val = ListNode.new(nil)
    root = ListNode.new(nil)
    nil_val.next = root
    root.next = head
    while root && root.next do
        next_val = root.next
        if next_val.val == val
            to_add = root.next.next
            to_add = to_add.next while !to_add.nil? && to_add.val == val
            root.next = to_add
        end
        root = root.next
    end
    nil_val.next.next
end

a = ListNode.new(1)
b = ListNode.new(2)
c = ListNode.new(6)
d = ListNode.new(3)
e = ListNode.new(4)
f = ListNode.new(5)
g = ListNode.new(6)

a.next = b
b.next = c
c.next = d 
d.next = e
e.next = f
f.next = g

a2 = ListNode.new(1)
b2 = ListNode.new(1)
a2.next = b2

# p remove_elements(a, 6)
p remove_elements(a2, 1)