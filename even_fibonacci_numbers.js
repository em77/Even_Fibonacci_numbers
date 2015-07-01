var sum = 0;

var is_a_fibonacci_number = function (number) {
	var first_result = ((5*(number*number))+4);
	var second_result = ((5*(number*number))-4);
	if ((Math.sqrt(first_result) % 1 === 0) || (Math.sqrt(second_result) % 1 === 0) ) {
		return true;
	} else {
		return false;
	}
};

for (i = 1; i <= 4000000; i++) {
	if ((is_a_fibonacci_number(i)) && (i % 2 === 0)) {
		sum += i;
	}
}

console.log("Sum of all even Fibonacci numbers from 1 to 4,000,000 is " + sum);