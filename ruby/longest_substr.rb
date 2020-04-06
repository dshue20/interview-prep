# Given the string s, return the size of the longest substring containing each vowel 
# an even number of times. That is, 'a', 'e', 'i', 'o', and 'u' must appear an even 
# number of times.

 

# Example 1:

# Input: s = "eleetminicoworoep"
# Output: 13
# Explanation: The longest substring is "leetminicowor" which contains two each 
# of the vowels: e, i and o and zero of the vowels: a and u.

# Example 2:

# Input: s = "leetcodeisgreat"
# Output: 5
# Explanation: The longest substring is "leetc" which contains two e's.
# Example 3:

# Input: s = "bcbcbc"
# Output: 6
# Explanation: In this case, the given string "bcbcbc" is the longest because 
# all vowels: a, e, i, o and u appear zero times.
 

# Constraints:

# 1 <= s.length <= 5 x 10^5
# s contains only lowercase English letters.

def find_the_longest_substring(str)
    vowel_count = {
        a: 0,
        e: 0,
        i: 0,
        o: 0,
        u: 0
    }
    
    # initialize vowel count
    str.each_char do |char|
        char = char.to_sym
        vowel_count[char] += 1 if vowel_count.has_key?(char)
    end
    
    left = 0
    right = str.length - 1
    curr_length = str.length
    check_count = vowel_count.dup
    while curr_length do 
        if check_even(check_count)
            return curr_length 
        end
        if right == str.length - 1
            curr_length -= 1
            right = curr_length - 1
            left = 0
            vowel_count[str[right+1].to_sym] -= 1 if vowel_count.has_key?(str[right+1].to_sym)
            check_count = vowel_count.dup
        else
            left, right = left+1, right+1
            check_count[str[left-1].to_sym] -= 1 if check_count.has_key?(str[left-1].to_sym)
            check_count[str[right].to_sym] += 1 if check_count.has_key?(str[right].to_sym)
        end
    end
end

def check_even(hash)
    hash.values.all?{|num| num % 2 == 0}
end

p find_the_longest_substring("eleetminicoworoep")