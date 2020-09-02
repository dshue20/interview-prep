# How many times can you delete seven letters from a string that form the word 'BALLOON'?

def solution(str)
    hash = Hash.new(0)
    str.each_char {|char| hash[char] += 1}
    iters = -1
    while hash.values.all?{|x| x >= 0} do
      hash['B'] -= 1
      hash['A'] -= 1
      hash['L'] -= 2
      hash['O'] -= 2
      hash['N'] -= 1
      iters += 1
    end
    iters
end

p solution('BAONXXOLL') # => 1
p solution('BAOOLLNNOLOLGBAX') # => 2
p solution('QAWABAWONL') # => 0
p solution('ONLABLABLOON') # => 1