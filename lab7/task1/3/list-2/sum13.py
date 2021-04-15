def sum13(nums):
	res, i = 0, 0

	while i < len(nums):
		if nums[i] == 13:
			i += 2
		else:
			res += nums[i]
			i += 1

	return res