//Input: arr: array, and sum of 2
//Output: all the sum of three numbers equals sum
//Process:
//1. sort the array
//2. use two pointer, left begin from 0 and right: array's length - 1
//   if sum of two value in pointer equal sum than push it to result
//Space: O(1), Time: O(nlogn)
const find2 = (arr, sum) => {
    //1. sort the array
    //Space: O(1) , Time: O(nlogn)
    arr = arr.sort((a, b) => a - b);
    
    let left = 0, right = arr.length - 1;
    let rs = [];

    while (left < right) {
        let s = arr[left] + arr[right];
        if (s === sum) {
            rs.push([arr[left], arr[right]]);
            left++;
            right--;
        } else if (s < sum) {
            left++;
        } else {
            right--;
        }
    }
    
    //return the result
    return rs;
};

console.log(find2([1, 2, 3, 4, 5, 6], 4)); // Output: [[1, 3]]
console.log(find2([1, 2, 3, 4, 5, 6], 5)); // Output: [[1, 4],[2, 3]]

//Input: arr: array, and sum of 2
//Output: all result the sum of four numbers equals sum
//Process:
// 1. sort the array
// 2. Iterate through each element in the array
// 3. each  element, use two pointers:
//    - left starts at k + 1, right starts at the end of the array
//    - If the sum of three numbers equals sum, add the triplet to the result and move both pointers
//    - If the sum is less than sum, increment left
//    - If the sum is greater than sum, decrement right
//Time Complexity: O(n^2) ~ O(nlogn)- sort + O(n^2) -loop
const find3 = (arr, sum) => {

    // 1. sort the array
    //Time: O(nlogn)
    arr = arr.sort((a, b) => a - b);
    let rs = [];

    //2.Iterate through each element in the array
    //Time: O(n^2)
    for (let k = 0; k < arr.length - 2; k++) {
        
        //use two pointers
        //left starts at k + 1, right starts at the end of the array
        //Time: O(n)
        let left = k + 1, right = arr.length - 1;
        while (left < right) {
            let s = arr[k] + arr[left] + arr[right];
            if (s === sum) {
                rs.push([arr[k], arr[left], arr[right]]);
                left++;
                right--;
            } else if (s < sum) {
                left++;
            } else {
                right--;
            }
        }
    }

    //return result
    return rs;
};

console.log(find3([1, 2, 3, 4, 5, 6],12)) //[ [ 1, 5, 6 ], [ 2, 4, 6 ], [ 3, 4, 5 ] ]
console.log(find3([1, 2, 3, 4, 5, 6],15)) //[ [ 4, 5, 6 ] ]

//Input: arr: array, and sum of 4
//Output: all result the sum of four numbers equals sum
//Process:
// 1. Sort the array in ascending order (O(n log n))
// 2. Iterate through each element (i) as the first fixed number
// 3. For each i, iterate through the next element (j)
// 4. Use the two-pointer:
//    - left starts at j + 1, right starts at the end of the array
//    - If the sum of four numbers equals sum, add the quadruplet to the result and move both pointers
//    - If the sum is less than sum, increment left
//    - If the sum is greater than sum, decrement right
//Time Complexity: O(n^3) ~ O(nlogn)- sort + O(n^3) -loop
const find4 = (arr,sum) => {

    // 1. sort the array
    //Time: O(nlogn)
    arr = arr.sort((a,b)=>a-b)
    let rs = []

    //2.Iterate through each element in the array
    //Time: O(n^3)
    for (let i = 0; i < arr.length - 3; i++) {
        if (arr[i] === arr[i - 1]) continue;
        //3. iterate through the next element (j)
        //Time: O(n^2)
        for (let j = i + 1; j < arr.length - 2; j++) {
            if (arr[j] === arr[j - 1]) continue;
            let left = j + 1, right = arr.length - 1
            while (left < right) {
                let s = arr[i] + arr[j] + arr[left] + arr[right]
                if (s === sum) {
                    rs.push([arr[i], arr[j], arr[left], arr[right]])
                    left++
                    right--
                    //ignore duplicate adjacent elements
                    while(nums[left - 1] === nums[left]) left++
                    while(nums[right + 1] === nums[right]) right--
                } else if (s < sum) {
                    left++
                } else {
                    right--
                }
            }
        }
    }

    //return result
    return rs
}

console.log(find4([1, 2, 3, 4, 5, 6], 16)); //[ [ 1, 4, 5, 6 ], [ 2, 3, 5, 6 ] ]
console.log(find4([1, 2, 3, 4, 5, 6], 18)); //[ [ 3, 4, 5, 6 ] ]