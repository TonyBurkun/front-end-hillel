// Реализовать наследования следующей цепочки:
//     Животное -> Млекопитающее -> Енот
// Между этими прослойками можно создать еще несколько своих =)
// Прототип животного должен иметь 2 метода передвижения (пр. прыжок, бег) и свойство пол
// Прототип млекопитающего должен иметь метод, который, в зависимости от пола дает молоко.
// Прототип енота должен уметь воровать =)


const GENDER = {
    male: 'male',
    female: 'female'

};

function Animal(color, gender) {
    this.gender = gender || GENDER.male;
    this.color = color || null;
}

Animal.prototype.jumping = function () {
    console.log('Jumping')
};

Animal.prototype.running = function () {
    console.log('Running');
};



let crocodile = new Animal('green', GENDER.female);

console.log(crocodile);

function Mammal(color, gender) {
    Animal.call(this, color, gender);
}

Mammal.prototype = Object.create(Animal.prototype);
Mammal.prototype.constructor = Animal;


Mammal.prototype.givesMilk = function () {
    return this.gender === GENDER.female;
};

let cow = new Mammal('black', GENDER.female);
let bull = new Mammal();

console.log(cow);
console.log(bull);


function Raccoon(color, gender){
    Mammal.call(this, color, gender)
}

Raccoon.prototype = Object.create(Mammal.prototype);
Raccoon.prototype.constructor = Mammal;

Raccoon.prototype.canSteal = function() {
    console.log('Available to steal');
};

let peterRaccoon = new Raccoon();




