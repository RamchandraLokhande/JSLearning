const arrayFruits = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(arrayFruits);
let element1 = arrayFruits[0];
let elementLast = arrayFruits[arrayFruits.length - 1];
console.log(`First Element in array = ${element1}`);
console.log(`Last Element in array = ${elementLast}`);
console.log("----------------Add Element 'Papaya' in first --------------");
arrayFruits.unshift("Papaya")
console.log(arrayFruits);
console.log("----------------Remove 'Mango' from array--------------");
arrayFruits.splice(4,1)
console.log(arrayFruits);
console.log("----------------Add Element 'Pineapple' in Last --------------");
arrayFruits.push("Pineapple")
console.log(arrayFruits);
console.log("----------------Add Element 'Dragon Fruit' Before 'Water Melon'--------------");
arrayFruits.splice(4,0, 'Dragon Fruit')
console.log(arrayFruits);
console.log("----------------Replace 'Orange' with 'Kiwi'--------------");
arrayFruits.splice(2,1, 'Kiwi')
console.log(arrayFruits);
console.log("----------------Element Starting from index 1 to 4--------------");
console.log(arrayFruits.splice(1,4));
console.log(`----------- Last 3 Element -----------`);
for (let index = arrayFruits.length-1; index >=4; index--) {
    const element = arrayFruits0[index];
    console.log(element);
}