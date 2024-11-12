let str = "Data Structure and Algorithms very important!! ";
console.log(str);
//insert
str = str + " Because";
console.log(str); //output: Data Structure and Algorithms very important!! Because
console.log(str.concat(" it need for interview")); //output: Data Structure and Algorithms very important!! Because it need for interview

//delete
console.log(str.replace("Data ", "")); //output: Structure and Algorithms very important!!  Because

//access
console.log(str[1]); //output: a
console.log(str.substring(0, 4)); //output: data

//search
console.log(str.includes("Data")); //output: true
console.log(str.search("Structure")); //output: 5
