//Input: n
//Output: factorial's nth
//Process: parameter is rs*i and i++ 
//Space: O(n), Time: O(n)
const factorial = (n) => {
    //define result
    let rs = 1;

    //loop
    while(n>0){
        rs *= n;
        n--
    }

    //return
    return rs;
 };
  

 const factorial1 = (n, rs = 1, i = 1) => {
    if (i > n) return rs; // base case
    return factorial1(n, rs * i, i + 1);
 };
 
 console.log(factorial(1000000)); //Infinity
 console.log(factorial1(6607)); //Infinity
 console.log(factorial1(6608)); //RangeError: Maximum call stack size exceeded