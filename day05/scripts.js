function displayTime() {
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var session = document.getElementById('session');

    session.innerHTML = hrs >= 12 ? 'PM' : 'AM';

    if (hrs === 0) {
        hrs = 12;
    } else if (hrs > 12) {
        hrs -= 12;
    }

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
}

displayTime();
setInterval(displayTime, 1000);