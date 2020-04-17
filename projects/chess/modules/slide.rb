require_relative "./opposite_color"

def diagonal_moves(pos, color, grid, radius)
    moves = []
    row, col = pos

    (1..radius).each do |step|
        if row - step >= 0 && col - step >= 0 
            if grid[row - step][col - step] === "-"
                moves << [row - step, col - step]
            elsif grid[row - step][col - step].color == opposite_color(color)
                moves << [row - step, col - step]
                break
            else
                break
            end
        else
            break
        end
    end
    (1..radius).each do |step|
        if row + step <= 7 && col + step <= 7 
            if grid[row + step][col + step] === "-"
                moves << [row + step, col + step]
            elsif grid[row + step][col + step].color == opposite_color(color)
                moves << [row + step, col + step]
                break
            else
                break
            end
        else
            break
        end
    end
    (1..radius).each do |step|
        if row + step <= 7 && col - step >= 0 
            if grid[row + step][col - step] === "-"
                moves << [row + step, col - step]
            elsif grid[row + step][col - step].color == opposite_color(color)
                moves << [row + step, col - step]
                break
            else
                break
            end
        else
            break
        end
    end
    (1..radius).each do |step|
        if row - step >= 0 && col + step <= 7 
            if grid[row - step][col + step] === "-"
                moves << [row - step, col + step]
            elsif grid[row - step][col + step].color == opposite_color(color)
                moves << [row - step, col + step]
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