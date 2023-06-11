function rotateArray(arr, numberOfRotations) {
    for (let index = 0; index < numberOfRotations; index++) {
        let lastItem = arr.pop();
        arr.unshift(lastItem);
    }
    console.log(arr.join(" "));
}

rotateArray(['1', '2', '3', '4'], 2);
// 3 4 1 2

rotateArray(['Banana', 'Orange', 'Coconut', 'Apple'], 15);
// Orange Coconut Apple Banana