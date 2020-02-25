// Дополнительно*
// Пересоздавать массив кол-во раз, указанное пользователем.
//Если хоть один раз средняя линия будет совпадать - сообщить о победе в рулетке.



function generateRouletteArr (){
    let wrapperArr = [];

    for (let i = 0; i < 3; i++) {
        let innerArr = [];
        for (let item = 0; item < 3; item++){
            innerArr.push(Math.floor( Math.random() * 5));
        }

        wrapperArr.push(innerArr)
    }

    return wrapperArr;
}

function isAllNumbersEqualInLine(rouletteArr){
    let lineIsEqual = true;

    for (let i = 1; i < rouletteArr.length; i++) {
        if ( rouletteArr[0][1] !== rouletteArr[i][1]) {
            lineIsEqual = false;
            break;
        }
    }

    return lineIsEqual;
}

function getAttemptNumberFromUser(){
    let valueFromUser = prompt('Please enter amount of attempts for using casino: ');

    if (valueFromUser === null) {
        return valueFromUser;
    }
    valueFromUser = +valueFromUser;

    if (Number.isNaN(valueFromUser)) {
        console.log('Please, enter the number instead of string.');
        valueFromUser = getAttemptNumberFromUser();
    }

    return valueFromUser;
}


let userAttempts = getAttemptNumberFromUser();
if (userAttempts === null) {
    console.log('You close the App.');
} else {
    for (let i = 0; i < userAttempts; i++) {
        const rouletteArr = generateRouletteArr();
        let result = isAllNumbersEqualInLine(rouletteArr);

        if (result) {
            console.log('You WIN');
            break;
        } else {
            console.log('You LOST');
        }
    }
}





