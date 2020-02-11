// The user choose a random value for amount of numbers then enter each number one by one.
// Then the system should find average value and represent it to the user




function notNumberValueNotification(){
    alert('The entered value is not a number, please repeat your action!');
}

function biggerThanZeroNotification(){
    alert('Please enter the value bigger than 0');
}

function finishAppNotification(){
    alert('You have closed the App.');
}

function getAmountNumbersForAverage() {
   let amountNumbersForAverage = prompt('Please enter amount of numbers for which you want to calculate average:', 'Example: 2');

   if (amountNumbersForAverage !== null) {
       amountNumbersForAverage = Number(amountNumbersForAverage);
       if (Number.isNaN(amountNumbersForAverage)) {
           notNumberValueNotification();
           amountNumbersForAverage = getAmountNumbersForAverage();
       } else {
           if (!amountNumbersForAverage) {
               biggerThanZeroNotification();
               amountNumbersForAverage = getAmountNumbersForAverage();
           }
       }
   }

   return amountNumbersForAverage

}

function getValueForAverage(amountNumbers, i){
    let valueForAverage = prompt(`Please enter the ${i} of ${amountNumbers} values which will be used for calculating average:`);
   if (valueForAverage !== null) {
       valueForAverage = Number(valueForAverage);
       if (Number.isNaN(valueForAverage)) {
           notNumberValueNotification();
           valueForAverage = getValueForAverage(amountNumbers, i);
       } else {
           if (!valueForAverage) {
               biggerThanZeroNotification();
               valueForAverage = getValueForAverage(amountNumbers, i);
           }
       }
   }
   return valueForAverage;
}

function getAverageFromArrOfNumbers(arr){
    let averageValue = null;
    for (let i = 0; i < arr.length; i++) {
        averageValue += arr[i]
    }
    averageValue = averageValue/arr.length;

    return averageValue;
}





let valuesForAveragesArr = [];
let amountNumbersForAverage = getAmountNumbersForAverage();

if (amountNumbersForAverage !== null) {
    for (let i = 1; i <= amountNumbersForAverage; i++){
        let valueForAverage = getValueForAverage(amountNumbersForAverage, i);
        if (!valueForAverage) {
            finishAppNotification();
            break;
        }
        valuesForAveragesArr.push(valueForAverage);

    }
} else {
    finishAppNotification();
}



if (valuesForAveragesArr.length) {
    let averageValue = getAverageFromArrOfNumbers(valuesForAveragesArr);
    alert(`Success! Your average value is:  ${averageValue}`);
    console.log(`Success! Your average value is:  ${averageValue}`);

}













