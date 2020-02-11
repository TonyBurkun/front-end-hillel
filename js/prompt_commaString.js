
function finishAppNotification(){
    alert('You have closed the App.');
}

function incorrectStringFormatNotification(){
    alert('You enter incorrect format of number. Please try again and check the example');
}

function getAverageFromArrOfNumbers(arr){
    let averageValue = null;

    for (let i = 0; i < arr.length; i++) {
        averageValue += arr[i]
    }

    averageValue = averageValue/arr.length;

    return averageValue;
}


function getString() {
    let valuesForAverage = prompt('Please enter values for finding average value based on them. Enter value one by one using "," as a separator', 'Example: 1,5,10');
    if (valuesForAverage !== null) {
        let stringValuesInArr = valuesForAverage.split(',');
        let numberValuesInArr = getNumberValuesInArr(stringValuesInArr);

        if (numberValuesInArr.length !== stringValuesInArr.length) {
            incorrectStringFormatNotification();
            numberValuesInArr = getString();
        }

        return numberValuesInArr;
    } else {
        return [];
    }


}

function getNumberValuesInArr (stringValuesInArr) {
    let numberValuesInArr = [];

    for (let i = 0; i < stringValuesInArr.length; i++) {
        let item = stringValuesInArr[i];
        item = +item.trim();


        if (!Number.isNaN(item)) {
            numberValuesInArr.push(item);
        } else {
            break;
        }

    }

    return numberValuesInArr;
}





let valuesForAverage = getString();
console.log(valuesForAverage);

if (valuesForAverage.length) {
    let averageValue = getAverageFromArrOfNumbers(valuesForAverage);
    alert(`Success! Your average value is:  ${averageValue}`);
} else {
    finishAppNotification()
}
