// + Addition

// - Subtraction

// * Multiplication

console.log(`-------- Exponential ------------`);

var num1 = 10;

var num2 = 3;

var result = num1 ** num2;

console.log(`Result is : ${result}`);

 

console.log(`-------- Division ------------`);

var result = num1 / num2;

console.log(`Result is : ${result}`);

 

console.log(`-------- Modulus ------------`);

var result = num1 % num2;

console.log(`Result is : ${result}`);

console.log(` ${15%3}`);

console.log(`${12%2}`);

var num = 100;

console.log(num);

var display = function(){

    console.log(`I am Angular Developer !`);

}

display();

console.log(typeof display);

 

var add = function(num1, num2){

    var result = num1 + num2;

    console.log(`Addition is: ${result} `);

}
  
add(20, 40);

 

var wordCount = function(word){

   var words = word.split(" ");

   var wordCount  = words.length;

   console.log(`In Given String - ${word}`);

   return wordCount;

}

var result = wordCount("I am UI Developer");

console.log(`Total word count is: ${result}`);

 

console.log(`--------- Assignment Operators -------------`);

var num1 = 10;

num1+=5; // num1 + 5;  num1 = 15

console.log(`Result is : ${num1}`);

num1-=5;

console.log(`Result is : ${num1}`);

num1*=5;

console.log(`Result is : ${num1}`);















console.log(`--------- Comparison Operators -------------`)
var num1 = 20;
var num2 = "20";
var result = num1==num2;
console.log(`Result is : ${result}`);
console.log(`== Comparison ${47 == '47'}`);
console.log(`== Comparison ${89 == 98}`);

var result = num1===num2;
console.log(`Result is : ${result}`);
console.log(`=== Comparison ${47 === "47"}`);
console.log(`=== Comparison ${'47' === "47"}`);

var result = num1!=num2;
console.log(`Using != Result is : ${result}`);

var result = num1!==num2;
console.log(`Using != Result is : ${result}`);

var num3 = 30;
var num4 = 29;
var result = num3 < num4;
console.log(`Using < operator Result is : ${result}`);

var result = num3 > num4;
console.log(`Using > operator Result is : ${result}`);

var num5 = 30;
var result = num3 < num5;
console.log(`Using < operator Result is : ${result}`);

var result = num3 <= num5;
console.log(`Using <= operator Result is : ${result}`);


var result = num3 > num5;
console.log(`Using > operator Result is : ${result}`);

var result = num3 >= num5;
console.log(`Using >= operator Result is : ${result}`);