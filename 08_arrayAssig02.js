const arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11];
console.log(arrayNumbers);
console.log("-----------Total Element---------------");
console.log(arrayNumbers.length);
console.log("-------------------------------");
let element1 = arrayNumbers[0];
let elementLast = arrayNumbers[arrayNumbers.length - 1];
console.log(`First Element in array = ${element1}`);
console.log(`Last Element in array = ${elementLast}`);
console.log(`----------- Third Last Element -----------`);
let elementThirdLast = arrayNumbers[arrayNumbers.length-3]
console.log(elementThirdLast);
console.log(`----------- Even Indexed Element -----------`);
for (let index = 0; index <=arrayNumbers.length; index++) {
    if (index%2==0) {
        const element = arrayNumbers[index];
    console.log(element);
    }
}
console.log(`----------- Odd Indexed Element -----------`);
for (let index = 0; index <arrayNumbers.length; index++) {
    if (index%2==1) {
        const element = arrayNumbers[index];
    console.log(element);
    }
}
console.log(`----------- Even Indexed Element -----------`);
var sum = function () {
    let totalSum = 0
for (let index = 0; index <=arrayNumbers.length; index++) {
      
        const element = arrayNumbers[index];
        const totalSum = totalSum + element
    console.log(element);
    let index = index%2==0
    console.log(totalSum);
    
   
}

}
sum()