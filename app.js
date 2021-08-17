const day = document.getElementById('day');
const hour = document.getElementById('hour');
const minute = document.getElementById('minut');
const secon = document.getElementById('secon');
const birthDate = "1 sep 2021";

function countdown() {
    const bdayDate = new Date(birthDate);
    const currentDate = new Date();

    const totalseconds = (bdayDate - currentDate) / 1000;

    const days = Math.floor(totalseconds / 3600 / 24);
    const hours = Math.floor(totalseconds / 3600) % 24;
    const minutes = Math.floor(totalseconds / 60) % 60;
    const seconds = Math.floor(totalseconds) % 60;

    day.innerHTML = days;
    hour.innerHTML = hours;
    minute.innerHTML = minutes;
    secon.innerHTML = seconds;
}
countdown();

setInterval(countdown, 1000);
