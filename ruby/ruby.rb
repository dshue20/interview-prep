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

# Write a function to find the longest common prefix string amongst an array of strings.

# If there is no common prefix, return an empty string "".

# Example 1:

# Input: ["flower","flow","flight"]
# Output: "fl"
# Example 2:

# Input: ["dog","racecar","car"]
# Output: ""
# Explanation: There is no common prefix among the input strings.
# Note:

# All given inputs are in lowercase letters a-z.

def longest_common_prefix(strs)
  return "" if strs.empty? || strs == [""]
  longest = ""
  idx = 0
  while idx < strs[0].length
      prefix = strs[0][0..idx]
      strs.each do |word|
          return longest if word[0..idx] != prefix
      end
      longest = prefix
      idx += 1
  end
  longest
end

# Given an array nums and a value val, remove all instances of that value in-place 
# and return the new length.

# Do not allocate extra space for another array, you must do this by modifying the 
# input array in-place with O(1) extra memory.

# The order of elements can be changed. It doesn't matter what you leave beyond the 
# new length.

# Example 1:

# Given nums = [3,2,2,3], val = 3,

# Your function should return length = 2, with the first two elements of nums being 2.

# It doesn't matter what you leave beyond the returned length.
# Example 2:

# Given nums = [0,1,2,2,3,0,4,2], val = 2,

# Your function should return length = 5, with the first five elements of nums 
# containing 0, 1, 3, 0, and 4.

# Note that the order of those five elements can be arbitrary.

# It doesn't matter what values are set beyond the returned length.
# Clarification:

# Confused why the returned value is an integer but your answer is an array?

# Note that the input array is passed in by reference, which means modification to the 
# input array will be known to the caller as well.

# Internally you can think of this:

# // nums is passed in by reference. (i.e., without making a copy)
# int len = removeElement(nums, val);

# // any modification to nums in your function would be known by the caller.
# // using the length returned by your function, it prints the first len elements.
# for (int i = 0; i < len; i++) {
#     print(nums[i]);
# }

def remove_element(nums, val)
  nums.delete(val)
  nums.length
end