# You are given a string, s, and a list of words, words, that are all of the same length. 
# Find all starting indices of substring(s) in s that is a concatenation of each word in 
# words exactly once and without any intervening characters.

# Example 1:

# Input:
#   s = "barfoothefoobarman",
#   words = ["foo","bar"]
# Output: [0,9]
# Explanation: Substrings starting at index 0 and 9 are "barfoo" and "foobar" respectively.
# The output order does not matter, returning [9,0] is fine too.
# Example 2:

# Input:
#   s = "wordgoodgoodgoodbestword",
#   words = ["word","good","best","word"]
# Output: []

def find_substring(s, words)
    result = []
    length = words[0].length
    return [] unless s.length % length == 0
    words_copy = words.dup
    start, finish = 0, 0
    while start < s.length - length do
        word = s[finish...(finish + length)]
        if words_copy.index(word)
            words_copy.delete_at(words_copy.index(word))
            if words_copy.empty?
                result << start
                words_copy = words.dup
                start, finish = start + 1, start + 1
            else
                finish += length
            end
        else
            words_copy = words.dup
            start, finish = start + 1, start + 1
        end
    end
    result
end

p find_substring("barfoothefoobarman", ["foo", "bar"])
p find_substring("wordgoodgoodgoodbestword", ["word","good","best","word"])
p find_substring("barfoofoobarthefoobarman", ["bar", "foo", "the"])
p find_substring("lingmindraboofooowingdingbarrwingmonkeypoundcake", ["fooo","barr","wing","ding","wing"])