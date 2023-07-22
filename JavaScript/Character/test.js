let abilities = [{characterId : 1 , damage : 100}, {characterId : 1 , damage : 122},{characterId : 1 , damage : 123},
                 {characterId : 2 , damage : 278}, {characterId : 2 , damage : 500},{characterId : 2 , damage :314},
                 {characterId : 3 , damage : 1200}, {characterId : 3 , damage : 260},{characterId : 3 , damage : 234},
                ];
let characters = [{id : 1, name : "Alfa"}, {id : 2, name : "Beta"}, {id : 3, name : "Gamma"}];

console.log("expected output : Gamma has the max Damage ability with 1200");
/////////////////////////////////////////////////////////////////////////////
let maxDamage = 0;
for (let i = 0; i <= abilities.length-1; i++ ){
    let damage = abilities[i].damage;
    maxDamage = damage > maxDamage ? damage : maxDamage;
    }

let output = maxDamage;
console.log("Output: " + output);