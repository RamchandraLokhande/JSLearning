function swap(n1, n2) {
    console.log('Before Swap ==> n1 -', n1, 'n2 - ', n2);
    var temp = n1;
    n1 = n2;
    n2 = temp;
    console.log('After Swap ==> n1 - ', n1, 'n2 -',n2);  
}
    var sweety = "sweety";
    var cutie = "cutie";
    swap (sweety, cutie);
   console.log( '========================================');
   function numswap(n1, n2, n3) {
    console.log('Before Swap ==> n1 -', n1, 'n2 - ', n2, 'n3 - ', n3);
    var temp = n1,
    n1 = n2;
    n2 = n3;
    n3 = temp;
    console.log('After Swap ==> n1 - ', n1, 'n2 - ',n2, 'n3 - ', n3);  
}
    var num1 = '100';
    var num2 = '200';
    var num3 = '300';
    numswap (num1, num2, num3)
