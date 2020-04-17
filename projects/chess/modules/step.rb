require_relative "./opposite_color"

def side_moves(pos, color, grid, radius)
    moves = []
    row, col = pos

    (1..radius).each do |step|
        if row - step >= 0 
            if grid[row - step][col] === "-"
                moves << [row - step, col]
            elsif grid[row - step][col].color == opposite_color(color)
                moves << [row - step, col]
                break
            else
                break
            end
        else
            break
        end
    end
    (1..radius).each do |step|
        if row + step <= 7 
            if grid[row + step][col] === "-"
                moves << [row + step, col]
            elsif grid[row + step][col].color == opposite_color(color)
                moves << [row + step, col]
                break
            else
                break
            end
        else
            break
        end
    end
    (1..radius).each do |step|
        if col - step >= 0 
            if grid[row][col - step] === "-"
                moves << [row, col - step]
            elsif grid[row][col - step].color == opposite_color(color)
                moves << [row, col - step]
                break
            else
                break
            end
        else
            break
        end
    end
    (1..radius).each do |step|
        if col + step <= 7 
            if grid[row][col + step] === "-"
                moves << [row, col + step]
            elsif grid[row][col + step].color == opposite_color(color)
                moves << [row, col + step]
                break
            else
                break
            end
        else
            break
        end
    end
    moves
end