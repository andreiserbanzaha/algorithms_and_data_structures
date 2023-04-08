const binarySearch = (arr, n) => {

  let start = 0;
  let end = arr.length - 1;
  let pivot = Math.floor((end + start) / 2);

  while (arr[pivot] !== n && start <= end) {
    if (n > arr[pivot]) {
      start = pivot + 1;
    } else {
      end = pivot - 1;
    }
    pivot = Math.floor((start + end) / 2);
  }

  return arr[pivot] === n ? pivot : -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));