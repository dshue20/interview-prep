# Write a method that takes an array and returns all its permutations. 
# Time/memory complexity should be proportional to the number of permutations; what is this?

def permutations(arr)
    array = []
    if arr.empty?
      return []
    end 
end

def permutations(arr)
  return [[]] if arr.empty?

  perms = []
  arr.length.times do |i|
    # Choose an element to be first
    el = arr[i]
    rest = arr.take(i) + arr.drop(i + 1)

    # Find permutations of the rest, and tack the first `el` at front.
    new_perms = permutations(rest).map { |perm| perm.unshift(el) }
    perms.concat(new_perms)
  end

  perms
end

# for i in x..y

# permutations([1,2]) => [[1,2],[2,1]]

# permutations([1,2,3]) => 
# [[1, 2, 3], [2, 1, 3], [2, 3, 1], [1, 3, 2], [3, 1, 2], [3, 2, 1]]

# Given a fleet of 50 trucks, each with a full fuel tank and a range of 100 miles, 
# how far can you deliver a payload? You can transfer the payload from truck to truck, 
# and you can transfer fuel from truck to truck. Assume all the payload will fit in one truck.

# def delivery(trucks=50)
#     100/50 + 100/49 + 100/48 + ... + 100/1 
# end

# Consider a linked list. Each link in the list holds a next reference to the next item in the list,
#  except for the final link, which points to nil.

# It is possible to have a "list" without any end, which loops back on itself. Possibilities:

# A -> B -> C -> A -> ...
# A -> B -> C -> B -> ...
# Write a method cyclic?(first_link), 
# which will return true if a list is cyclic. Your first version may use O(n) memory. 
# Next, write a version which uses O(1) memory; you'll probably need a different approach.

def cyclic?(first_link)
  set = Set.new
  link = first_link
  while link.next
    return true if set.include?(link)
    set.add(link)
    link = link.next
  end
  false
end

def cyclic?(first_link)
  link = first_link
  while link.next
    return true if link.val == "paul-kim"
    link.val = "paul-kim"
    link = link.next
  end
  false
end

# def cyclic1?(first_link)
#   set = Set.new

#   current_link = first_link
#   until current_link.nil?
#     # if list is cyclic, must loop back on itself eventually
#     return true if set.include?(current_link)
#     set << current_link

#     current_link = current_link.next
#   end

#   false
# end

def cyclic2?(first_link)
  slow_runner = first_link
  fast_runner = first_link

  while true
    2.times do
      fast_runner = fast_runner.next
      return false if fast_runner.nil?
      return true if fast_runner == slow_runner
    end
    slow_runner = slow_runner.next
  end
end


# Given two singly-linked lists of (possibly) differing lengths that converge at some point, 
# find the node at which they converge.

def converging_node(list1, list2)
  head1 = list1.head
  head2 = list2.head 
  length1, length2 = 0, 0
  until !head1.next 
    length1++
  end
end

# Given a string s, find the longest palindromic substring in s. 
# You may assume that the maximum length of s is 1000.

def longest_palindrome(str)
  longest = ""
  for i in 0...str.length
      for j in (i + longest.length)...str.length
          substr = str[i..j]
          longest = substr if str[j] == str[i] && substr == substr.reverse
      end
  end
  longest
end