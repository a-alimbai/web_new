def cat_dog(str):
  return sum([1 for i in range(len(str)-2) if str[i:i+3] == 'cat'])==sum([1 for i in range(len(str)-2) if str[i:i+3] == 'dog'])