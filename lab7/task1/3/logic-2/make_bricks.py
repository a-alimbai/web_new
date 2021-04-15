def make_bricks(small, big, goal):
	if small + 5*big < goal:
		return False

	if goal // 5 <= big:
		return goal % 5 <= small
	else:
		return goal - 5*big <= small