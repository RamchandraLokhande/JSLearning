var sqareofnumber = function (num) {
    var result = num*num;
    console.log(`The Square of ${num} is : ${result}`);
}
sqareofnumber(5)
sqareofnumber(6)
sqareofnumber(25)
sqareofnumber(100)
sqareofnumber(67)
sqareofnumber(89)
sqareofnumber(59)
console.log("=========step 2==========");

var typeOfFunction = function () {
    var result = typeof typeOfFunction;
    console.log(`The Type of Function is : ${result}`);
}
typeOfFunction( )

console.log("==========step 3==========");
var areaOfRect = function(l,b) {
    var result= l*b;
    console.log(`The area of rectangle is : ${result}`);
}
areaOfRect(499,917);

console.log("===========step 4==========");
var swapValue = function(num1, num2) {
    console.log(`Before Swap values : ${num1} ${num2}`);
    var temp = num1;
    num1 = num2;
    num2 = temp;
    console.log(`After Swap values : ${num1} ${num2}`);
}
swapValue("Mahi","Raina");
swapValue(55,77);

console.log("========step 5==========");

var string = "JS the most popular language of internet";
var stringlength = string.length;
console.log(`Total Character available in string : ${stringlength}`);
var charat6 = string.charAt(stringlength-34);
console.log(`Character at index 6 : ${charat6}`);
var charat11 = string.charAt(11);
console.log(`Character at index 11 : ${charat11}`);
var charatlast = string.charAt(stringlength-1);
console.log(`Character at Last : ${charatlast}`);
var charAt0 = string.charAt(0);
console.log(`Character at First : ${charAt0}`);
var charat3last = string.charAt(stringlength-3);
console.log(`Character at Last : ${charat3last}`);
var numberword = string.split(" ");
var wordCount = numberword.length;
var square = wordCount*wordCount;
console.log(`Total Number of words is : ${wordCount} Square of Words in string is : ${square}`);
