// Function to return the element index in the array, if the element is not present, then return -1;
function searchElement(arr, number) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === number) {
      return i;
    }
  }
  return -1;
}

console.log(searchElement([1, 2, 3, 4, 5], 3)); // 2
