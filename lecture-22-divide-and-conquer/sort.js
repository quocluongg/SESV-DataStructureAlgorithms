// Sort array of numbers smallest -> biggest
// Input:unsorted array
// Output: sorted array
// Process:
// 1. divide the array
// 2. solve this subproblem
// 3. combine the subArray
// Time: O(nlogn), Space: O(n) ~ divide and conquer O(nlogn), call stack O(n)
const mergeSort = (arr) => {
    // base case
    if (arr.length === 1) return arr
  
    // divide:
    let leftArr = mergeSort(arr.slice(0, arr.length / 2))
    let rightArr = mergeSort(arr.slice(arr.length / 2))
  
    // solve: in this case, there's no solve step.
    // because single element array is already a sorted array.
  
    // combine:
    const mergedArr = combine(leftArr, rightArr)
  
    console.log('leftArr:', leftArr)
    console.log('rightArr:', rightArr)
    console.log('mergedArr:', mergedArr)
    console.log('============================')
  
    return mergedArr
  }
  
  // Combine sorted left & right arrays
  // Input: leftArr be Sorted, rightArr be Sorted
  // Ouput: MergedArr be merge from leftArr and rightArr was sorted
  // Process:
  // 1. combine two array in asc order until one is empty
  // 2. while to push rest of the leftArray or rightArray
  // Time: O(x + y), Space: O(x + y)
  const combine = (leftArr, rightArr) => {
    const mergedArr = []
  
    // starting indexes
    let leftArrIdx = 0
    let rightArrIdx = 0
  
    // 1. combine two array in asc order until one is empty
    while (leftArrIdx < leftArr.length && rightArrIdx < rightArr.length) {
      if (leftArr[leftArrIdx] <= rightArr[rightArrIdx]) {
        mergedArr.push(leftArr[leftArrIdx])
        leftArrIdx++
      } else {
        mergedArr.push(rightArr[rightArrIdx])
        rightArrIdx++
      }
    }
  
    // 2. while to push rest of the leftArray or rightArray
    // push all numbers left in leftArr to mergedArr
    while (leftArrIdx < leftArr.length) {
      mergedArr.push(leftArr[leftArrIdx])
      leftArrIdx++   
    }
  
    // push all numbers left in rightArr to mergedArr
    while (rightArrIdx < rightArr.length) {
      mergedArr.push(rightArr[rightArrIdx])
      rightArrIdx++  
    }
  
    return mergedArr    
  }
  
  const unsortedNumbers = [15, 26, 13, 7, 3, 5, 2, 22]
  const sortedNumbersAscOrder = mergeSort(unsortedNumbers)
  
  console.log(`Unsorted array: [${unsortedNumbers}]`)
  console.log(`Sorted array: [${sortedNumbersAscOrder}]`)