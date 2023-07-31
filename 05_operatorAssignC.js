console.log("===========Assignment 1============");
var args = function (name,gradScore, hscScore, sscScore){
    var result = (gradScore >=70 && hscScore >=70 && sscScore >=90 ) ? "you are eligible for TCS interview.":"unfortunately you are not eligible for interview.";
    console.log(`${name} ${result}`);
}
args("Ram,", 80,86,90);
args("Harshal,", 70,65,55);
args("Shubham,", 60,79,88);

console.log("============Assignment 2=============");
console.log("========Step 1==========");
var maleMarriageEligibility = function maleMarriageEligibility (gender, age, boyName) {
    var result = (gender="male",age>=21) ? "you are eligible for marriage.":"you are not eligible for marriage.";
    console.log(`${boyName} ${result}`);
}
maleMarriageEligibility("male",25,"Billgates");
maleMarriageEligibility("male",17,"Stew Jobs");

console.log("=============Step 2==========");
var femaleMarriageEligibility = function femaleMarriageEligibility (gender, age, girlName) {
    var result = (gender="female",age>=18) ? "you are eligible for marriage.":"you are not eligible for marriage.";
    console.log(`${girlName} ${result}`);
}
femaleMarriageEligibility("female",16,"Jenifer");
femaleMarriageEligibility("male",27,"Malinda Gates");
console.log("===============================");
var interviewEligibility = function(gradScore, hscScore, sscScore, candidateName ){
    var result = gradScore>=70 || hscScore>= 80 || sscScore >=90 
     ? `Congrats ${candidateName} you are eligible for TCS interview.`
     :  `Unfortunately you are not eligible for interview`;
     console.log(result);
 }
 
 interviewEligibility(80, 86, 90, 'Mahi');
 interviewEligibility(70, 65, 55, 'Gill');
 interviewEligibility(60, 79, 88, 'Stew');