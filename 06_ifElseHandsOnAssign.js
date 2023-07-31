console.log("========step 1=========");
var oddEven = function (num) {
    if (num%2==0) {
        console.log(`${num} is even`);
    } else {
        console.log(`${num} is odd`);
    }
}
oddEven(45)
oddEven(70)
oddEven(67)
oddEven(98)
console.log("========step 2=========");
var charlength = function (greet) {
     if (greet.length>10) {
        console.log(`${greet} string is more than 10 character`);
    } else {
        console.log(`${greet} string is less than 10 character`);
    }
}
charlength("javaScript - ES6")
console.log("========step 3=========");
var charlength = function (starts) {
        if (starts.substr(0,4)=="java") {
        console.log(` ${starts} - string starts with java`);
    } else {
        console.log(`${starts} - string not starts with java `);
    }
}
charlength("javaScript Language")
