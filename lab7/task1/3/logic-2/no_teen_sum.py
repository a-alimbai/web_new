def no_teen_sum(a, b, c):
	return sum([fix_teen(x) for x in (a, b, c)])

def fix_teen(n):
	if n in range(13, 20) and n not in (15, 16):
		return 0
	else:
		return n