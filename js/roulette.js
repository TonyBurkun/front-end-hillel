// Добавить возможность проверки всех горизонтальных линий
// Создать массив из 3х массивов с 3-мя рандомными значениями.
// Проверить на соответствие всех значений в средней горизонтальной линии.



function generateRouletteArr (){
    let wrapperArr = [];

    for (let i = 0; i < 3; i++) {
        let innerArr = [];
        for (let item = 0; item < 3; item++){
            innerArr.push(Math.floor( Math.random() * 5));
        }

        wrapperArr.push(innerArr)
    }

    return wrapperArr;
}

function isAllNumbersEqualInLine(rouletteArr){
    let lineIsEqual = true;

    for (let i = 1; i < rouletteArr.length; i++) {
        if ( rouletteArr[0][1] !== rouletteArr[i][1]) {
            lineIsEqual = false;
            break;
        }
    }

    return lineIsEqual;
}


const rouletteArr = generateRouletteArr();
let result = isAllNumbersEqualInLine(rouletteArr);

if (result) {
    console.log('You WIN');
} else {
    console.log('You LOST');
}




