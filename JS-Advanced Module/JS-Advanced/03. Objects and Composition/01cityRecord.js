function createCityRecord(name, cityPopulation, cityTreasury) {
    let cityRecord = {
        name,
        population: cityPopulation,
        treasury: cityTreasury
    }
    return cityRecord
}

console.log(createCityRecord('Tortuga', 7000, 15000));
/**
 {
 name: 'Tortuga',
 population: 7000,
 treasury: 15000
}
 */

console.log(createCityRecord('Santo Domingo', 12000, 23500));
/**
 {
 name: 'Santo Domingo',
 population: 12000,
 treasury: 23500
}
 */
