function Human() {
    this.legs = true;
}

function Programmer(branch, defaultSkills) {
    Human.call(this);
    this.defaultSkills = ["Git"].concat(defaultSkills);
    this.branch = branch;
}

Programmer.prototype = Object.create(Human.prototype);
Programmer.prototype.constructor = Programmer;

Programmer.prototype.drinkCoffee = function() {
    console.log("[Drinking sound]", this.language);
};

Programmer.prototype.procrastination = function() {
    console.log("No, YOU!");
};

function JSProgrammer(branch) {
    Programmer.call(this, branch, ["JavaScript"]);
    // this.defaultSkills = ["Git"];
    // this.branch = branch;
    this.language = "JavaScript";
}

JSProgrammer.prototype = Object.create(Programmer.prototype);
JSProgrammer.prototype.constructor = JSProgrammer;

JavaProgrammer.prototype = Object.create(Programmer.prototype);
JavaProgrammer.prototype.constructor = JavaProgrammer;

JSProgrammer.prototype.drinkSmoothie = function() {
    console.log("[Drinking...]");
};

function JavaProgrammer(branch) {
    Programmer.call(this, branch, ["Java"]);
    this.language = "Java";
}

var programmers = [new JSProgrammer("ML"), new JavaProgrammer()];

programmers[0].drinkSmoothie();
// programmers[1].drinkSmoothie();

console.log(programmers[0].create, Object.create);
