let vowelCount = function(str) {
    let count = 0
    for (let index = 0; index < str.length; index++) {
        let char = str.charAt(index) 
        if (char=='a' || char=='e' || char=='i' || char=='o' || char=='u' ||
          char=='A' || char=='E' || char=='I' || char=='O' || char=='U') {
        console.log(char);
        count = count + 1;
       }
       }
       console.log(`Total Number of Count ${count}`);
}
vowelCount("I am very good IT Developer");
console.log("---------------------2---------------------------");
let sum = function() {
    let totalSum = 0
    for (let index = 1; index <=5; index++) {
        let sumofcube= index*index*index
        totalSum= totalSum + sumofcube 
        
        console.log(sumofcube);
       
        
    }  
    console.log(`Total Sum of Cube ${totalSum}`);
}
sum()
console.log("---------------------3---------------------------");
let oddPositionedChars = function (arg) {
    console.log("Odd positioned chars -");
    for (let index = 0; index<arg.length; index++) {
        const chars = arg.charAt(index);
        if (index%2!=0 && chars!=" ") {
            
            console.log(chars); 
            
        }  
        
    }
}
oddPositionedChars("Hard work always pays back");
console.log("-----------------------------------------");
oddPositionedChars("Soon I will be React IT Champ")