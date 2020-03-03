function User(name, age, sex) {
    // {} <- this.
    this.name = name;
    this.age = age;
    this.sex = sex === undefined ? "female" : "male";
}


var usersArray = new Array(5).fill(1);
console.log(usersArray);
console.log(usersArray.length);
for (var i = 0; i < usersArray.length; i++) {
    console.log(usersArray[i]);
    usersArray[i] = new User("User " + i, 24 + i);


}

console.log(usersArray);


