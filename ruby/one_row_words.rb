# Given a List of words, return the words that can be typed using letters of 
# alphabet on only one row's of American keyboard like the image below.

# Input: ["Hello", "Alaska", "Dad", "Peace"]
# Output: ["Alaska", "Dad"]

def find_words(words)
    rows = ["qwertyuiop", "asdfghjkl", "zxcvbnm"]
    result = []
    current = ""
    words.each do |word|
        check = true
        rows.each_with_index do |row, idx|
            if row.include?(word[0].downcase)
                current = rows[idx] 
                break
            end
        end
        word.each_char do |letter|
            if !current.include?(letter.downcase)
                check = false
                break
            end
        end
        result << word if check
    end
    result
end