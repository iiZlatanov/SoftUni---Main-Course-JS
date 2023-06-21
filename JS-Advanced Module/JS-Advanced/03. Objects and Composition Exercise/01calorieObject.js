"use strict";
function calorieObject(stringsDataArr) {
    let resultObj = {};
    for (let i = 0; i < stringsDataArr.length; i += 2) {
        resultObj[stringsDataArr[i]] = Number(stringsDataArr[i + 1]);
    }
    console.log(resultObj);
}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])