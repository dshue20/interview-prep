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
    str
end

def max_idx(num)
    idx = 0
    max = 0
    (0...(num.to_s.length)).each do |digit|
        test = num.to_s[digit].to_i
        if test >= max
            max = test
            idx = digit
        end
    end
    idx
end

def maximum_swap(num)
    return num if num < 10
    str = num.to_s
    max = max_idx(num)
    length = num.to_s.length
    return swap(num, 0, max).to_i if str[0] != str[max]
    return (num.to_s[0] + maximum_swap(num.to_s[1..-1].to_i).to_s).to_i
end

p maximum_swap(2736)
p maximum_swap(9973)
p maximum_swap(1993)
p maximum_swap(98368)

# not quite