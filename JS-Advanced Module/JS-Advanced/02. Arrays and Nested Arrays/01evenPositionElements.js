"use strict";
function evenPositionElement(data) {
    let result = [];
    for (let index = 0; index < data.length; index+= 2) {
        const element = data[index];
        result.push(element);
    }
    console.log(...result);
}

evenPositionElement(['20', '30', '40', '50', '60']);
//20 40 60

evenPositionElement(['5', '10']);
//5
