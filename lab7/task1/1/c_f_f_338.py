# x = int(input())
# r = 0
# while(x > 0):
#     d = x % 10
#     x = x // 10
#     r = r * 10
#     r = r + d
# print(r)

# x = input()
# o = x[::-1]
# print(o)

x = input()
r = 0
for i in x:
    if (int(x) > 0):
        d = int(x) % 10
        x = int(x) // 10
        r = r * 10
        r = r + d
print(int(r))