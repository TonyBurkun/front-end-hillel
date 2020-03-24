let Mammal = (function(__super){
    let id = 1;
    function Mammal(color, gender) {
        __super.call(this, color, gender);
        this.id = 'mammal_' + id++;
    }

    Mammal.prototype = Object.create(__super.prototype);
    Mammal.prototype.constructor = Mammal;


    Mammal.prototype.givesMilk = function () {
        return this.gender === GENDER.female;
    };

    return Mammal;
})(Animal);