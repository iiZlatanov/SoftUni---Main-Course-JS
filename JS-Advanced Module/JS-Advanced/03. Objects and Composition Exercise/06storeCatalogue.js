"use strict";
function storeCatalogues(dataArr) {
    const sortedInput = dataArr.sort((a, b) => a.localeCompare(b));
    let resultObj = {};

    for (const pair of sortedInput) {
        let firstLetter = pair[0]
        const modifiedString = pair.split(" : ").join(": ")
        if (resultObj[firstLetter]) {
            resultObj[firstLetter].push(modifiedString);
        } else {
            resultObj[firstLetter] = [];
            resultObj[firstLetter].push(modifiedString);
        }
    }

    for (const [key, value] of Object.entries(resultObj)) {
        console.log(key)
        for (const element of value) {
            console.log(` ${element}`)
        }
    }
}

storeCatalogues(
    ['Appricot : 20.4', 'Fridge : 1500',
        'TV : 1499',
        'Deodorant : 10',
        'Boiler : 300',
        'Apple : 1.25',
        'Anti-Bug Spray : 15',
        'T-Shirt : 10']
);
/**
A
 Anti-Bug Spray: 15
 Apple: 1.25
 Appricot: 20.4
B
 Boiler: 300
D
 Deodorant: 10
F
 Fridge: 1500
T
 T-Shirt: 10

 */