function townsToJSON(dataArr) {
    let resultArr = [];
    dataArr.shift();
    for (const string of dataArr) {
        const splitString = string.split(" | ");
        const town = splitString[0].slice(2);
        const latitude = Number(splitString[1]).toFixed(2);
        const longitude = Number(splitString[2].slice(0, -2)).toFixed(2);

        const currentTown = {
            "Town": town,
            "Latitude": Number(latitude),
            "Longitude": Number(longitude)
        }

        resultArr.push(currentTown)
    }
    console.log(JSON.stringify(resultArr))
}

townsToJSON([
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
);
/**
[{"Town":"Sofia",
 "Latitude":42.7,
 "Longitude":23.32
},
{"Town":"Beijing",
"Latitude":39.91,
"Longitude":116.36
}]
 */

console.log("--------------")

townsToJSON([
    '| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']
);
/**
[{"Town":"Veliko Turnovo",
 "Latitude":43.08,
 "Longitude":25.62
},
{"Town":"Monatevideo",
"Latitude":34.5,
"Longitude":56.11
}]
 */