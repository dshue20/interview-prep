def diagonal_moves(pos, grid, radius)
    moves = []
    row, col = pos

    (1..radius).each do |step|
        if row - step >= 0 && col - step >= 0 && grid[row - step][col - step] === "-"
            moves << [row - step, col - step]
        else
            break
        end
    end
    (1..radius).each do |step|
        if row + step <= 7 && col + step <= 7 && grid[row + step][col + step] === "-"
            moves << [row + step, col + step]
        else
            break
        end
    end
    (1..radius).each do |step|
        if row + step <= 7 && col - step >= 0 && grid[row + step][col - step] === "-"
            moves << [row + step, col - step]
        else
            break
        end
    end
    (1..radius).each do |step|
        if row - step >= 0 && col + step <= 7 && grid[row - step][col + step] === "-"
            moves << [row - step, col + step]
        else
            break
        end
    end
    moves
end