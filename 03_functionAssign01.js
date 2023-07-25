console.log('==========1========');
function noarg() {
    console.log('Hello');
    console.log('RAM');
    
}
noarg();
console.log('===========2==============');
function personalDetails(firstName, lastName, collgeName) {
    console.log('First Name - ', firstName, 'Last Name - ',lastName, 'College Name - ',collgeName);
}
var fn = "Ramchandra";
var ln = "Lokhande";
var cn = "ICOER"
personalDetails(fn,ln,cn)
console.log('============3=============');
function swap(n1, n2) {
    console.log('Before Swap ==> n1 - ', n1,'n2 - ', n2);
    var temp = n1
    n1 = n2
    n2 = temp
console.log('After Swap ==> n1 - ', n1 , 'n2 - ', n2);
}
var virat = "virat";
var anushka = "anushka";
swap(virat , anushka);
var num1 = 1000;
var num2 = 2000;
swap(num1, num2);
console.log('============4=============');
function addThreeValues(arg1, arg2, arg3) {
    console.log('Values are - ' ,arg1 , arg2 , arg3);
    var result = arg1+arg2+arg3;
    return result;
}
var result = addThreeValues(10.23,600,40)
console.log("Result - ", result);
var value = addThreeValues("Hello", "Good", "Morning");
console.log("Result - ", value);
console.log("==========5 Bank Details==========");
function bankDetals(arg1, arg2, arg3, arg4) {
    console.log('Bank Name - ',arg1, 'Account Number - ', arg2, 'Location - ',arg3, 'Pin - ',arg4);  
}
var b1 = "CITI Bank";
var b2 = 3456782345;
var b3 = "Pune";
var b4 = "431202";
bankDetals(b1,b2,b3,b4);
var b1 = "Axis Bank";
var b2 = 7856782345;
var b3 = "Mumbai";
var b4 = 441202;
bankDetals(b1,b2,b3,b4);
var b1 = "HDFC Bank";
var b2 = 8956782345;
var b3 = "Pune";
var b4 = 631202;
var b5 = "Open";
bankDetals(b1,b2,b3,b4);