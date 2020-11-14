# Given an array of strings, return all groups of strings that are anagrams. 
# Represent a group by a list of integers representing the index in the original 
# list. Look at the sample case for clarification.

# Anagram : a word, phrase, or name formed by rearranging the letters of another, 
# such as 'spar', formed from 'rasp' 
# Note: All inputs will be in lower-case. 
# Example :

# Input : cat dog god tca
# Output : [[1, 4], [2, 3]]
# cat and tca are anagrams which correspond to index 1 and 4.
# dog and god are another set of anagrams which correspond to index 2 and 3.
# The indices are 1 based ( the first element has index 1 instead of index 0).

def anagrams(words)
    result = []
    hash = {}
    words.each_with_index do |word, idx|
        letters = Hash.new(0)
        word.each_char {|char| letters[char] += 1}
        if hash.has_key?(letters)
            result << [hash[letters], idx]
        else
            hash[letters] = idx
        end
    end
    result
end

p anagrams(['cat', 'dog', 'god', 'act']) 