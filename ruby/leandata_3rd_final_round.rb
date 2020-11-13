# given array of student objects
# student object contains array of course objects
# course object contains start and end time
schedules = [
    ['1:00', '3:00'], # clone 2/3
    ['1:00', '8:00'], # clone 1 
    ['3:00', '4:00'], # clone 2
    ['3:00', '4:00'], # clone 3
    ['5:00', '6:00'], # clone 2
    ['8:00', '9:00'] # clone 2/3
] # => 3

schedules = schedules.sort{|a,b| a[0] <=> b[0]} # nlog(n)
stack = [1];
max_stack_height = 3;
heap = MinHeap.new;
schedules.each do |class| # n
    while class.first >= heap.min
        stack.pop();
        heap.pop(); # log(n)
    end
    stack.push(1);
    max_stack_height = [stack.length, max_stack_height].max
    heap.add(schedules.shift(schedules).last); # log(n)
end