
const insertionSort = (arr) => {

  for (let i = 1; i < arr.length; ++i) {
    let currVal = arr[i];
    for (j = i - 1; j >= 0 && arr[j] > currVal; --j) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currVal;
  }
  return arr;
}

console.log(insertionSort([5,2,1,6,4,0,7,3,8]));
