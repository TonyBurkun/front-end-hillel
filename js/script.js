// 1. Разделить задачу с угадыванием числа на функции.
// Первая функция - циклический запуск запроса и проверка на завершенность.
// Вторая функция - запрос и проверка на соответствие со сгенерированным числом



function getValueFromUser() {
    let valueFromUser = prompt('Please guess the number: ');

    if (valueFromUser === null) {
        return valueFromUser;
    }

    valueFromUser = +valueFromUser;
    if (Number.isNaN(valueFromUser)) {
        alert('Please enter the number instead of string');
        valueFromUser =  getValueFromUser()
    }
    return valueFromUser;


}


// запрос и проверка на соответствие со сгенерированным числом
function requestValueAndCompareWithRandomValue(randomValue) {
    let generatedValue = randomValue || Math.round(Math.random() * 100);
    alert(generatedValue);
    let userValue = getValueFromUser();

    if (userValue === null) {
        return true;
    } else {
        userValue = +userValue;
    }

    if (generatedValue === userValue) {
        console.log('IT IS MATCH');
        return true;
    }

    return false;

}


//циклический запуск запроса и проверка на завершенность
function runGuessValueApp(){
    let needToStop = false;

    do {
        //we can generate the random value here and then pass it into the function bellow. in this case, user value will be compared with the permanent value
        let compareResult = requestValueAndCompareWithRandomValue();
        if (compareResult) {
            alert('You closed the app');
            break;
        } else {
            needToStop = compareResult;
        }
    }
    while (!needToStop)

}


runGuessValueApp();



