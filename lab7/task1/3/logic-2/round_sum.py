def round_sum(a, b, c):
	return sum([rround(x) for x in (a, b, c)])

def rround(x):
	if x % 10 >= 5:
		return (x // 10 + 1) * 10
	else:
		return x // 10 * 10