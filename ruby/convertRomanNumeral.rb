def convertRomanNumeral(roman)
    hash = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50
    }
    total = 0
    idx = 0
    until idx >= roman.length do
        if roman[idx+1] && hash[roman[idx+1].to_sym] > hash[roman[idx].to_sym]
            total += hash[roman[idx+1].to_sym] - hash[roman[idx].to_sym]
            idx += 2
        else
            total += hash[roman[idx].to_sym]
            idx += 1
        end
    end
    total
end

def sortRoman(names)
    # Write your code here
    hash = Hash.new{|h,k| h[k] = []}
    names.each {|name| hash[name.split(' ').first] << name}
    final_arr = []
    hash.keys.sort.each {|key| final_arr = final_arr.concat(hash[key].sort{|a,b| convertRomanNumeral(a.split(' ').last) <=> convertRomanNumeral(b.split(' ').last)})}
    final_arr
end

p sortRoman(['Louis IX', 'Louis VIII'])
p convertRomanNumeral('IX')
p convertRomanNumeral('VIII')