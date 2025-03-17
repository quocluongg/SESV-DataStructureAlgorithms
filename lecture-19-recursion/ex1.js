/**
* @param {number} n
* @return {number}
*/
// Process: 
//1. check if n = 0 return 0
//2. check if n = 1 return 1
//3. call recursion
//Space: O(1), Time: O(n)
var fib = function(n) {
    //Space: O(1), Time: O(1)
    if(n===0){
        return 0;
    }
    if(n===1) {
        return 1;
    }
    return fib(n-1) + fib(n-2)
 };
 