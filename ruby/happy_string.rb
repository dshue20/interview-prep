# A string is called happy if it does not have any of the strings 'aaa', 'bbb' or 'ccc' as a substring.

# Given three integers a, b and c, return any string s, which satisfies following conditions:

# s is happy and longest possible.
# s contains at most a occurrences of the letter 'a', at most b occurrences of the letter 'b' and at most c occurrences of the letter 'c'.
# s will only contain 'a', 'b' and 'c' letters.
# If there is no such string s return the empty string "".

 

# Example 1:

# Input: a = 1, b = 1, c = 7
# Output: "ccaccbcc"
# Explanation: "ccbccacc" would also be a correct answer.
# Example 2:

# Input: a = 2, b = 2, c = 1
# Output: "aabbc"
# Example 3:

# Input: a = 7, b = 1, c = 0
# Output: "aabaa"
# Explanation: It's the only correct answer in this case.
 

# Constraints:

# 0 <= a, b, c <= 100
# a + b + c > 0

def longest_diverse_string(a, b, c)
    str = ""
    hash = {
        a: a,
        b: b,
        c: c
    }
    curr = get_max(hash[:a], hash[:b], hash[:c], str)
    while curr
        str += curr.to_s
        hash[curr] -= 1
        if hash[curr] != 0
            str += curr.to_s
            hash[curr] -= 1
        end
        curr = get_max(hash[:a], hash[:b], hash[:c], str)
    end
    str
end

def get_max(a, b, c, str)
    if str[-1] != "a"
        max = :a if a > 0
        max = :b if b > 0 && b > a && str[-1] != "b"
        max = :c if c > 0 && c > a && c > b && str[-1] != "c"
    else
        max = :b if b > 0
        max = :c if c > 0 && c > b
    end
    max
end

# not quite