const timeCount = document.getElementById("timer");


let count = 0;
let intervalId = null;
let LapCount = 1;

const startTimer = () => {
    timeCount.textContent = count++;
    document.querySelector("#start").disabled = true;
    intervalId = setInterval(() => {
        timeCount.textContent = count++;
    }, 1000);
}

const stopTimer = () => {
    document.querySelector("#start").disabled = false;
    clearInterval(intervalId);
}

const resetTimer = () => {
    document.querySelector("#start").disabled = false;
    count = 0;
    timeCount.textContent = 0;
    clearInterval(intervalId);
}

const lapTime = () => {
    const lapList = document.querySelector("#lapList");
    const lapItem = document.createElement("li");
    lapItem.textContent = `Lap ${LapCount} is ${count - 1}`;
    lapList.appendChild(lapItem);
    LapCount++;
}

const cleartime = () => {
    const lapList = document.querySelector("#lapList");
    lapList.innerHTML = "";
    LapCount = 1;
}

document.querySelector("#start").addEventListener("click",startTimer);
document.querySelector("#stop").addEventListener("click", stopTimer);
document.querySelector("#reset").addEventListener("click", resetTimer);
document.querySelector("#time").addEventListener("click", lapTime);
document.querySelector("#cleartimes").addEventListener("click", cleartime);