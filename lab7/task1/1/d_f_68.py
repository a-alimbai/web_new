n = int(input())
list = input().split()
for i in range(n):
    list[i] = int(list[i])
cnt = 0
for i in range(1, len(list)-1):
    if(list[i] > list[i-1] and list[i] > list[i+1]):
        cnt+=1
print(cnt)