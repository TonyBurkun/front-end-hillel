// Написать функцию, которая возвращает количество часов, прошедших с момента введенной даты.

function getDateFromUser(){
    let valueFromUser = prompt('Please enter the date: ', 'Format: MM-DD-YYYY');

    if (valueFromUser === null) {
        return valueFromUser
    }

    let isPassDateValidation =  checkDateFormatFromUser(valueFromUser);

    if (!isPassDateValidation) {
        console.log('Please enter Date in correct format');
        return getDateFromUser()
    }

    return valueFromUser;
}


function checkDateFormatFromUser(valueFromUser){
    let dateFormatIsValid = true;
    valueFromUser = String(valueFromUser);

    let dateArr = valueFromUser.split('-');
    if (dateArr.length !== 3) {
        dateFormatIsValid = false;
        console.log(dateFormatIsValid);
    } else {
      let [month, day, year] = dateArr;

      for (let i = 0; i < dateArr.length; i++){
          let item = dateArr[i];
          console.log(item);

          if (!Number(item)) {
              dateFormatIsValid = false;
              break;
          }

          if (item !== year && item.length !== 2) {
              dateFormatIsValid = false;
              break;
          }

          if (item === day && item > 31) {
              dateFormatIsValid = false;
              break;
          }

          if (item === month && item > 12) {
              dateFormatIsValid = false;
              break;
          }

          if (item === year && year.length !== 4) {
              dateFormatIsValid = false;
              break;
          }
      }

    }

    console.log(dateFormatIsValid);
    return dateFormatIsValid;

}

function getHoursPassedFromEnteredDate(date){
    let filledDate =  Date.parse(date);
    let currentDate =  Date.now();

    let hoursPassedFromEnteredDate = (currentDate - filledDate)/1000/60/60;


    console.log('Amount of hours which were passed from the entered Date: ' + hoursPassedFromEnteredDate)
}


let dateValue = getDateFromUser();
console.log(dateValue);
if (dateValue === null) {
    console.log('You CLOSE THE APP')
}

if (dateValue){
    getHoursPassedFromEnteredDate(dateValue);
}


