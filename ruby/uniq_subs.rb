# Write a method that finds all the unique substrings for a word.

def uniq_subs(word)
    subs = []
    start, finish = 0, 0
    until start == word.length do
        subs << word[start..finish]
        if (finish == word.length-1)
            start += 1
            finish = start
        else
            finish += 1
        end
    end
    subs
end

p uniq_subs('fire')