let counter = 0;

const fibonacci = (n) => {
  counter++;
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}


const fibonacciMaster = () => {
  let cache = {};
  return function fib(n) {
    counter++;
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  }
}
const fib = fibonacciMaster();

// bottom-up approach
const fibonacciMaster2 = (n) => {
  let arr = [0, 1];
  for (let i = 2; i <= n; ++i) {
    counter++;
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr.pop();
}

console.log('===== slow method =====');
console.log(fibonacci(10));
console.log(counter + ' calculations');

counter = 0;
console.log('===== fast method =====');
console.log(fib(10));
console.log(counter + ' calculations');

counter = 0;
console.log('===== fast method 2 =====');
console.log(fibonacciMaster2(10));
console.log(counter + ' calculations');