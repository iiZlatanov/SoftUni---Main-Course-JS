"use strict";
function equalNeighbors(matrix) {
    let occurances = 0;
    for (let i = 0; i < matrix.length; i++) {
        let innerArray = matrix[i]
        for (let j = 0; j < innerArray.length; j++) {
            if (i - 1 < 0) {
                continue;
            }
            if (i - 1 >= 0 && matrix[i][j] === matrix[i - 1][j]) {
                occurances++;
            }
            if (j - 1 >= 0 && matrix[i][j] === matrix[i][j - 1]) {
                occurances++;
            }
        }
    }
    return occurances
}


console.log(equalNeighbors([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']]));
//1

console.log(equalNeighbors([
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']]
))
//2


