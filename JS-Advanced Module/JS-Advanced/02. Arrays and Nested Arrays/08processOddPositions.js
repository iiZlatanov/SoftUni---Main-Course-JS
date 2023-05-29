"use strict";
function processOddPositions(arr) {
    // const result = arr.filter((x, i) => i % 2 === 1).map(x => x * 2).reverse();
    // return result.join(" ");
    return arr
        .filter((x, i) => i % 2 === 1)
        .map(x => x * 2)
        .reverse()
        .join(" ");
}

console.log(processOddPositions([10, 15, 20, 25]));
//50 30
console.log(processOddPositions([3, 0, 10, 4, 7, 3]));
//6 8 0
