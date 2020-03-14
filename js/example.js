function Human() {

}

function Programmer(branch){
    this.defaultSkills = ['Git'];
    this.branch = branch;
}



Programmer.prototype.drinkCoffee = function() {
    console.log('[Drinking sound]');
};

Programmer.prototype.procrastination = function(){
    console.log('No YOU!');
};


// JSProgrammer.prototype = new Programmer();
JSProgrammer.prototype = Object.create(Programmer.prototype);

function JSProgrammer(){
    this.language = 'JavaScript';
    this.defaultSkills = [];
}


function JavaProgrammer(){
    this.language = 'Java';
    this.defaultSkills = [];
}


var programmers = [new JSProgrammer(), new JavaProgrammer()];

console.log(programmers);

programmers[0].drinkCoffee();