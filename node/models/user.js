let uniqID = require('../node_modules/uniqid');

let User = (function(){
    function User(name, surname){
        this.userID = uniqID('user-');
        this.name = name;
        this.surname = surname;
    }

    return User;
})();

module.exports = {
    user: User
};