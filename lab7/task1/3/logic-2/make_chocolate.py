def make_chocolate(small, big, goal):
	if small + 5*big < goal:
		return -1

	if goal // 5 <= big:
		if goal % 5 <= small:
			return goal % 5
		else:
			return -1
	else:
		if goal - 5*big <= small:
			return goal - 5*big
		else:
			return -1