const arr = [];
for (let index = 0; index < 1000000; index++) {
  arr.push(index);
}

console.time("array");
console.log(arr.includes(999999));
console.timeEnd("array");

const set = new Set(arr);
console.time("set");
console.log(set.has(999999));
console.timeEnd("set");
