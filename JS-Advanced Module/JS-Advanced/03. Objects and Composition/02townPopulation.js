function townPopulation(givenDataArr) {
    let registry = {};

    for (let i = 0; i < givenDataArr.length; i++) {
        let [name, population] = givenDataArr[i].split(" <-> ");
        population = Number(population);

        if (registry[name] === undefined) {
            registry[name] = 0;
        }

        registry[name] += population;
    }

    for (const townName in registry) {
        console.log(`${townName} : ${registry[townName]}`)
    }
}


townPopulation(['Sofia <-> 1200000', 'Montana <-> 20000', 'New York <-> 10000000', 'Washington <-> 2345000', 'Las Vegas <-> 1000000']);
/**
 Sofia : 1200000
Montana : 20000
New York : 10000000
Washington : 2345000
Las Vegas : 1000000
 */
console.log("------------");
townPopulation(['Istanbul <-> 100000', 'Honk Kong <-> 2100004', 'Jerusalem <-> 2352344', 'Mexico City <-> 23401925', 'Istanbul <-> 1000']);
/**
 Istanbul : 101000
Honk Kong : 2100004
Jerusalem : 2352344
Mexico City : 23401925
 */