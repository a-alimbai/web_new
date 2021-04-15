def in1to10(n, outside_mode):
    return (outside_mode and n not in range(2, 10)) or (not outside_mode and n in range(1, 11))