# Ruby version of solution

def is_a_fibonacci_number? (number)
	first_result = ((5 * (number * number)) + 4)
	second_result = ((5 * (number * number)) - 4)
	if (Math.sqrt(first_result) % 1 == 0) || (Math.sqrt(second_result) % 1 == 0)
		return true
	else
		return false
	end
end

sum = 0
i = 1

while i <= 4000000
	if is_a_fibonacci_number?(i) && (i % 2 == 0)
		sum += i
	end
	i += 1
end

puts "Sum of all even Fibonacci numbers from 1 to 4,000,000 is #{sum}"