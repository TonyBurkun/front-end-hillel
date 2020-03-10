

// forEach([1,2,3], function(num) { console.log(num); }) // -> logged 1 2 3
function forEach(arr, cb) {
    for (let i = 0; i < arr.length; i ++) {
        cb(arr[i], i, arr);
    }
}

forEach([1,2,3], function(number, index, arr){
    console.log(number);
});



// map([1,2,3], function(num) { return num**2 }) // -> [1, 4, 9]
function map(arr, cb) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let item = cb(arr[i], i, arr);
        newArr.push(item);
    }

    return newArr;
}

let mapResult = map([1,2,3], function(number, index, arr){
    return number**2;
});

console.log(mapResult);





// filter([1,2,3], function(num, index) { return index > 1 }) // -> [3]
function filter(arr, cb) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i], i, arr)) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}


let filterResult = filter([1,2,3], (number, index) => {
    return index > 1;
});

console.log(filterResult);



// some([1,2,3], function(num, index) { return index > 1 }) // -> true

function some(arr, cb) {

    for (let i = 0; i < arr.length; i++) {
        let item = cb(arr[i], i, arr);
        if (item) {
            return true;
        }

    }

    return false;

}

let someResult = some([1,2,3], (item, index) => {
    return index > 1;
});

console.log(someResult);



// every([1,2,3], function(num) { return num > 0 }) // -> true
function every(arr, cb) {
    for (let i = 0; i < arr.length; i++) {
        let item = cb(arr[i], i, arr);
        if (!item) {
            return false;
        }
    }
    return true;
}

let everyResult = every([1,2,3], (number, index) => {
    return number > 0;
});

console.log(everyResult);








