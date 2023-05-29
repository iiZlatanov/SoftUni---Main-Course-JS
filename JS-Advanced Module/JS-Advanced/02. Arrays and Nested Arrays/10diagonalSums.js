"use strict";
function diagonalSums(matrix) {
    let mainDiagonalSum = 0;
    let secondaryDiagonalSum = 0;
    const mirroredMatrix = matrix.slice().reverse();
    for (let index = 0; index < matrix.length; index++) {
        const element = matrix[index][index];
        const elementMirroredMatrix = mirroredMatrix[index][index];
        secondaryDiagonalSum += elementMirroredMatrix;
        mainDiagonalSum += element;
    }
    console.log(`${mainDiagonalSum} ${secondaryDiagonalSum}`)
}

diagonalSums([
    [20, 40],
    [10, 60]]);
//80 50

diagonalSums([
    [3, 5, 17],
    [-1, 7, 14], 
    [1, -8, 89]]);
//99 25