// // const bmiRechner =() =>{
// //     const grosse =document.getElementById("grosse"). value/100
// //     const gewicht=document.getElementById("gewicht").value

// //     const result =(gewicht/grosse**2).toFixed(0)
// //     document.getElementById("ergebnis").innerHTML=result

// //     if(result>50){
// //         document.getElementById("message").innerHTML="übergewicht"
// //     }
// // }

// // function wordBlanks (myNoun, myAdjective, myVerb, myAdverb){
// //     var result = "";
// //     result+= "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store quickly"
// //    return result;
// // }
// // console.log(wordBlanks ("dog", "big"


// //numbers
// //string
// //boolean 
// //undefined
// //null


// var a = 5;
// var a = 2;

// console.log(a);



// console.log(`Elzero web "school"`);

// console.log("Elzero web `school`");

// console.log("Elzero web \"school\"");

// console.log(`elzero web \`school\``);

// console.log("Elzero \
// web \
// school");

// console.log("Elzero \nweb \nschool");
// console.log("=============");

// let title = "elzero";
// let desc = "web js";

// let markUp = `
// <div class= "card">
// <div class="child">
// <h2>title</h2>
// <p>desc</p>
// </div>
// </div>
// `;
// console.log(markUp);

// console.log("================");

// num = 1
// 1
// num++
// 1
// num
// 2






let theName = "mona";
let theGender = "female";
let theAge = 30;

if (theGender === "Male"){
  console.log("Mr");


}else{
  console.log("mrs");
}

//Condition  ? if true : if false


 theGender === "Male" ? console.log("mr") : console.log("mrs");

let result =  theGender === "Male" ? "mr" : "mrs";
console.log(result);
console.log(theGender === "Male" ? "mr" : "mrs");

console.log(`hello ${theGender === "Male" ? "mr" : "mrs"}${theName}`);

theAge < 20 ? console.log(20): theAge < 20 && theAge < 60 ? console.log("20" , "60"): theAge < 60;
console.log("larger than 60");