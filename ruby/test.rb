def partition(arr, low, high)
    i = low - 1
    pivot = arr[high]

    (low...high).each do |j|
        if arr[j] < pivot
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
        end
    end

    arr[i+1], arr[high] = arr[high], arr[i+1]
    p arr
    return i+1
end

arr = [10,7,8,9,1,5]
p partition(arr,0,arr.length-2)