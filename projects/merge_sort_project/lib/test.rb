def textFormatting(starting, ending, style)
    # Write your code here
    formatted = Array.new(ending.max+1, '')
    steps = 0
    start = -1
    finish = -1
    (0...(starting.length)).each do |idx|
        new_start = starting[idx]
        new_finish = ending[idx]
        new_style = style[idx]
        if !(new_start.between?(start, finish) || new_finish.between?(start, finish)) && new_style = style[idx-1]
            start = new_start
            finish = new_finish
            steps += 1
        end
        changed = false
        (start..finish).each do |idx2|
            if !(formatted[idx2].include?(new_style))
                formatted[idx2] += new_style
                changed = true
            end
        end
        steps += 1 if changed
    end
    steps
end
######
p textFormatting([1, 1, 3, 3, 3], [6, 6, 8, 8, 8], ['b', 'b', 'b', 'i', 'u'])