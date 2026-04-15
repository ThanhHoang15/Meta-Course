import math


find_max = lambda nums: max(nums)


square_list = lambda nums: list(map(lambda x: x * x, nums))


sum_of_squares = lambda nums: sum(map(lambda x: x * x, nums))

average = lambda nums: sum(nums) / len(nums)


circle_area = lambda r: math.pi * r * r


filter_a = lambda words: list(filter(lambda word: 'a' in word, words))


fahrenheit_to_celsius = lambda f: (f - 32) * 5 / 9



nums = [1, 2, 3, 4]
words = ["apple", "dog", "banana", "cat"]

print("1 Max:", find_max(nums))
print("2 Squares:", square_list(nums))
print("3 Sum of Squares:", sum_of_squares(nums))
print("4 Average:", average(nums))
print("5 Circle Area:", circle_area(5))
print("6 Filter strings with a:", filter_a(words))
print("7 Fahrenheit to Celsius:", fahrenheit_to_celsius(98.6))