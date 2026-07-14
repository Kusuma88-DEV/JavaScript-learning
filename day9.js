let clock = document.getElementById("clock");

setInterval(function(){

    let now = new Date();

    let hour = now.getHours();

    let minute = now.getMinutes();

    let second = now.getSeconds();

    clock.innerText = hour + ":" + minute + ":" + second;

},1000);