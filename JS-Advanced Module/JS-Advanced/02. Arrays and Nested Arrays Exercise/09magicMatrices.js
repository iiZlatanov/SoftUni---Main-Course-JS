function checkIfArrayIsASquare(arrData) {
    let result = true;
    let totalRowSum = arrData[0].reduce((acc, curr) => acc + curr, 0);

    for (let index = 1; index < arrData.length; index++) {
        let currentRowSum = arrData[index].reduce((acc, curr) => acc + curr, 0);
        if (currentRowSum != totalRowSum) {
            result = false;
        }
        totalRowSum = currentRowSum;
    }

    console.log(result);
}

checkIfArrayIsASquare([[4, 5, 6], [6, 5, 4], [5, 5, 5]]);
// true
console.log("----------")
checkIfArrayIsASquare([[11, 32, 45], [21, 0, 1], [21, 1, 1]]);
// false
console.log("----------")
checkIfArrayIsASquare([[1, 0, 0], [0, 0, 1], [0, 1, 0]]);
// true
