# The deletion distance between two strings is the minimum number of characters that you need to delete in the two 
# strings in order to have the same string. The deletion distance between cat and at is 1, because you can just 
# delete the first character of cat. The deletion distance between cat and bat is 2, because you need to delete the 
# first character of both words. Of course, the deletion distance between two strings can't be greater than the sum 
# of their lengths, because you can always just delete both of the strings entirely.Implement an efficient function 
# to find the deletion distance between two strings.You can refer to the Wikipedia article on the algorithm for edit 
# distance if you want to. The algorithm there is not quite the same as the algorithm required here, but it involves 
# similar ideas.

def deletion_distance(str1, str2)
    hash1 = Hash.new(0)
    hash2 = Hash.new(0)
    str1.each_char {|char| hash1[char] += 1}
    str2.each_char {|char| hash2[char] += 1}
    result = 0
    p hash1
    p hash2
    
    hash1.keys.each do |key|
      if !hash2[key]
        result += hash1[key]
      elsif hash1[key] != hash2[key]
        result += (hash1[key] - hash2[key]).abs
      end
    end
    
    hash2.keys.each do |key|
      if !hash1[key]
        result += hash2[key]
      end
    end
    
    result
end

p deletion_distance("at", "cat")