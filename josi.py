def missing_num(arr):
  set = {}
  for i in range(len(arr)):
    set.add(arr[i])

  for i in range(len(arr)):
    if (!(i in set)) return i