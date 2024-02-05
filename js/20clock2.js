var box2Counter = 0;
var box2IntervalId;

function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    var minutes = now.getMinutes().toString().padStart(2, '0');
    var seconds = now.getSeconds().toString().padStart(2, '0');
    var timeString = hours + ':' + minutes + ':' + seconds + ' ' + ampm;

    document.getElementById('clock').textContent = timeString;

    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var dateString = now.toLocaleDateString('en-US', options);
    document.getElementById('date').textContent = dateString;
}

function startCounter(counterId) {
    if (counterId === 'box2CounterValue') {
        box2IntervalId = setInterval(function () {
            box2Counter++;
            document.getElementById(counterId).textContent = box2Counter;
        }, 1000);
    }
}

function stopCounter() {
    clearInterval(box2IntervalId);
}

function resetCounter(counterId) {
    if (counterId === 'box2CounterValue') {
        box2Counter = 0;
        document.getElementById(counterId).textContent = box2Counter;
        clearInterval(box2IntervalId);
    }
}

setInterval(updateClock, 1000);

updateClock();