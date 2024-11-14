//hash map
const map1 = new Map();
for (let index = 0; index < 1000000; index++) {
  map1.set(`element${index} key`, `element${index} value`);
}

console.time("map");
console.log(map1.has("element50000 key"));
console.timeEnd("map");

//array
const arr1 = [];
for (let index = 0; index < 100000; index++) {
  arr1.push(`element${index} value`);
}
console.time("arr");
console.log(arr1.includes("element50000 value"));
console.timeEnd("arr");
