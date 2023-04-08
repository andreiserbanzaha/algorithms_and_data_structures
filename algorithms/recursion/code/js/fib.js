// fibonacci recursive
// recursive is worse than iterative for this, because of time complexity
const fibRecursive = (n) => { // )(2^N) -> EXPONENTIAL TIME
  if (n < 2) {
    return n;
  }
  return fibRecursive(n - 1) + fibRecursive(n - 2);
}

// fibonacci iterative
const fibIterative = (n) => { // O(n)
  let arr = [0, 1];
  for (let i = 2; i <= n; ++i) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr[n];
}

// time recursive
var t0 = new Date().getTime() / 1000;
console.log(fibRecursive(43));
var t1 = new Date().getTime() / 1000;
console.log(t1 - t0);

// time iterative
var t0 = new Date().getTime() / 1000;
console.log(fibIterative(43));
var t1 = new Date().getTime() / 1000;
console.log(t1 - t0);