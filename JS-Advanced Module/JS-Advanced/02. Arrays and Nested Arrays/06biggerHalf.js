function biggerHalf(array) {
    array.sort((a, b) => a - b);
    const cutIndex = Math.floor(array.length / 2);
    const result = array.slice(cutIndex);
    return result
}

console.log(biggerHalf([4, 7, 2, 5]));
// [5, 7]
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));
// [7, 14, 19, 19]
