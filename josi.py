def count_cond(func):
    def inner(x):
        def another(y):
            return func(x,y)
        return another
    return inner

count_cond(add)(5)(3)
inner1(5)(3)
inner2(3) # => 5+3 = 8