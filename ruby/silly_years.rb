# Write a function that takes a year (four digit integer) and returns an array with the 10 closest subsequent years that meet the following condition: the first two digits summed with the last two digits are equal to the middle two digits. E.g.,

# 1978 => 19 + 78 = 97
# 2307 => 23 + 07 = 30

def silly_years(year)
    years = []
    until years.length == 10
        thousands = year / 1000
        hundreds = 
        years << year if year/100 + year % 100 == year % 1000 / 10
        year += 1
    end
    years
end

p silly_years(1978)