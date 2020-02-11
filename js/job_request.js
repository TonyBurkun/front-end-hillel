// Написать опросник для поступления на работу.
// К примеру, захардкоженные ( hardcode - те значения, которые устанавливаются вами в коде самостоятельно )
// условия требуют, чтобы человек был не младше 30 лет, имел опыт в данной области больше 3-х лет и т.п.
// Выдать результат: подходит человек на должность, или нет.

const ASSOCIATE = 'associate';
const BACHELOR = 'bachelor';
const MASTER = 'master';
const DOCTORAL = 'doctoral';

const CONFIRM_LONG_STRING = 'yes';
const CONFIRM_SHORT_STRING ='y';
const REJECT_LONG_STRING = 'no';
const REJECT_SHORT_STRING = 'n';

const LANGUAGE ='english';


let jobRequirements = {
    age:{
        lowAge: 20,
        highAge: 75,
    },
    degree: MASTER,
    experience: 6,
    car_available: true,
    languages: LANGUAGE,
};




function getUserAge(){

    let ageValueFromUser = +prompt('Please enter you age: ', 'Example: 25');
    if (Number.isNaN(ageValueFromUser)){
        console.log('You have entered incorrect value. Please enter a number');
        ageValueFromUser = getUserAge();
    }

    return ageValueFromUser;
}

function getUserDegree(){
    let requireDegree;

    function _compareDegreeWithRequirement(degreeValueFromUser){
        degreeValueFromUser = degreeValueFromUser.toLowerCase() === jobRequirements.degree.toLowerCase();
        return degreeValueFromUser;
    }



    let degreeValueFromUser = prompt('Please enter you degree: ', 'Items for choosing: Associate, Bachelor, Master, Doctoral');
    if (degreeValueFromUser == null) {
        console.log('You skipped this question. If it is necessary item for position you will not get the offer.');
        degreeValueFromUser = false;
        return degreeValueFromUser
    }

   switch (degreeValueFromUser.toLowerCase()) {
       case ASSOCIATE:
           requireDegree = _compareDegreeWithRequirement(degreeValueFromUser);
            break;
       case BACHELOR:
           requireDegree = _compareDegreeWithRequirement(degreeValueFromUser);
           break;
       case MASTER:
           requireDegree = _compareDegreeWithRequirement(degreeValueFromUser);
           break;
       case DOCTORAL:
           requireDegree = _compareDegreeWithRequirement(degreeValueFromUser);
           break;

       default:
           console.log('You enter incorrect value, please try again and be carefully');
           requireDegree = getUserDegree();
           break;


   }

    return requireDegree;
}

function getUserExperience(){
    let experienceValueFromUser = +prompt('Please enter you experience in the the full years value: ', 'Example: 9');

    if (Number.isNaN(+experienceValueFromUser)){
        console.log('You have entered incorrect value. Please enter a number');
        experienceValueFromUser = getUserExperience();
    }

    return experienceValueFromUser;
}


function carAvailability(){
    let userHasCar = prompt('Do you have personal car: ', 'Example answer: yes, no, y, n')

    if (userHasCar === null) {
        userHasCar = false;
        return userHasCar;
    }

    switch(userHasCar.toLowerCase()) {
        case CONFIRM_LONG_STRING:
        case CONFIRM_SHORT_STRING:
            userHasCar = true;
            break;

        case REJECT_LONG_STRING:
        case REJECT_SHORT_STRING:
            userHasCar = false;
            break;

        default:
            console.log('You enter incorrect value, please try again and be carefully');
            userHasCar = carAvailability();
            break;
    }

    return userHasCar;
}

function getUserLanguage(){
    let userLanguage = prompt('Please enter full name of foreign language which you know:', 'Example: english, English, spain, Spain,');

    if (userLanguage == null) {
        userLanguage = false;
        return userLanguage;
    }

    userLanguage = userLanguage.toLowerCase() === LANGUAGE;

    return userLanguage;

}

let userAge,
    degree,
    experience,
    carAvailable,
    languages;

userAge = getUserAge();
// console.log(userAge);

degree = getUserDegree();
// console.log(degree);

experience = getUserExperience();
// console.log(experience);

carAvailable = carAvailability();
// console.log(carAvailable);

languages = getUserLanguage();
// console.log(languages);


const ageLowLimit = jobRequirements.age.lowAge;
const ageHighLimit = jobRequirements.age.highAge;



if (userAge >= ageLowLimit && userAge <= ageHighLimit && degree && experience >= jobRequirements.experience &&  carAvailable && languages) {
    alert('MATCHED! MATCHED! MATCHED!');
} else {
    alert('NO')
}





