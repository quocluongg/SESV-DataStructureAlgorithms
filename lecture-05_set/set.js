const set1 = new Set([1, 2, "Cam", "Quoc"]);
const set2 = new Set([2, 3, "Cam", "Hung"]);
console.log(set1);
console.log(set2);

const union = (set1, set2) => {
  let union = new Set(set1);
  for (const element of set2) {
    union.add(element);
  }
  return union;
};

const intersection = function (set1, set2) {
  let intersection = new Set();
  for (const element of set2) {
    if (set1.has(element)) {
      intersection.add(element);
    }
  }
  return intersection;
};

const diffirent = (set1, set2) => {
  let _diffirent = new Set();
  for (const element of set1) {
    if (!set2.has(element)) {
      _diffirent.add(element);
    }
  }
  return _diffirent;
};

console.log(union(set1, set2));
console.log(intersection(set1, set2));

//insert
const set3 = new Set();
set3.add(1);
set3.add("Cam");
console.log(set3); // Set(2) {1, "Cam"}

//delete
set3.delete(1);
console.log(set3); // Set(1) {"Cam"}

//search
console.log(set3.has("Cam")); // true
console.log(set3.has(1)); // false

const arr1 = ["Luong", "Vo", "Khoi", "Quoc"];
const arr2 = ["Luong", "Vo", "Khoi", "Hung"];
//find the union
console.log(union(new Set(arr1), new Set(arr2)));
//find the intersection
console.log(intersection(new Set(arr1), new Set(arr2)));
//find the diffirent
console.log(diffirent(new Set(arr1), new Set(arr2)));
