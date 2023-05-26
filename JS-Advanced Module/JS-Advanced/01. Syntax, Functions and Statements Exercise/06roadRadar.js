"use strict";
function roadRadar(speed, areaData) {
    let limit = 0;
    let status = "";

    switch (areaData) {
        case "motorway":
            limit = 130;
            break;
        case "residential":
            limit = 20;
            break;
        case "interstate":
            limit = 90;
            break;
        case "city":
            limit = 50;
            break;
    }

    if (speed > limit + 40) {
        status = "reckless driving";
    } else if (speed > limit + 20) {
        status = "excessive speeding";
    } else {
        status = "speeding";
    }

    let difference = speed - limit;

    if (speed <= limit) {
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
    } else {
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`);
    }
}

roadRadar(40, 'city');
// Driving 40 km/h in a 50 zone

roadRadar(21, 'residential');
// The speed is 1 km/h faster than the allowed speed of 20 -
// speeding

roadRadar(120, 'interstate');
// The speed is 30 km/h faster than the allowed speed of 90 -
// excessive speeding

roadRadar(200, 'motorway' );
// The speed is 70 km/h faster than the allowed speed of 130 -
// reckless driving
