let Animal = (function(){

    let id = 1;
    function Animal(color, gender) {
        this.gender = gender || GENDER.male;
        this.color = color || null;
        this.id = 'animal_' + id++;
    }

    Animal.prototype.jumping = function () {
        console.log('Jumping')
    };

    Animal.prototype.running = function () {
        console.log('Running');
    };

    return Animal;

})();