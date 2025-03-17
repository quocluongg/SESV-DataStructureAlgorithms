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
    if(arr.length === 1) return arr

    // 1. divide the array
    let leftArr = mergeSort(arr.slice(0,arr.length/2))
    let rightArr = mergeSort(arr.slice(arr.length/2))

    // 2. solve and combine the subArray
    let mergeArr = merge(leftArr,rightArr)
    return mergeArr
}

// Combine sorted left & right arrays
// Input: leftArr be Sorted, rightArr be Sorted
// Ouput: MergedArr be merge from leftArr and rightArr was sorted
// Process:
// 1. combine two array until one is empty
// 2. while to push rest of the leftArray or rightArray
// Time: O(x + y), Space: O(x + y)
const merge  = (leftArr,rightArr) => {
    let leftIndex = 0
    let rightIndex = 0
    let mergeArr = []
    
    // 1. combine two array until one is empty
    while(leftIndex<leftArr.length && rightIndex<rightArr.length){
        if(leftArr[leftIndex] < rightArr[rightIndex]){
            mergeArr.push(leftArr[leftIndex])
            leftIndex++
        }else {
            mergeArr.push(rightArr[rightIndex])
            rightIndex++
        }
    }

    // 2. while to push rest of the leftArray or rightArray
    while(leftIndex < leftArr.length){
        mergeArr.push(leftArr[leftIndex])
        leftIndex++
    }

    while(rightIndex < rightArr.length) {
        mergeArr.push(rightArr[rightIndex])
        rightIndex++
    }

    return mergeArr
}

console.log(mergeSort([15,26,13,7]))