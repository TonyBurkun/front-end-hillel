// Задание:
// Запросить у пользователя значение, кратное которому будут выводиться числа - вывести их в консоль.
// (Усложняем) Кроме кратного запросить количество чисел, которые следует вывести


const REQUEST_NUMBER_FOR_MULTIPLES_TITLE = 'Please enter the number within the range from 1 to 100 : ';
const REQUEST_AMOUNT_OF_MULTIPLES_TITLE = 'Please enter the value how many multiples should be shown : ';

function closeApp(){
    alert('You closed the app');
}


function getValueFromUser(text, start, end) {
    let valueFromUser = prompt(text);

    if (valueFromUser === null) {
        return valueFromUser;
    }

    valueFromUser = +valueFromUser;
    if (Number.isNaN(valueFromUser)) {
        alert('Please enter the number instead of string');
        valueFromUser =  getValueFromUser(text, start, end)
    }

    if (!(valueFromUser >= start && valueFromUser <= end)) {
        alert(`Please enter the number within the range from ${start} to ${end}`);
        valueFromUser =  getValueFromUser(text, start, end)
    }
    return valueFromUser;


}



let userValue, amountOfMultipleValues;


userValue = getValueFromUser(REQUEST_NUMBER_FOR_MULTIPLES_TITLE, 1, 100);

if (userValue !== null) {
    amountOfMultipleValues = getValueFromUser(REQUEST_AMOUNT_OF_MULTIPLES_TITLE, 1, 100);
} else {
    closeApp();
}
let count = 1;
if (amountOfMultipleValues !== null) {
    for (let i = 1; i <= 100; i++){

        if (!(i % userValue) && count <= amountOfMultipleValues) {
            console.log(i);

            count++;
        }
    }
} else {
    closeApp();
}






