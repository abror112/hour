let hr=document.getElementById("hour"),
min=document.getElementById("min"),
sec=document.getElementById("sec");

function displayTime(){
    let Date=new Date();
    let hh=Date.getHours();
    let mm=Date.getMinutes();
    let ss=Date.getSeconds();


    let hRotation=30*hh+mm/2;
    let mRotation=6*mm;
    let sRotation=6*ss;
    
    hr.style.transform='rotate(${hRotation}deg)'
    min.style.transform='rotate(${mRotation}deg)'
    sec.style.transform='rotate(${sRotation}deg)'
}
setInterval(displayTime,1000)