//
// const selectionSort = (arr) => {
//
//   const swap = (arr, i, j) => {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//   }
//
//   for (let i = 0; i < arr.length - 1; ++i) {
//     let min = i;
//     for (j = i + 1; j < arr.length; ++j) {
//       if (arr[j] < arr[min]) {
//         min = j;
//       }
//     }
//     if (min !== i) {
//       swap(arr, i, min);
//     }
//   }
//   return arr;
// }


// EX2015 method
const selectionSort = (arr) => {

  const swap = (arr, i, j) => { [arr[i], arr[j]] = [arr[j],arr[i]]; }

  for (let i = 0; i < arr.length - 1; ++i) {
    let min = i;
    for (j = i + 1; j < arr.length; ++j) {
      if (arr[j] < arr[min]) min = j;
    }
    if (min !== i) swap(arr, i, min);
  }
  return arr;
}

console.log(selectionSort([2,6,3,7,8,4,6,7,4,2,1]));
