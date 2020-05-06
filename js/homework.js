let unit = new MilitaryResource('Warrior', 300, 150);
let unit2 = new MilitaryResource('Peasant', 300, 150);

let wrapper = document.getElementById('wrapper');

function createUnitCard(unit, parent){
    let type = createElement('h3', {classes: ['title']});
    type.innerHTML = unit.type;

    let healthValue = createElement('span', {classes: ['bar-value']});
    healthValue.innerHTML = unit.maxHealth;

    let staminaValue = createElement('span', {classes: ['bar-value']});
    staminaValue.innerHTML = unit.maxDistance;

    let health = createElement('div', {classes: ['bar', 'health']}, [healthValue]);
    let stamina = createElement('div', {classes: ['bar', 'stamina']}, [staminaValue]);
    let avatar = createElement('img', {classes: ['avatar']});

    let card = createElement('div', {classes: ['card']}, [type, health, stamina, avatar]);

    parent.append(card);
}

createUnitCard(unit, wrapper);
createUnitCard(unit, wrapper);
createUnitCard(unit, wrapper);
createUnitCard(unit2, wrapper);
createUnitCard(unit2, wrapper);









