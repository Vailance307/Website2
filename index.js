//console.log(`hello`);
//console.log(`i like pizza`);

/*window.alert(`This is an alert`);
window.alert(`I like pizza`);*/

/*document.getElementById("myH1").textContent = `Hello`;
document.getElemtById(`myP`).textContent = `I like pizza!`;*/

/*let x = 123;
console.log(x);
let age = 25;
console.log(`you are ${age} years old`);*/

/*let firstName = `vai`;
console.log(typeof firstName);
console.log(`Your name is ${firstName}`);*/

 /*let fullName = "vailance mkanjumwa";
let age =25;
let student = false;

Document.getElementById("P1").textContent = fullName;*/

/*let students = 33;
students += 8;
console.log(students);

students -= 9;
console.log(students);
students *= 10;
console.log(students);

students **=2;
console.log(students);
students %=2;
console.log(students);*/

/*let age = window.alert("How old are you?");
age +=1;
console.log(age);

//consatant variable that can't be changed

let pi = 3.142;
let radius;
let circumference;

pi = 420.69
radius = window.prompt("Enter the radius of a circle");
radius = Number(radius);

circumference = 2 * pi * radius;

console.log(circumference);*/

/*let username;
document.getElementById("mySubmit").onclick = function(){
  username = document.getElementById("myText").value;
  document.getElementById("myH1").textContent = `Hello ${username}`
}

//Type conversion = change the datatype of a value to another
//         (strings, numbers, boolean)

let age =window.prompt("How old are you?");
age = Number(age);
age +=1;

console.log(age, typeof age)

let x = "pizza";
let y = "pizza";
let z = "pizza";

x = Number (x);
y = String (y);
z = Boolean (z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);

// constant variables that can't be changed

const PI = 3.142;
let radius;
let circumference;



document.getElementById("mySubmit").onclick =function(){
  radius = document.getElementById("myText").value;
  radius = Number(radius);
  circumference = 2* PI * radius;
  document.getElementById("myH3").textContent = circumference
}*/

//Math * built-in object that provides a collection of properties and methods


/*console.log(Math.PI);
console.log(Math.E);

let x = 3;
let y = 2;
let z = 1;*/

//z = Math.round(x);
//z = Math.floor(x)  //rounds down
//z = Math.ceil(x); // rounds up
//z = Math.trunc(x); // eliminates any decimal potion
//z = Math.pow(y, x); // power function
//z = Math.sqrt(x) // square root
//z = Math.log(x) // natural logarithmn of a number
//z = Math.sin(x);
//z = Math.cos(x);
//z = Math.tan(x);
//z = Math.abs(x);  //absolute value of a number.
//z = Math.sign(x);
/*let max = Math.max(x, y, z);
let min = Math.min(x, y, z);
console.log(max)
console.log(min);*/

//RANDOM NUMBER GENERATOR

const max = 50;
const min = 100;

let randomNum = Math.floor(Math.random()* (max - min)) + min;
console.log(randomNum)

//if statement ; if a condition is true, execute some code. If not, do something else

/*let age = 13;

if(age >= 18){
  console.log("You are old enough to enter this site");
}
else{
  console.log("You must be 18+ to enter this site");
}

let time = 13;
if(time < 12){
  console.log("Good Morning")
}
else{
  console.log("Good Afternoon")
}

let isStudent = false;

if(isStudent){
  console.log("You are a student!")
}
else{
  console.log("You are NOT a students!")
}*/

/*let age = 18;
let hasLicense = false;

if(age >= 16){
  console.log("You are old enough to drive!");
  if(hasLicense){
    console.log("You have your license!")
  }
  else{
    console.log("You do not have a license yet!")
  }

}
else{
  console.log("You must be 16+to have a license")
}*/

//Checked property - dertermines the checked state of an HTML checkbox or radio button element

let message = "hello world!";

message = "You waited."
console.log(message);
/*
javaScript varibles must start with a letter, an underscore or a dollar sign;
let a =;
let _a =;
let $a =;
*/