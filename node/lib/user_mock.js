
let User = require('../models/user').user;

function createUserMocks(amount){
    let usersArr = [];

    for (let i = 0; i < amount; i++){
        usersArr.push(new User(`name_${i+1}`, `surname_${i+1}`));
    }

    return usersArr;
}

module.exports = {
    createUserMocks: createUserMocks
};
