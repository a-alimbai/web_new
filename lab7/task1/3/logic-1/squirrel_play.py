def squirrel_play(temp, is_summer):
    return (is_summer and temp in range(60, 101)) or (not is_summer and temp in range(60, 91))