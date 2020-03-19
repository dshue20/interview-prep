# Given two integers dividend and divisor, divide two integers without using 
# multiplication, division and mod operator.

# Return the quotient after dividing dividend by divisor.

# The integer division should truncate toward zero, which means losing its fractional part. 
# For example, truncate(8.345) = 8 and truncate(-2.7335) = -2.

# Example 1:

# Input: dividend = 10, divisor = 3
# Output: 3
# Explanation: 10/3 = truncate(3.33333..) = 3.
# Example 2:

# Input: dividend = 7, divisor = -3
# Output: -2
# Explanation: 7/-3 = truncate(-2.33333..) = -2.

def divide(dividend, divisor)
    ((dividend < 0 && divisor >= 0) || (dividend >= 0 && divisor < 0)) ? negative = true : negative = false
    dividend = dividend.abs
    divisor = divisor.abs
    count = 0
    until dividend < divisor
        dividend -= divisor
        count += 1
        return negative ? 0 - (2**31) : 2**31 - 1 if count > 9999999
    end
    negative ? 0 - count : count
end