a = int(input())
b = int(input())
def sum_double(a, b):
  sum = a + b
  if a == b:
    sum = sum * 2
  return sum
print(sum_double(a, b))