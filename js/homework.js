// Реализовать наследования следующей цепочки:
//     Животное -> Млекопитающее -> Енот
// Между этими прослойками можно создать еще несколько своих =)
// Прототип животного должен иметь 2 метода передвижения (пр. прыжок, бег) и свойство пол
// Прототип млекопитающего должен иметь метод, который, в зависимости от пола дает молоко.
// Прототип енота должен уметь воровать =)


function Animal(gender, color) {
    this.gender = gender || 'male';
    this.color = color || null;
}

Animal.prototype.jumping = function () {
    console.log('Jumping')
};

Animal.prototype.running = function () {
   console.log('Running');
};

let crocodile = new Animal(null, 'green');


Mammal.prototype = Object.create(Animal.prototype);
Mammal.prototype.constructor = Animal;


function Mammal(gender) {
    Animal.call(this);
    this.gender = gender || this.gender
}

Mammal.prototype.givesMilk = function () {
    if (this.gender === 'female') {
        return true
    }

    if (this.gender === 'male') {
        return false
    }
};

let cow = new Mammal('female');
let bull = new Mammal('male');


Raccoon.prototype = Object.create(Mammal.prototype);
Raccoon.prototype.constructor = Mammal;

function Raccoon(){
    Mammal.call(this)
}

Raccoon.prototype.canSteal = function() {
    console.log('Available to steal');
};

let peterRaccoon = new Raccoon();



