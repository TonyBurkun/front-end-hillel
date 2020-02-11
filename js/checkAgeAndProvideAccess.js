// Запросить у пользователя год рождения.
// Если возраст больше 18 лет - сообщить о доступе к сервису, в противном случае - о запрете.
// Если пользователю меньше 12 - посоветовать другой сервис.
// Если пользователь ввел не число - сообщить ему об этом.
// Записать при помощи if/else и тернарного оператора.

function getAgeValueFromUser(){
    let valueFromUser = prompt('Please enter your age:');


    if (valueFromUser === null){
        valueFromUser = getAgeValueFromUser();
    }

    let valueFromUserToNumber = +valueFromUser;
    if (Number.isNaN(valueFromUserToNumber)){
        console.log('Your value is not a number. Please enter correct format of value!');
        valueFromUser = getAgeValueFromUser();
    }


    return +valueFromUser;
}

function checkUserAccess(userAge) {
    userAge > 18 ?
        console.log('You can continue to use our service')
        :
        console.log('Unfortunately, you cannot use our service while you will not be 19 age years old');

    if (userAge < 12) {
        console.log('We recommend checking other services because you are too young')
    }
}
const userAge = getAgeValueFromUser();
checkUserAccess(userAge);