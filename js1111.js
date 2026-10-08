





let clickCount = 0
function clickButton(thisButton) {
    clickCount++
   thisButton.innerHTML = clickCount
while(0>1){
thisButton.innerHTML=clickCount
clickCount++
}

}
 


function rrrttt(){
    window.location.reload("html.html");
}







var h1 = document.getElementsByTagName('h1')[0];
var start = document.getElementById('strt');
var stop = document.getElementById('stp');
var reset = document.getElementById('rst');
var sec = 0;
var min = 0;
var hrs = 0;
var t;

function tick(){
    sec++;
    if (sec >= 60) {
        sec = 0;
        min++;
        if (min >= 60) {
            min = 0;
            hrs++;
        }
    }
}
function add() {
    tick();
    h1.textContent = (hrs > 9 ? hrs : "0" + hrs) 
             + ":" + (min > 9 ? min : "0" + min)
             + ":" + (sec > 9 ? sec : "0" + sec);
    timer();
}
function timer() {
    t = setTimeout(add, 1000);
}

timer();
start.onclick = timer;
stop.onclick = function() {
    clearTimeout(t);
}





























































