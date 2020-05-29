# def closestStraightCity(cities, x, y, queries)
#     # Write your code here
#     result = []
#     queries.each do |query|
#         curr_idx, curr_distance, closest = -1, 999999, ''
#         cities.each_with_index {|city, idx| curr_idx = idx if query == city}

#         (0...(x.length)).each do |idx|
#             if idx != curr_idx

#                 distance = 999999
#                 distance = (y[idx] - y[curr_idx]).abs if x[idx] == x[curr_idx]
#                 distance = (x[idx] - x[curr_idx]).abs if y[idx] == y[curr_idx]

#                 if distance < curr_distance
#                     curr_distance = distance 
#                     closest = cities[idx]
#                 end

#             end
#         end
#         if closest == ''
#             result << 'NONE'
#         else
#             result << closest
#         end
#     end
#     result
# end

def closestStraightCity(cities, x, y, queries)
    # Write your code here
    result = []
    city_hash, x_hash, y_hash = {}, Hash.new { |h, k| h[k] = [] }, Hash.new { |h, k| h[k] = [] }
    (0...(cities.length)).each do |idx|
        city_hash[cities[idx]] = [x[idx], y[idx]]
        x_hash[x[idx]] << cities[idx]
        y_hash[y[idx]] << cities[idx]
    end

    queries.each do |query|
        curr_x, curr_y = city_hash[query]
        min_distance = 999999
        closest = ''
        x_hash[curr_x].each do |city|
            if city != query
                distance = (city_hash[city][1] - curr_y).abs
                if distance < min_distance
                    min_distance = distance 
                    closest = city
                end
            end
        end
        y_hash[curr_y].each do |city|
            if city != query
                distance = (city_hash[city][0] - curr_x).abs
                if distance < min_distance
                    min_distance = distance 
                    closest = city
                end
            end
        end
        result << closest
    end
    result
end

p closestStraightCity(['london', 'warsaw', 'hackerland'], [1,10,20],[1,10,10],['london', 'warsaw', 'hackerland'])