"use strict";
function constructionCrew(input) {
    let obj = {...input};
    
    if (obj.dizziness) {
        obj.dizziness = false;
        let requiredWater = 0.1 * obj.weight * obj.experience;
        obj.levelOfHydrated += requiredWater;
    }
    return obj;
}

console.log(constructionCrew(
    { weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true }));
/**
 { weight: 80, experience: 1, levelOfHydrated: 8, dizziness: false }
 */


console.log(constructionCrew({ 
    weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true }));
/**
 { weight: 120, experience: 20, levelOfHydrated: 440, dizziness: false }
 */

console.log(constructionCrew(
    { weight: 95,
        experience: 3,
        levelOfHydrated: 0,
        dizziness: false }));
/**
 { weight: 95, experience: 3, levelOfHydrated: 0, dizziness: false }
 */
