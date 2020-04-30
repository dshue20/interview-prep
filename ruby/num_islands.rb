require 'set'

def num_islands(grid)
    queue = []
    seen = Set.new
    count = 0
    (0...(grid.length)).each do |y|
       (0...(grid[0].length)).each do |x|
            # print('outside ', queue)
            # puts
           if grid[y][x] == 1 && !seen.include?([y,x])
               seen.add([y,x])
               queue << [y+1, x] if !seen.include?([y+1, x]) && grid[y+1] && grid[y+1][x] == 1
               queue << [y-1, x] if !seen.include?([y-1, x]) && grid[y-1] && grid[y-1][x] == 1
               queue << [y, x+1] if !seen.include?([y, x+1]) && grid[y][x+1] == 1
               queue << [y, x-1] if !seen.include?([y, x-1]) && grid[y][x-1] == 1
               count += 1
           end
           while !queue.empty? do
                # print('inside while ', queue)
                # puts
                coords = queue.shift
                newY, newX = coords
                seen.add([newY, newX])
                queue << [newY+1, newX] if !seen.include?([newY+1, newX]) && grid[newY+1] && grid[newY+1][newX] == 1
                queue << [newY-1, newX] if !seen.include?([newY-1, newX]) && grid[newY-1] && grid[newY-1][newX] == 1
                queue << [newY, newX+1] if !seen.include?([newY, newX+1]) && grid[newY][newX+1] == 1
                queue << [newY, newX-1] if !seen.include?([newY, newX-1]) && grid[newY][newX-1] == 1
           end
       end
    end
    count
end

p num_islands([
    [1,1,0,0,0],
    [1,1,0,0,0],
    [0,0,1,0,0],
    [0,0,0,1,1]
])

p num_islands([
    [1,1,1,1,0],
    [1,1,0,1,0],
    [1,1,0,0,0],
    [0,0,0,0,0]
])