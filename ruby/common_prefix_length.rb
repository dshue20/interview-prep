def commonPrefix(inputs)
    # Write your code here
    total = 0
    word = inputs.first
    (0...(word.length)).each do |idx| 
        print('segment: ', word[idx..-1], ' common_length: ', get_common_length(word, word[idx..-1]))
        puts
        total += get_common_length(word, word[idx..-1])
    end
    total
end

def get_common_length(str1, str2)
    idx = 0
    until idx == [str1.length, str2.length].min do
        return idx if str1[idx] != str2[idx]
        idx += 1
    end
    idx
end

p commonPrefix(['abcabcd'])