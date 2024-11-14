const map1 = {
  "First Name": "Quoc",
  "Last Name": "Luong",
};

console.log(map1);

const map2 = new Map();
map2.set("First Name", "Quoc");
map2.set("Last Name", "Luong");
console.log(map2);

//insert
map1["Job Title"] = "Software Engineer";
map2.set("Job Title", "Software Engineer");
console.log(map1);
console.log(map2);

//delete
delete map1["Job Title"];
map2.delete("Job Title");
console.log(map1);
console.log(map2);

//search
console.log(map1["First Name"]);
console.log(map2.get("First Name"));
