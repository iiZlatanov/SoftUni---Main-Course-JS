"use strict";
function circleArea(number) {
    let data = typeof(number)
    console.log(data)
    if(data instanceof Number) {
        let result = Math.pow(number, 2) * Math.PI;
        console.log(result.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${data}.`);
    }
}

circleArea(5);
circleArea('name');