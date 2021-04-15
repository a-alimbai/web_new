def has22(nums):
	return sum([1 for i in range(len(nums)) if nums[i:i+2] == [2, 2]]) > 0