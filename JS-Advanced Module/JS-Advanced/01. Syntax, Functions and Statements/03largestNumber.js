function largestNumber(num1, num2, num3) {
    let largest = num3;
    if(num2 > num3 && num2 > num1) {
        largest = num2;
    } else if (num1 > num3 && num1 > num2) {
        largest = num1;
    }
    console.log(`The largest number is ${largest}.`);
}