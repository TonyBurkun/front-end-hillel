// var obj = Object.create(Object.prototype, {
//     a: {
//         enumerable: false,
//         value: 2
//     },
//     b: {
//         value: 3,
//         enumerable: true
//     }
// });
//
// var obj2 = {
//     a: 2
// };
//
// for (var key in obj) {
//     console.log(key);
// }


//Object.prototype

//{}.__proto__



// function getStatus(arr){
//     for(let i = 0; i< arr.length; i++){
//         if (arr[i] >= 3) {
//             return true;
//         }
//     }
//
//     return false
// }
//
// console.log(getStatus([1,3,2]));


function getStatus(arr){
    for(let i = 0; i< arr.length; i++){
       console.log(arr[i]);
    }

}

getStatus([1,3,2]);

var debug = true;

function log(info){
    if (debug) {
        console.log(info)
    }
}

let a = [1,2,3].some(function (num) {
    return num > 1
});
log(a);



