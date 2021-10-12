let gettime = () => {
    let digits = document.getElementById("digits");

    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let time = hours < 12 ? "AM" : "PM";
    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    digits.innerHTML = `${hours}:${minutes}:${seconds} ${time}`;

}

setInterval(gettime, 1000);