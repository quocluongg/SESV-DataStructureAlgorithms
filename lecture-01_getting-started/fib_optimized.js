console.time('compute fib optimized time');
const fib = n => {
  let fn_2 = 0; // f(0)                 // Time: 1, Space: 1
  let fn_1 = 1; // f(1)                 // Time: 1, Space: 1

  if (n === 0) return fn_2;             // Time: 2, Space: 1
  if (n === 1) return fn_1;             // Time: 2, Space: 1

  let fn = 0;                           //Time: 1, Space: 1

  for (let i = 2; i <= n; i++) {        //Time: n, Space: 1
    fn = fn_1 + fn_2;                   //Time: 1, Space: n
    fn_2 = fn_1;                        //Time: 1, Space: _
    fn_1 = fn;                          //Time: 1, Space: _
  }

  return fn;                            //Time: 1, Space: 0
                                // Total -------------------------------
                                        //Time: 3n + 8, Space: n + 6
};

console.log(fib(50)); // 12586269025
console.timeEnd('compute fib optimized time'); // compute fib optimized time: 4.926ms
