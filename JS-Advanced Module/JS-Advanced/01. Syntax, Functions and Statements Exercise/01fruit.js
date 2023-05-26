"use strict";
function buy_fruit(fruit, grams, price_per_kilo) {
    const price = price_per_kilo * grams / 1000;
    console.log(`I need $${(price).toFixed(2)} to buy ${(grams / 1000).toFixed(2)} kilograms ${fruit}.`);
}

buy_fruit('orange', 2500, 1.80)
// I need $4.50 to buy 2.50 kilograms orange.
buy_fruit('apple', 1563, 2.35)
// I need $3.67 to buy 1.56 kilograms apple.