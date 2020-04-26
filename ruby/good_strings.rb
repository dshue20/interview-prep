# Given the strings s1 and s2 of size n, and the string evil. Return the number of 
# good strings.

# A good string has size n, it is alphabetically greater than or equal to s1, it is 
# alphabetically smaller than or equal to s2, and it does not contain the string evil 
# as a substring. Since the answer can be a huge number, return this modulo 10^9 + 7.

 

# Example 1:

# Input: n = 2, s1 = "aa", s2 = "da", evil = "b"
# Output: 51 
# Explanation: There are 25 good strings starting with 'a': "aa","ac","ad",...,"az". 
# Then there are 25 good strings starting with 'c': "ca","cc","cd",...,"cz" and finally 
# there is one good string starting with 'd': "da". 
# Example 2:

# Input: n = 8, s1 = "leetcode", s2 = "leetgoes", evil = "leet"
# Output: 0 
# Explanation: All strings greater than or equal to s1 and smaller than or equal to s2 
# start with the prefix "leet", therefore, there is not any good string.
# Example 3:

# Input: n = 2, s1 = "gx", s2 = "gz", evil = "x"
# Output: 2
 

# Constraints:

# s1.length == n
# s2.length == n
# s1 <= s2
# 1 <= n <= 500
# 1 <= evil.length <= 50
# All strings consist of lowercase English letters.

def is_less?(str1, str2)
    alphabet = ("a".."z").to_a
    (0...(str1.length)).each do |idx|
        return true if alphabet.index(str1[idx]) <= alphabet.index(str2[idx])
        return false if alphabet.index(str1[idx]) > alphabet.index(str2[idx])
    end
end

def is_sub?(str, sub)
    first = 0
    last = sub.length - 1
    until last == str.length do
        return true if str[first..last] == sub
        first += 1
        last += 1
    end
    false
end

def next_letter(str)
    alphabet = ("a".."z").to_a
    idx = -1
    until idx == -1 * (str.length + 1) do
        letter_idx = alphabet.index(str[idx])
        letter_idx = letter_idx == 25 ? 0 : letter_idx + 1
        str[idx] = alphabet[letter_idx]
        if str[idx] == "a"
            idx -= 1 
        else
            break
        end
    end
    str
end

def find_good_strings(n, str1, str2, evil)
    return 0 if !is_less?(str1, str2)
    count = 0
    curr = str1
    last = next_letter(str2)
    until curr == last do
        count += 1 if !is_sub?(curr, evil)
        curr = next_letter(curr)
    end
    count
end

p find_good_strings(2, "aa", "da", "b")