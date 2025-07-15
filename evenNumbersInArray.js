// Function to find even numbers in Array
function countEvenNumbers(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) count++;
  }
  return count;
}

const arr = [1, 2, 3, 4, 5, 6];
console.log(countEvenNumbers(arr)); // 3
