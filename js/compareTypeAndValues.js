function finishAppNotification(){
    alert('You have closed the App.');
}

function getValueFromUser(valueOrder){
    let valueFromUser = prompt(`Please enter the ${valueOrder} value for comparing type`);

    if (valueFromUser !== null) {
        if (!valueFromUser.length){
            alert('The value can not be empty. Please enter some value');
            valueFromUser = getValueFromUser(valueOrder);
        }
    } else {
        finishAppNotification();
    }

    return valueFromUser
}

let firstValue = null;
let secondValue = null;




function checkTypeBetweenTwoItems(item1, item2){
    if (typeof item1 === typeof item2) {
        console.log('the items have the same type')
    } else {
        console.log('the items have the different type')
    }

}

function checkValuesBetweenItems(item1, item2){
    if ( item1 ===  item2) {
        console.log('the items have the same value')
    } else {
        console.log('the items have the different value')
    }

}

firstValue = getValueFromUser('First');

if (firstValue !== null) {
    secondValue = getValueFromUser('Second');
}


if (firstValue !== null && secondValue !== null) {

    checkTypeBetweenTwoItems(firstValue, secondValue);
    checkValuesBetweenItems(firstValue, secondValue);

}

