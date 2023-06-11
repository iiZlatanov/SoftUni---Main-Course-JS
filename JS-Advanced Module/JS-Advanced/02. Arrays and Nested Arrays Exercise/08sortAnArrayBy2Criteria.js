function sortBy2Criteria(arrData) {
    let result = arrData.sort((a, b) => {
        let sortByLength = a.length - b.length;
        let sortAlphabetically = a.localeCompare(b);
        return sortByLength || sortAlphabetically;
    });

    console.log(result.join("\n"));
}

sortBy2Criteria(['alpha', 'beta', 'gamma']);
/**
beta
alpha
gamma
 */

console.log("------------")

sortBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
/**
Jack
Isacc
George
Theodor
Harrison
 */
