const array = ["Luong", "Vo", "Khoi", "Quoc", 15, 5, 2004];

//1.insert
//insert at the end
array.push("Luong Ha Vy");
console.log(array);
//insert anywhere
array.splice(8, 0, 5);
console.log(array);

//2.delete
array.splice(1, 2); //from index 1 delete 2 element
console.log(array);

//3. access
console.log(array[0]);

//4. search
console.log(array.includes("Luong"));
