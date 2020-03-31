// let btn = document.getElementById('btn');
//
// console.log(btn);

let lineX = document.createElement('span');
lineX.className = 'line lineX';
let lineY = document.createElement('span');
lineY.className = 'line lineY';


document.body.append(lineX, lineY);




window.onmousemove = function(e){
    lineX.style.transform = 'translate(0px, ' + e.clientY + 'px)';
    lineY.style.transform = 'translate(' + e.clientX + 'px, 0px)';
};