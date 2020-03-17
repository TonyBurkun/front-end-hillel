function sum() {

    let result = 0;
    for (let i=0; i< arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}

var result = sum(1,2,3,4,5,6); //21

console.log(result);