"use strict";
function carFactory(carData) {
    let car = {};

    car.model = carData.model;

    if (carData.power <= 90) {
        car.engine = { power: 90, volume: 1800 };
    } else if (carData.power <= 120) {
        car.engine = { power: 120, volume: 2400 };
    } else if (carData.power <= 200) {
        car.engine = { power: 200, volume: 3500 };
    }

    let carriageAndColor = {type: carData.carriage, color: carData.color};
    car.carriage = carriageAndColor;

    let wheelSize = carData.wheelsize;
    if (wheelSize % 2 == 0) {
        wheelSize -= 1;
    }
    car.wheels = [wheelSize, wheelSize, wheelSize, wheelSize];

    console.log(car.engine)
    return car;
}


console.log(carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));
/**
 { model: 'VW Golf II',
  engine: { power: 90,
            volume: 1800 },
  carriage: { type: 'hatchback',
              color: 'blue' },
  wheels: [13, 13, 13, 13] }
 */

console.log(carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}));
/**
 { model: 'Opel Vectra',
  engine: { power: 120,
            volume: 2400 },
  carriage: { type: 'coupe',
              color: 'grey' },
  wheels: [17, 17, 17, 17] }
 */