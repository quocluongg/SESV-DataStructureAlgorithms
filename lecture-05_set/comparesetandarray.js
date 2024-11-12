console.time("array");
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arr.includes(8));
console.timeEnd("array");

console.time("set");
const set = new Set([1, 2, 3, 4, 5, 6, 7, 8]);
console.log(set.has(8));
console.timeEnd("set");
