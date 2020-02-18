// Задание:
// Запросить у пользователя значение, кратное которому будут выводиться числа - вывести их в консоль.

function getValueFromUser() {
    let valueFromUser = prompt('Please enter the number within the range from 1 to 100. The system shows all multiples numbers : ');

    if (valueFromUser === null) {
        return valueFromUser;
    }

    valueFromUser = +valueFromUser;
    if (Number.isNaN(valueFromUser)) {
        alert('Please enter the number instead of string');
        valueFromUser =  getValueFromUser()
    }

    if (!(valueFromUser >= 1 && valueFromUser <= 100)) {
        alert('Please enter the number within the range from 1 to 100');
        valueFromUser =  getValueFromUser()
    }
    return valueFromUser;


}
let userValue = getValueFromUser();

// FOR LOOP
for (let i = 1; i <= 100; i++){
    if (userValue === null) {
        alert('You closed the app');
        break;
    }
    if (!(i % userValue)) {
        console.log(i);
    }

}


// DO_WHILE LOOP
// let i = 1;
// do {
//
//     if (userValue === null) {
//         alert('You closed the app');
//         break;
//     }
//     if (!(i % userValue)) {
//         console.log(i);
//     }
//     i++;
//
// }
// while (i <= 100);



// WHILE_DO LOOP
// let i = 1;
// while (i <= 100) {
//
//     if (userValue === null) {
//         alert('You closed the app');
//         break;
//     }
//
//     if (!(i % userValue)) {
//         console.log(i);
//     }
//     i++;
// }