let Raccoon = (function (__super) {
    let id = 1;
    function Raccoon(color, gender){
        Mammal.call(this, color, gender);
        this.id = 'raccoon_' + id++;
    }

    Raccoon.prototype = Object.create(__super.prototype);
    Raccoon.prototype.constructor = Raccoon;

    Raccoon.prototype.canSteal = function() {
        console.log('Available to steal');
    };



    return Raccoon;
})(Mammal);