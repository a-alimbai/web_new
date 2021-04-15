def caught_speeding(speed, is_birthday):
    j = 0

    if is_birthday:
        j = 5

    if speed <= 60 + j:
        return 0
    elif speed in range(61 + j, 81 + j):
        return 1
    else:
        return 2