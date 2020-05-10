let unit = new Unit('Warrior', 300, 300);
let unit2 = new Unit('Warrior', 300, 300);
let unit3 = new Unit('Peasant', 100, 150);

console.log(unit);

let wrapper = document.getElementById('wrapper');
unit.render(wrapper);
unit2.render(wrapper);
unit3.render(wrapper);









