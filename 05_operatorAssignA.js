var squareOfWordLength = function (word) {
    var words = word.length;
    console.log(`Lentgh of string is : ${words}`); 
    var square = words*words
    console.log(`Square of word length ${square}`); 
}
squareOfWordLength("javaScript")
squareOfWordLength("Google Chrome")
squareOfWordLength("Developer Smart")
console.log("==========step 2==========");
var givenstring=function() {
    var greet = "I am Angular Developer";
    var lengthGreet = greet.length;
    console.log(`The length of string is - ${lengthGreet}`);
    var result  = greet.split(" ");
    var words = result.length;
    console.log(`Number of Words - ${words} `);
    var Division = lengthGreet/words;
    console.log(`Division of string length and number of words ${Division}`);
    var Multiplication = lengthGreet*words;
    console.log(`Multiplication of string length and number of words ${Multiplication}`);
}
givenstring()