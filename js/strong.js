// Звездочка*
// Подготовить строку из всех возможных букв английского алфавита.

// Задача:
// Спросить у пользователя какое количество рандомных значений нужно создать и какое минимальное и максимальное количество символов в них должно быть.
// Заполнить массив рандомными строками в количестве, указанном пользователем, состоящими из значений соответствующей длины
// Сообщить пользователю какое количество слов какой длины было добавлено. К примеру: 5 words with 10 characters, 7 words with 3 characters etc.
// Сгруппировать слова в объект по количеству значений в строке: { 1: [‘a’, ‘b’, ‘c’, ‘d’], 2: [‘ab’, ‘cd’, ‘ef’, ‘gh’] }

const REQUEST_RANDOM_VALUE = 'Please, enter the amount of random values as a number which should be created';
const MIN_VALUE = 'Please,enter the MIN number of characters which should be in in the values';
const MAX_VALUE = 'Please,enter the MAX number of characters which should be in in the values;';

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

const SETTINGS = {
    minLength: 1,
    maxLength: 10,
    wordsAmount: 10
};

function closeApp(){
    console.log('You close the App.');
}


function getNumberFromUser(requestText){
    let valueFromUser = prompt(requestText);

    if (valueFromUser === null) {
        return valueFromUser;
    }
    valueFromUser = +valueFromUser;

    if (Number.isNaN(valueFromUser)) {
        console.log('Please, enter the number instead of string.');
        valueFromUser = getNumberFromUser();
    }

    return valueFromUser;
}


function generateRandomWord(ALPHABET, minLength, maxLength){
    let randomWordLength =  Math.round(Math.random() * (maxLength - minLength) + minLength);
    let randomWord = '';

    for (let i = 0; i < randomWordLength; i++) {
        let randomLetterIndex = Math.floor(Math.random() * ALPHABET.length);
        randomWord = randomWord + ALPHABET[randomLetterIndex];
    }

    return randomWord
}

function generateArrWithRandomWord(randomValueFromUser = SETTINGS.wordsAmount, minValue = SETTINGS.minLength, maxValue = SETTINGS.maxLength) {
    let wordsArr = [];
    for (let i = 0; i < randomValueFromUser; i++) {
        wordsArr.push(generateRandomWord(ALPHABET, minValue, maxValue));
    }
    return wordsArr;

}

function groupWordsByLengthInObj(generatedWordsArr = []){
    let groupedWordsByLengthObj = {};

    for (let i = 0; i < generatedWordsArr.length; i++) {
        let wordLength = generatedWordsArr[i].length;
        if (groupedWordsByLengthObj[wordLength] === undefined) {
            groupedWordsByLengthObj[wordLength] = generatedWordsArr.filter(function (word) {
                return word.length === wordLength;
            });
        }
    }

    return groupedWordsByLengthObj
}

function showStatisticToUser(groupedWordsByLengthInObj = {}){
    let objectKeys = Object.keys(groupedWordsByLengthInObj);
   if (objectKeys && objectKeys.length) {
       console.group('The words list grouped by length: ');
       for (let i = 0; i < objectKeys.length; i++) {
           console.log(` ${groupedWordsByLengthInObj[objectKeys[i]].length} words with ${objectKeys[i]} characters`)
       }
       console.groupEnd();
   }
}



let randomValueFromUser, minValue, maxValue;

randomValueFromUser = getNumberFromUser(REQUEST_RANDOM_VALUE);

if (randomValueFromUser === null) {
    closeApp();
}

if (randomValueFromUser !== null) {
    minValue = getNumberFromUser(MIN_VALUE);
}

if (minValue === null) {
    closeApp();
}

if (minValue !== null) {
    maxValue = getNumberFromUser(MAX_VALUE);
}

if (maxValue === null) {
    closeApp();
}


if (randomValueFromUser && minValue && maxValue) {
    let generatedWordsArr =  generateArrWithRandomWord(randomValueFromUser, minValue, maxValue);
    // console.log(generatedWordsArr);
    let groupedWordsByLengthInObj = groupWordsByLengthInObj(generatedWordsArr);
    // console.log(groupedWordsByLengthInObj);
    showStatisticToUser(groupedWordsByLengthInObj);
}






