# Given a non-negative integer, you could swap two digits at most once to get the 
# maximum valued number. Return the maximum valued number you could get.

# Example 1:
# Input: 2736
# Output: 7236
# Explanation: Swap the number 2 and the number 7.
# Example 2:
# Input: 9973
# Output: 9973
# Explanation: No swap.
# Note:
# The given number is in the range [0, 108]

def swap(num, dig1, dig2)
    str = num.to_s
    str[dig1], str[dig2] = str[dig2], str[dig1]
    str.to_i
end

def maximum_swap(num)
    
end