# Given two Linked Lists, create union and intersection lists that contain union and 
# intersection of the elements present in the given lists. Order of elments in output
# lists doesn’t matter.

require 'Set'

class Node
    attr_accessor :val, :next

    def initialize(val)
        @val = val
        @next = nil
    end
end

class Linked_List
    def initialize()
        @head = nil
        @tail = nil
    end

    def insert(val)
        node = Node.new(val)
        if !@head
            @head = node
            @tail = node
        else
            @tail.next = node
            @tail = node
        end
    end
end

def intersection(list1, list2)
    set = Set.new
    union_list = Linked_List.new
    intersection_list = Linked_List.new
    union_arr = []
    intersection_arr = []
    while list1 do
        set.add(list1.val)
        union_list.insert(Node.new(list1.val))
        union_arr << list1.val
        list1 = list1.next
    end
    while list2 do
        if set.include?(list2.val)
            intersection_list.insert(Node.new(list2.val))
            intersection_arr << list2.val
        else
            union_list.insert(Node.new(list2.val))
            union_arr << list2.val
        end
        list2 = list2.next
    end
    [union_list, intersection_list]
end

l1 = Node.new(10)
l1.next = Node.new(15)
l1.next.next = Node.new(4)
l1.next.next.next = Node.new(20)

l2 = Node.new(8)
l2.next = Node.new(4)
l2.next.next = Node.new(2)
l2.next.next.next = Node.new(10)

p intersection(l1, l2)