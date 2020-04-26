def largest_sum(arr)
    first = 0
    last = arr.length-2
    curr_length = arr.length-2
    sum = arr.inject(:+)
    while sum != 0 && first != last do
        sum = arr[first..last].inject(:+)
        if sum != 0
            if last != arr.length-1
                first += 1
                last += 1
            else
                first = 1
                curr_length -= 1
                last = curr_length
            end
        end
    end
    arr[first..last]
end

p largest_sum([1, 2, -2, 4, -4])