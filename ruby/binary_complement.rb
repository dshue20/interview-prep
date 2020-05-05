# Given a positive integer, output its complement number. The complement strategy is 
# to flip the bits of its binary representation.

 

# Example 1:

# Input: 5
# Output: 2
# Explanation: The binary representation of 5 is 101 (no leading zero bits), and its 
# complement is 010. So you need to output 2.
 

# Example 2:

# Input: 1
# Output: 0
# Explanation: The binary representation of 1 is 1 (no leading zero bits), and its 
# complement is 0. So you need to output 0.
 

# Note:

# The given integer is guaranteed to fit within the range of a 32-bit signed integer.
# You could assume no leading zero bit in the integer’s binary representation.
# This question is the same as 1009: https://leetcode.com/problems/complement-of-base-10-integer/

def get_binary(num)
    power = 0
    power += 1 until 2**power > num
    power -= 1
    str = ""
    until power < 0 do
        if 2**power <= num
            str += "1"
            num -= 2**power
        else
            str += "0"
        end
        power -= 1
    end
    str
end

def find_complement(num)
    binary = get_binary(num)
    str = ""
    binary.each_char do |char|
       if char == "1"
           str += "0"
       else
           str += "1"
       end
    end
    power = str.length - 1
    total = 0
    str.each_char do |char|
       total += 2**power if char == "1"
        power -= 1
    end
    total
end

p get_binary(5)
p get_binary(0)
p get_binary(60)