// Задание
// (Переписать самостоятельно) Скрипт о запросе на угадывание сгенерированного числа так, чтобы человек мог отменить игру, либо угадывать, пока число не станет соответствовать

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
let userValue;
let generatedValue = Math.round(Math.random() * 100);
let compareChecking = true;
alert(generatedValue);

do {
    userValue = getValueFromUser();
    if (userValue === null) {
        alert('You closed the app');
        break;
    }
    if (generatedValue === userValue)   {
        compareChecking = false;
        console.log('IT IS MATCH');
    }
}
while (compareChecking);



