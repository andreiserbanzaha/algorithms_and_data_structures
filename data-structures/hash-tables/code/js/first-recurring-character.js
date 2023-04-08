// [2,5,1,2,3,5,1,2,4] // 2
// [2,1,1,2,5,2,1,5,6] // 1


const firstRecurringCharacter = (arr) => {

  let arrMap = {};

  for (let i = 0; i < arr.length; ++i) {
    if (arrMap[arr[i]] !== undefined) {
      return arr[i];
    } else {
      arrMap[arr[i]] = true;
    }
  }
  return undefined;
}


console.log(firstRecurringCharacter([])); // undefined
console.log(firstRecurringCharacter([1])); // undefined
console.log(firstRecurringCharacter([1, 2, 3, ])) // undefined
console.log(firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4])); // 2
console.log(firstRecurringCharacter([2, 1, 1, 2, 5, 2, 1, 5, 6])); // 1