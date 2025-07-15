// Function that returns the number of negative numbers in an array
// 1. Using regular for loop
function countNegativeNumbers(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  return count;
}

// 2. Using filter
const countNegativeNumbersUsingFilter = (arr) =>
  arr.filter((i) => i < 0).length;

// 3. Using reduce
const countNegativeNumbersUsingReduce = (arr) =>
  arr.reduce((acc, curr) => (curr < 0 ? acc + 1 : acc), 0);

let arr = [2, -9, 17, 0, 1, -10, -4, 8];
console.log(countNegativeNumbers(arr)); // 3
console.log(countNegativeNumbersUsingFilter(arr)); // 3
console.log(countNegativeNumbersUsingReduce(arr)); // 3
