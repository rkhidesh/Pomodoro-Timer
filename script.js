let studyTime = 1500;
let breakTime = 300;
var counter = 0;
var timer;
var pomodoro = "🍅"

const countdownOutput = document.getElementById("countdown");
const repsRemaining = document.getElementById("repsRemaining");
const title = document.getElementById("title");


function startCountDown() {
    counter++;
    if (counter <= 4) {
        timer = setInterval(function () {
            studyCountDown()
        }, 1000);
    }

}

function studyCountDown() {
    const minutes = Math.floor(studyTime / 60)
    let seconds = studyTime % 60

    if (seconds >= 0) {
        seconds = seconds < 10 ? '0' + seconds : seconds;
        countdownOutput.innerHTML = `${minutes}:${seconds}`
        title.innerHTML = "Work"
        title.style.color = "red"
        studyTime--;
    }
    else {
        breakCountDown()
        if (counter === 5) {
            title.innerHTML = "Congratulations, you finished!"
            title.style.color = "#e2979c"
        }
    }
}


function breakCountDown() {
    const minutes = Math.floor(breakTime / 60)
    let seconds = breakTime % 60
    if (seconds >= 0) {
        seconds = seconds < 10 ? '0' + seconds : seconds;
        countdownOutput.innerHTML = `${minutes}:${seconds}`
        title.innerHTML = "Break"
        title.style.color = "green"
        breakTime--;
    }
    else {
        clearInterval(timer)
        studyTime = 1500
        breakTime = 300
        startCountDown()

        repsRemaining.innerHTML += pomodoro

    }
}


function resetTimer() {
    clearInterval(timer)
    studyTime = 1500;
    breakTime = 300;
    counter = 0;
    repsRemaining.innerHTML = ""
    countdownOutput.innerHTML = "25:00"
    title.innerHTML = "Pomodoro Timer"
    title.style.color = "#e2979c"
}

function pauseTimer() {
    clearInterval(timer)

}