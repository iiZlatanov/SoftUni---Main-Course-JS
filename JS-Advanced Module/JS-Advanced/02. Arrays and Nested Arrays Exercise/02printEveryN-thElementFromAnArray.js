'use strict';
function printNthElement(array, step){
    let result = [];
    for (let index = 0; index < array.length; index++) {
        if (index % step === 0) {
            result.push(array[index]);
        }
    }
    return result;
}

console.log(printNthElement(
['5',
'20',
'31',
'4',
'20'],
2))
//['5', '31', '20']

console.log(printNthElement(
['dsa',
'asd',
'test',
'tset'],
2))
//['dsa', 'test']

console.log(printNthElement(
['1',
'2',
'3',
'4',
'5'],
6))
//['1']
