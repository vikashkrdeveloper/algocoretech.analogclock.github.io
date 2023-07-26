let hour=document.getElementById('hour');
let min=document.getElementById('minute');
let sec=document.getElementById('second');
function time_clock(){
let date =new Date();
let hr=date.getHours();
let mn=date.getMinutes();
let sc=date.getSeconds();
 
let hrRotate=30*hr+mn/2;
let mnRotate=6*mn;
let scRotate=6*sc;

hour.style.transform=`rotate(${hrRotate}deg)`;
min.style.transform=`rotate(${mnRotate}deg)`;
sec.style.transform=`rotate(${scRotate}deg)`
}
setInterval(time_clock,1000);