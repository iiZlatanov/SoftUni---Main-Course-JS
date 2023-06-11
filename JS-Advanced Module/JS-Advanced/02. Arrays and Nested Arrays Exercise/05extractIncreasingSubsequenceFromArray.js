function increasingSubset(givenArr) {
    let currentNumber = Number.MIN_SAFE_INTEGER;
    let result = [];

    for (const iterator of givenArr) {
        if (iterator >= currentNumber) {
            result.push(iterator);
            currentNumber = iterator;
        }
    }

    return result;
}

console.log(increasingSubset([1, 2, 3, 4]));
//[1, 2, 3, 4]

console.log(increasingSubset([20, 3, 2, 15, 6, 1]));
//[20]
