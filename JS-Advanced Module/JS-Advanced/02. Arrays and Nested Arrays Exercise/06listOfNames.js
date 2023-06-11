function sortNames(namesList) {
    const resultList = namesList.sort((nameA, nameB) => {
        return nameA.localeCompare(nameB);
    });
    for (let index = 0; index < resultList.length; index++) {
        console.log(`${index + 1}.${resultList[index]}`);
    }
}

sortNames(["John", "Bob", "Christina", "Ema"]);
/**
1.Bob
2.Christina
3.Ema
4.John
 */
