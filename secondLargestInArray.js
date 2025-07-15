let arr = [2, -9, 17, 0, 1, -10, -4, 8];
// Function to find second largest in an Array
function findSecondLargest(arr) {
  let firstLargest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] != firstLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}
const arr1 = [10, 20, 20];

console.log(arr); // 8
console.log(findSecondLargest(arr)); // 8
console.log(findSecondLargest(arr1)); // 10
