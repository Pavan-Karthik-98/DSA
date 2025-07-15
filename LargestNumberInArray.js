// Function to find largest element in an array
function findLargest(arr) {
  let largest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

let arr = [1, 2, 3, 4, 5];
console.log(findLargest(arr)); // 5
