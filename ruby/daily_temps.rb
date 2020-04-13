# Given a list of daily temperatures T, return a list such that, for each day in the input, 
# tells you how many days you would have to wait until a warmer temperature. If there is 
# no future day for which this is possible, put 0 instead.

# For example, given the list of temperatures T = [73, 74, 75, 71, 69, 72, 76, 73], your 
# output should be [1, 1, 4, 2, 1, 1, 0, 0].

# Note: The length of temperatures will be in the range [1, 30000]. Each temperature will 
# be an integer in the range [30, 100].

def daily_temperatures(temps)
    ret = []
    add = 0
    max = 999
    temps.each_with_index do |temp, idx1|
        if temp >= max
            ret << 0 
        elsif !ret.empty? && temp == temps[idx1-1]
            ret << [ret[-1] - 1, 0].max
        else
            temps[idx1+1..-1].each_with_index do |compare, idx2|
                add += 1 
                if (temp < compare)
                    ret << add
                    add = 0
                    break
                end
                if idx2 == temps[idx1+1..-1].length - 1
                    max = temp if temp > max || max == 999
                    ret << 0 
                    add = 0
                end
            end
        end
    end
    ret << 0 if ret.length < temps.length
    ret
end

p daily_temperatures([89,62,70,58,47,47,46,76,100,70])
# p daily_temperatures([35,56,56,53,43,88,40,82,55,43,35,43,41,75,91,83,60,94,44,50,42,51,63,88,45,70,42,77,47,51,70,69,89,41,50,81,46,54,99,54,44,76,44,34,37,83,35,96,58,75,99,70,32,81,75,77,81,91,60,51,54,62,99,54,62,88,45,87,96,62,63,98,37,54,100,69,58,95,37,53,56,91,35,97,80,72,37,43,35,75,90,79,35,42,68,44,82,74,77,92])