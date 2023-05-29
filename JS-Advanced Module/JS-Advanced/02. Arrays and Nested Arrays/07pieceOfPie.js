"use strict";
function pieceOfPie(pies, pieFrom, pieTo) {
    let firstPieIndex = pies.indexOf(pieFrom);
    let secondPieIndex = pies.indexOf(pieTo);
    return pies.slice(firstPieIndex, secondPieIndex + 1);
}

console.log(pieceOfPie(['Pumpkin Pie', 'Key Lime Pie', 'Cherry Pie',
'Lemon Meringue Pie', 'Sugar Cream Pie'], 'Key Lime Pie',
'Lemon Meringue Pie')
);
//['Key Lime Pie', 'Cherry Pie', 'Lemon Meringue Pie']

console.log(pieceOfPie(['Apple Crisp', 'Mississippi Mud Pie', 'Pot Pie',
'Steak and Cheese Pie', 'Butter Chicken Pie', 'Smoked Fish Pie'], 'Pot Pie',
'Smoked Fish Pie')
);
//['Pot Pie', 'Steak and Cheese Pie', 'Butter Chicken Pie', 'Smoked Fish Pie']
