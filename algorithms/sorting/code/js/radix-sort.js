
const getDigit = (num, i) => {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

const digitCount = (num) => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

const mostDigits = (arr) => {
  let maxDigits = 0;
  for (let i = 0; i < arr.length; ++i) {
    maxDigits = Math.max(maxDigits, digitCount(arr[i]));
  }
  return maxDigits;
}

const radixSort = (arr) => {
  let maxDigitCount = mostDigits(arr);
  for (let k = 0; k < maxDigitCount; ++k) {
    let digitBuckets = Array.from({length: 10}, () => []);
    for (let i = 0; i < arr.length; ++i) {
      // digitBuckets[getDigit(arr[i], k)].push(arr[i]);
      let digit = getDigit(arr[i], k);
      digitBuckets[digit].push(arr[i]);
    }
    // push all the elements from the buckets into the list
    arr = [].concat(...digitBuckets);
  }
  return arr;
}

console.log('res = ' + radixSort([123,124,532,34214,92,53151,7845]));
