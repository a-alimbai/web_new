def count_hi(str):
  return sum([1 for i in range(len(str)-1) if str[i:i+2] == 'hi'])