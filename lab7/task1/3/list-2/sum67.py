def sum67(nums):
	res, i, Q = 0, 0, False

	while i < len(nums):
		if nums[i] == 6:
			Q = True
		elif nums[i] == 7:
			if Q:
				Q = False
			else:
				res += nums[i]
		elif not Q:
			res += nums[i]

		i += 1

	return res