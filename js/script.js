function Pers(health, level, race, weapon){
    this.health = health;
    this.level = level;
    this.race = race;
    this.weapon = weapon;
}

function randomValue(value){
    return Math.floor(Math.random()*value);

}

let race = {
    orc: 'Orc',
    elf: 'Elf',
    dwarf: 'Dwarf'
};



let weapons = {
    axe: 'Axe',
    sword: 'Sword',
    bow: 'Bow'
};

//
// randomValue(Object.keys(race).length);
// console.log(Object.keys(race)[1]);


let persArr = [];
console.log(race, randomValue(2));
for (let i = 0; i < 3; i++) {
    persArr.push(new Pers(
        randomValue(100),
        randomValue(10),
        Object.values(race)[randomValue(Object.keys(race).length)],
        Object.values(weapons)[randomValue(Object.keys(weapons).length)]
        )
    )

}

console.log(persArr);

persArr.forEach(item => {
    item.health > 50 ? console.log('ready') : console.log('not ready')

});

let raceArr = persArr.map(item => {
    return item.race;
});

console.log(raceArr);

let threeLevelArr = persArr.filter(item => {
    return item.level > 3
});

console.log(threeLevelArr);




let firsPersWithLevel = persArr.find(item => {
    return item.level > 5;
});

console.log(firsPersWithLevel);

let findIndexPers = persArr.findIndex(item => {
    return item.level > 5
});

console.log(findIndexPers);



var attackTypes = {
    mellee: ['sword', 'axe'],
    range: ['bow']
};


let melleAttack = persArr.filter(item => {

})




function increment(number) {
    return function(){
        return  ++number
    }
}


var inc = increment(5);

console.log(inc(), inc(), inc());




