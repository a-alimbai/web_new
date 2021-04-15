def lucky_sum(a, b, c):
	i = 4

	if 13 in (a, b, c):
		i = [a, b, c].index(13)

	return sum([a, b, c][:i])