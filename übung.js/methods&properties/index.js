var sentence = "john is walking at home";
console.log(sentence.split("=== ")); // length, indexOf, toUppercase, tolowercase, slice,split//


//num

var num = 45;
console.log(num *2);
console.log(num / 2);
console.log(num + 2);
console.log(num -2);
console.log(num % 2);
console.log(num);

console.log(Math.pow(3,3));
console.log(Math.abs (2));
console.log(Math.round(3,4));
console.log(Math.floor(3,4));
console.log(Math.random(2,9));
console.log(Math.min(5.7));
console.log(Math.max(8.8));


var fruits = ["apple", "orange", "banana"];
console.log(fruits.indexOf("apple")); // length, reverse, indexOf, push, pop, unshift,shift, join
fruits.push("cucumber");
fruits.pop()
fruits.unshift("d")
fruits.shift()
console.log(fruits);
console.log(fruits.join(" =="));


var student = {
    "name": "veria addam",
    "age": 25,
    "profession": "student",
    "grades": [29,27,100],
}
console.log(student.grades[1]);
console.log(student.name);

 student["hobby"] = "swimming";
 console.log(student.hobby);
 delete student["age"];
 console.log(student);