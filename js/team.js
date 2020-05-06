function MilitaryResource(type, health, distance, maxHealth = 100, maxDistance = 200) {
    this.type = type;
    this.health = health;
    this.maxHealth = maxHealth;
    this.distance = distance;
    this.maxDistance = maxDistance;
}


MilitaryResource.prototype.isReadyToMove = function (){
    return this.distance > 0;
};

MilitaryResource.prototype.isReadyToFight = function () {
    return this.health > 10;
};

MilitaryResource.prototype.restore = function () {
    this.health = this.maxHealth;
    this.distance = this.maxDistance;
};

MilitaryResource.prototype.clone = function () {
    return new MilitaryResource(this.type, this.health, this.distance);
};

function Squad(defaultResources) {
    this.squad = [];
    if (defaultResources) this.combineResources(defaultResources);
}

Squad.prototype.isReadyToMove = function() {
    return this.squad.every(item => {
        return item.isReadyToMove();
    })
};

Squad.prototype.isReadyToFight = function () {
    return this.squad.some(item => {
        return item.isReadyToFight();
    })
};

Squad.prototype.restore = function () {
    this.squad.forEach(item => {
        item.restore();
    });

    return this.squad;  // or should I return true as result of restore action
};

Squad.prototype.getReadyToMoveResources = function () {
    return this.squad.filter(item => {
        return item.isReadyToMove()
    });
};

Squad.prototype.combineResources = function (resources) {
    this.squad = [...this.squad, ...resources]
};

Squad.prototype.cloneResources = function (resources) {
    return resources.map(item => {
        return item.clone();
    })
};

let solder = new MilitaryResource('solder', 11, 15);
let solder2 = new MilitaryResource('solder2', 11, 1);


let warriors = new Squad([solder, solder2]);