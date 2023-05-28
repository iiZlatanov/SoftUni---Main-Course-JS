function sumFirstLast(array) {
    const x = Number(array.shift());
    const y = Number(array.pop());
    const result = x + y;
    console.log(result);
}

sumFirstLast(['20', '30', '40'])
//60
sumFirstLast(['5', '10'])
//15
