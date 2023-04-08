
// MERGE FUNCTION
const merge = (arr1, arr2) => {

  let res = [];

  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      res.push(arr1[i]);
      ++i;
    } else {
      res.push(arr2[j]);
      ++j;
    }
  }

  while (i < arr1.length) {
    res.push(arr1[i]);
    ++i;
  }

  while (j < arr2.length) {
    res.push(arr2[j]);
    ++j;
  }

  return res;
}

// MERGE SORT
const mergeSort = (arr) => {

  if (arr.length <= 1) return arr;

  let mid   = Math.floor(arr.length / 2);
  let left  = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

console.log(mergeSort([2,1,81,7,11,25,67,0,1,5,4,6,12]))
