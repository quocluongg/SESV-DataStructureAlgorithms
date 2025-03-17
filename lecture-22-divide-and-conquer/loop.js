// Sort array of numbers small -> big
// Input: usort array
// Output: sorted array
// Process:
// 1. loop go to through all elements
// 2. use binary search to find positio to insert
//Space: O(n), Time: O(nlogn)
const sortArrayForLoop = (arr) => {
    //Space: O(n), Time: O(1)
    // save final result to sortedArr
    const sortedArr = [arr[0]]
  
    console.log('sortedArr:', sortedArr)
  
    // 1. FOR loop to go through all elements
    //Space: O(1), Time: O(nlogn) 
    for(let i = 1; i < arr.length; i++) {
      console.log('arr[i]:', arr[i])
      
      let left = 0
      let right = sortedArr.length - 1
      let idxToInsert = null
  
      // 2. binary Search `sortedArr` to find the position to insert
      //Space: O(1), Time: O(logn) ~ loop: O(n) *  binary search: O(nlogn)
      while(left <= right) {
        let mid = Math.ceil((left + right) / 2)
  
        console.log('left:', left, ', mid:', mid, ', right:', right)
  
        // when mid = left and mid = right, our new element position must be
        if (mid === left && mid === right) {
          //  if greater or equal, isert o the right  
          if(arr[i] >= sortedArr[mid]) {
            idxToInsert = mid + 1
          } else {
            // if smaller, isert o mid
            idxToInsert = mid
          }
          break
        }  else if(sortedArr[mid] < arr[i]) { // continue with data points on the right
          left = mid + 1
        } else if(sortedArr[mid] > arr[i]) { // continue with data points on the left
          right = mid - 1
        } else { // edge cases (1), left = 1, mid = 2, right = 3
          idxToInsert = mid + 1
          break
        }
      }
  
      // edge cases (2), left = 0, mid = 1, right = 1
      if (idxToInsert === null) {
        idxToInsert = right + 1
      }
  
      // insert element to sorted array
      sortedArr.splice(idxToInsert, 0, arr[i])
  
      console.log('idxToInsert:', idxToInsert)
      console.log('sortedArr after insert:', sortedArr)
      console.log('=====================')
    }
  
    return sortedArr
  }
  
  sortArrayForLoop([15, 26, 13, 7, 3, 5, 2, 22])
  // sortArrayForLoop([-7,-5,-1,7,-4,-1,0,0,4,9]) // edge case (1), (2), loop runs forever
  // sortArrayForLoop([-4,0,7,4,9,-5,-1,0,-7,-1]) // edge case (2), left, mid, right don't converge when (left = 0, mid = 1, right = 1)