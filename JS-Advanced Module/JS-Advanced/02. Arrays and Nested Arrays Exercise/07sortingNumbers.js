function sortingNumbers(numsList) {
    let sortedList = numsList.sort((numA, numB) => numA - numB);
    let resultList = [];
    while (sortedList.length !== 0) {
        let smallest = sortedList.shift();
        resultList.push(smallest);
        if (sortedList.length !== 0) {
            let biggest = sortedList.pop();
            resultList.push(biggest);
        }
    }
    return resultList;
}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
// [-3, 65, 1, 63, 3, 56, 18, 52, 31, 48]
