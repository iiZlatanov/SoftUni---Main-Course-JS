"use strict";
function sameNumbers(x) {
    let arr = x.toString().split("");
    let sum = Number(arr[0]);
    let isSame = true;

    for (let index = 1; index < arr.length; index++) {
        const current_number = arr[index];
        sum += Number(current_number);

        if(arr[0] !== current_number) {
            isSame = false;
        }
    }
    
    console.log(isSame);
    console.log(sum);
}

sameNumbers(2222222);
// true 14
sameNumbers(1234);
// false 10