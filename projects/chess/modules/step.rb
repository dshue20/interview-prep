def side_moves(pos, grid, radius)
    moves = []
    row, col = pos

    (1..radius).each do |step|
        if row - step >= 0 && grid[row - step][col] === "-"
            moves << [row - step, col]
        else
            break
        end
    end
    (1..radius).each do |step|
        if row + step <= 7 && grid[row + step][col] === "-"
            moves << [row + step, col]
        else
            break
        end
    end
    (1..radius).each do |step|
        if col - step >= 0 && grid[row][col - step] === "-"
            moves << [row, col - step]
        else
            break
        end
    end
    (1..radius).each do |step|
        if col + step <= 7 && grid[row][col + step] === "-"
            moves << [row, col + step]
        else
            break
        end
    end
    moves
end