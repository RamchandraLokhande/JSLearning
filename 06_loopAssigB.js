let oddPositionedChars = function (arg) {
    console.log("Odd positioned chars -");
    for (let index =arg.length-1; index>=0; index--) {
        const chars = arg.charAt(index)
        if (chars!=" ") {
            
            console.log(`${chars}`); 
            
        }  
        
    }
}
oddPositionedChars("Hard work always pays back")
console.log("-----------------------------------------");
oddPositionedChars("Soon I will be React IT Champ")