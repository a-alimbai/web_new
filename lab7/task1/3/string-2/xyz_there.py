def xyz_there(str):
	return sum([1 for i in range(1, len('#' + str)-2) if ('#'+str)[i:i+3] == 'xyz' and ('#'+str)[i-1] != '.']) > 0