// Написать скрипт, который будет выводить часы в консоль. В формате HH:mm:ss

function showClock(){
    function _checkFirstZero(value){
        value = value.toString();
        if (value.length === 1) {
            value = '0' + value;
        }
        return value;
    }



    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();

    hours = _checkFirstZero(hours);
    minutes = _checkFirstZero(minutes);
    seconds = _checkFirstZero(seconds);

    console.clear();
    console.log(`${hours} : ${minutes} : ${seconds}`);
}


setInterval(() => {
    showClock();
}, 1000);