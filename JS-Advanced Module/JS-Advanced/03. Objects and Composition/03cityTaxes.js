"use strict";

function cityTaxes(name, cityPopulation, cityTreasury) {
    let cityRecord = {
        name,
        population: cityPopulation,
        treasury: cityTreasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += this.population * this.taxRate
        },
        applyGrowth(percentage) {
            this.population += this.population * percentage / 100
        },
        applyRecession(percentage) {
            this.treasury -= this.treasury * percentage / 100
        }
    }
    return cityRecord
}

const city = cityTaxes('Tortuga', 7000, 15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(10);
console.log(city.population);


/**
85000
7350
 */
