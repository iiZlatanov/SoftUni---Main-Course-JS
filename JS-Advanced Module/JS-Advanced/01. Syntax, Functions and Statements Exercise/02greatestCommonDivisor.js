"use strict";
function gcd(a, b) {
    while(b) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    
    console.log(a);
}

gcd(15, 5);
// 5
gcd(2154, 458 );
// 2
