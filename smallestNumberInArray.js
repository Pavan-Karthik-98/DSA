// Function to find smallest element in an array
function findSmallest(arr) {
  let smallest = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}

let arr = [1, 2, 3, 4, 5];
console.log(findSmallest(arr)); // 1
