# Write a function, longest_common_substring(str1, str2) that takes two strings and returns the longest common substring. A substring is defined as any consecutive slice of letters from another string.

# Bonus: solve it in O(m * n) using O(m * n) extra space. (Hint: the solution involves dynamic programming which will be introduced later in the course.)

def longest_common_substring(str1, str2)
    shortest = str1.length < str2.length ? str1 : str2
    longest = shortest == str1 ? str2 : str1
    curr_length, finish, start_idx = shortest.length - 1, shortest.length - 1, 0
    until curr_length == -1 do
        substr = shortest[start_idx..finish]
        return substr if longest.include?(substr)
        if finish == shortest.length - 1
            curr_length -= 1
            start_idx = 0
            finish = curr_length
        else
            start_idx += 1
            finish += 1
        end
    end
    ''
end

p longest_common_substring('abc', 'abcd')
p longest_common_substring('aaabcdeee', 'bbcffffff')
p longest_common_substring('aaaabaaaaa', 'bbbbbbbbbbbc')
p longest_common_substring('a', 'b')