const hourEL = document.getElementById("hour");
const minEl = document.getElementById("minutes");
const secEl = document.getElementById('seconds');
const amplEl = document.getElementById("ampm");

const updateClock = () =>
{
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";
    if (h > 12){
        h = h-12;
        ampm = "PM"
        amplEl.style.backgroundColor = "burlywood";
    }
    h = h<10 ? "0" + h: h;
    hourEL.innerText = h;
    minEl.innerText = m;
    secEl.innerText = s;
    amplEl.innerText = ampm;

   
    
    //passes in a function, and a time to repeat it once timer is up
    setTimeout(() =>{updateClock()}, 1000)
    
}
updateClock();