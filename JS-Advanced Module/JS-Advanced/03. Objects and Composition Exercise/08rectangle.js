function rectangle(widthData, heightData, colorData) {
    const rectangle = {
        width: Number(widthData),
        height: Number(heightData),
        color: `${colorData.charAt(0).toUpperCase()}${colorData.slice(1)}`,
        calcArea: function () {
            return this.width * this.height
        }
    };
    return rectangle;
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
// 4
// 5
// Red
// 20