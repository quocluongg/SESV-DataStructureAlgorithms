function findFourNumbers(arr, targetSum) {
  const n = arr.length;

  for (let i = 0; i < n - 3; i++) {
    //Time: n^4. Space: 1
    for (let j = i + 1; j < n - 2; j++) {
      //Time: n^3, Space: 1
      for (let k = j + 1; k < n - 1; k++) {
        //Time: n^2. Space: 1
        for (let l = k + 1; l < n; l++) {
          //Time: n, Space: 1
          if (arr[i] + arr[j] + arr[k] + arr[l] === targetSum) {
            //Time: 1, Space: 0
            return [arr[i], arr[j], arr[k], arr[l]]; //Time: 1, Space: 0
            //Total-----------------------------------
            //Time: O(n^4), Space: O(1)
          }
        }
      }
    }
  }

  return [];
}

// Example usage
const arr = [2, 4, 5, 1, 6];
const targetSum = 13;
const result = findFourNumbers(arr, targetSum);
console.log("Combination found:", result);
