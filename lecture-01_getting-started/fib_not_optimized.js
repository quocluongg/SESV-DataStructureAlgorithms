console.time("compute fib not optimized time");
const fib = (n) => {
  if (n === 1) return 1; //Time: 2, Space: 0
  if (n === 0) return 0; //Time: 2, Space: 0
  return fib(n - 1) + fib(n - 2); //Time: 2^n, Space: n
  //  T(n) = T(n-1) + T(n-2) + 5 (2 comparison, 2 subtractions, 1 addition)
                 //Total----------------------------
                     //Time: O(2^n), Space: n
};

console.log(fib(40)); // 102334155
console.timeEnd("compute fib not optimized time"); // compute fib not optimized time: 1213.639ms
