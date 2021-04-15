def end_other(a, b):
	return a[-len(b):].lower() == b[-len(a):].lower()