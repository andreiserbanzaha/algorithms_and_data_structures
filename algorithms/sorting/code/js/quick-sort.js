
const pivot = (arr, start = 0, end = arr.length - 1) => {

  const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  let pivot = arr[start];
  let swapIndex = start;

  for (let i = start + 1; i <= end; ++i) {
    if (pivot > arr[i]) {
      ++swapIndex;
      swap (arr, swapIndex, i);
    }
  }

  // move the pivot element to the correct position
  swap (arr, start, swapIndex);

  return swapIndex;
}

// console.log(pivot([4,8,2,1,5,7,6,3]));
// [4,8,2,1,5,7,6,3]
// [4,2,8,1,5,7,6,3]
// [4,2,1,8,5,7,6,3]
// [4,2,1,3,5,7,6,8]

// [3,2,1,4,5,7,6,8] <- pivot (4) is in the correct position


const quickSort = (arr, left = 0, right = arr.length - 1) => {

  // until one element left in an array
  if (left < right) {

    let pivotIndex = pivot (arr, left, right);

    quickSort (arr, left, pivotIndex - 1);
    quickSort (arr, pivotIndex + 1, right);
  }

  return arr;
}

console.log(quickSort([4,8,2,1,5,7,6,3]));
