"use strict";
function cookingByNumbers(num, ...operations) {
    let result = Number(num);

    for (const iterator of operations) {
        if (iterator === "chop") {
            result /= 2;
            console.log(result);
        } else if (iterator === "dice") {
            result = Math.sqrt(result);
            console.log(result);
        } else if (iterator === "spice") {
            result += 1;
            console.log(result);
        } else if (iterator === "bake") {
            result *= 3;
            console.log(result);
        } else if (iterator === "fillet") {
            result -= result * 0.2;
            console.log(result);
        }
    }
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
// 16
// 8
// 4
// 2
// 1

cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')
// 3
// 4
// 2
// 6
// 4.8
