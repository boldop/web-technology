//different ways of variables declaration
var name = "bikesh";
name = "sujata";
let name1="silash ranmati";
const name2="niroj";
console.log(typeof name);
console.log(typeof name1);
console.log(typeof name2);
let num1= 10;
console.log(typeof num1);
var name3 = 100;
console.log(typeof name3);

let number = prompt("Enter a number");
console.log(number);
var number1 = prompt("Enter a text");
console.log(number1);

//document.getElementsByClassName("paragraph")[0].style.backgroundColor="green";

document.getElementsByClassName("paragraph")[3].style.cssText="background:green; color:white; font-size:50px";//changng background colour
document.getElementsByClassName("paragraph")[3].innerHTML="Hi this is week 10";//changing lorem text to this 
document.getElementsByTagName("h1")[0].innerHTML="DOM getElementsByTagName example";//changing text
