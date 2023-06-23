function lowestPricesInCity(dataArr) {
    let result = {};
    for (const string of dataArr) {
        let [town, product, price] = string.split(" | ");
        price = Number(price);
        if (result[product]) {
            if (result[product][0] > price) {
                result[product] = [price, town];
            }
        } else {
            result[product] = [price, town];
        }
    }

    for (const [product, priceAndCity] of Object.entries(result)) {
        console.log(`${product} -> ${priceAndCity[0]} (${priceAndCity[1]})`);
    }
}

lowestPricesInCity(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']);
/**
Sample Product -> 1000 (Sample Town)
Orange -> 2 (Sample Town)
Peach -> 1 (Sample Town)
Burger -> 10 (New York)
 */

lowestPricesInCity(['Sofia City | Audi | 100000',
'Sofia City | BMW | 100000',
'Sofia City | Mitsubishi | 10000',
'Sofia City | Mercedes | 10000',
'Sofia City | NoOffenseToCarLovers | 0',
'Mexico City | Audi | 1000',
'Mexico City | BMW | 99999',
'Mexico City | Mitsubishi | 10000',
'New York City | Mitsubishi | 1000',
'Washington City | Mercedes | 1000'])
/**
Audi -> 1000 (Mexico City)
BMW -> 99999 (Mexico City)
Mitsubishi -> 1000 (New York City)
Mercedes -> 1000 (Washington City)
NoOffenseToCarLovers -> 0 (Sofia City)
 */