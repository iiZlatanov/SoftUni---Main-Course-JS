"use strict";

function timeToWalk(steps, lenOfEachStep, studentSpeed) {
    const stepsInMeters = steps * lenOfEachStep;
    const speedMetersSec = studentSpeed / 3.6;
    const restTime = Math.floor(stepsInMeters / 500) * 60;
    const totalTime = (stepsInMeters / speedMetersSec) + restTime;

    const hours = Math.floor(totalTime / 3600).toFixed(0).padStart(2, "0");
    const minutes = Math.floor(totalTime / 60).toFixed(0).padStart(2, "0");
    const seconds = (totalTime % 60).toFixed(0).padStart(2, "0");

    console.log(`${hours}:${minutes}:${seconds}`);
}

timeToWalk(4000, 0.60, 5)
// 00:32:48
timeToWalk(2564, 0.70, 5.5)
// 00:22:35
