var greaterNumber=function (arg1, arg2) {
    var greater = arg1>arg2? arg1:arg2
    console.log(`The Greater Value is : ${greater}`);
}
greaterNumber(10,-10)
greaterNumber(800,899)
console.log("========Step2========");
var isEvenOrOdd=function (num) {
    var result = num%2==0? "Even":"Odd";
    console.log(`Is Number ${num} Even or Odd : ${result}`);
}
isEvenOrOdd(29);
isEvenOrOdd(44);
isEvenOrOdd(0);
isEvenOrOdd(101);
console.log("=======Step3=======");
var wordlength = function(string){
    var evenorodd= string.length;
    var result = evenorodd%2==0 ?"Even":"Odd";
    console.log(`The Word Length is : ${evenorodd} The Length is : ${result}`);
}
wordlength("javaScript")
wordlength("developer")
wordlength("Google")