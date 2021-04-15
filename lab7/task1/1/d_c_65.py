n = int(input())
list = input().split()
cnt = 0
for i in range(n):
    list[i] = int(list[i])
for i in range(len(list)):
    if(list[i] > 0):
        cnt += 1
print(cnt)