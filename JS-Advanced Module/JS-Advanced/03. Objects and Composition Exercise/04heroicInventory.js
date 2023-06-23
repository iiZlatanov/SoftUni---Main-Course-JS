function heroicInventory(arr) {
    let result = [];
    for (const string of arr) {
        let hero = {};
        const data = string.split(" / ");

        hero["name"] = data[0];
        hero["level"] = Number(data[1]);
        const items = data[2];
        hero["items"] = items ? data[2].split(", ") : [];

        result.push(hero);
    }
    return JSON.stringify(result);
}

heroicInventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']);
/**
[{"name":"Isacc","level":25,"items":["Apple","GravityGun"
]},{"name":"Derek","level":12,"items":["BarrelVest","Dest
ructionSword"]},{"name":"Hes","level":1,"items":["Desola
tor","Sentinel","Antara"]}]
 */

console.log("-----------------")

heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade'])
/**
[{"name":"Jake","level":1000,"items":["Gauss","HolidayGr
enade"]}]
 */