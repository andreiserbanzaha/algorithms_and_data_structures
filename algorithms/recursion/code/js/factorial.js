
const factorial = (n) => {
	if (n === 0) { return 1; }
	return n * factorial(n - 1);
}

console.log(factorial(2));
console.log(factorial(7));
console.log(factorial(4));
