
// version 1
// const bubbleSort = (arr) => {
//   for (let i = arr.length; i > 0; --i) {
//     for (let j = 0; j < i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// }

// version 2 (ES2015)
// const bubbleSort = (arr) => {
//   const swap = (arr, idx1, idx2) => {
//     [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
//   };
//   for (let i = arr.length; i > 0; --i) {
//     for (let j = 0; j < i - 1; ++j) {
//       if (arr[j] > arr[j + 1]) {
//         swap(arr, j, j + 1);
//       }
//     }
//   }
//   return arr;
// }

// version 3 (optimized)
const bubbleSort = (arr) => {
  for (let i = arr.length; i > 0; --i) {
    var noSwaps = true;
    for (let j = 0; j < i - 1; ++j) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) { break; }
  }
  return arr;
}

console.log(bubbleSort([5,4,7,3,8,2,1,7,5,3,98,5,2,3,5,74,2,5,78]));
