    let startTime = 0;
    let intervalId = null;
    let isRunning = false;
    let elapsed = 0;
    const start = document.getElementById("btn_start");
    const stop = document.getElementById("btn_stop");
    const reset = document.getElementById("btn-reset");
    const display = document.getElementById("display");

    function updateDisplay(elapsed) {
        elapsed = Date.now() - startTime;
        const ms = elapsed % 1000;
        const totalSeconds = Math.floor(elapsed / 1000);
        const seconds = totalSeconds % 60;
        const minutes = Math.floor((totalSeconds / 60)) % 60;
        const hours = Math.floor(totalSeconds / 3600);
        display.innerText = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(ms).padStart(3, '0')}`;
    }

    start.addEventListener("click", () => {
        if (!isRunning) {
            isRunning = true;
            startTime = Date.now() - elapsed;
            intervalId = setInterval(() => {
                updateDisplay(elapsed);
            }, 10);
        }
    }
);


    stop.addEventListener("click", () => {
        if(isRunning) {
            elapsed = Date.now() - startTime;
            clearInterval(intervalId);
            intervalId = null;
            isRunning = false;
        }
    });

    reset.addEventListener("click", () => {
        if(isRunning) {
            clearInterval(intervalId);
            intervalId = null;
            display.innerText = `00:00:00:000`;
            elapsed = 0;
            startTime = 0;
            isRunning = false;
        } else {
            clearInterval(intervalId);
            intervalId = null;
            display.innerText = `00:00:00:000`;
            elapsed = 0;
            startTime = 0;
        }
    });

function startExercise() {
      alert("Exercise started! Get ready!");
    }
    function stopExercise() {
      alert("Exercise stopped");
}


let diff = localStorage.getItem('difficulty');
let focus = localStorage.getItem('focusArea');
let part = localStorage.getItem('bodyPart');

console.log(`${diff}, ${focus}, ${part}`);

async function getExercise(diff, focus, part) {
    const res = await fetch(`./api/exercises/${diff}/${focus}/${part}`);
    const data = await res.json();
    console.log(data);
}

getExercise(diff,focus,part);

document.getElementById("submitBtn").addEventListener(`click`, () => {
    const energylevel = document.querySelector("input[type=radio]:checked");
    console.log(energylevel.value);
    if(energylevel) {
        window.alert(`your energy level is: ${energylevel.value}`);
        
    } else {
        window.alert(`SELECT ENERGY LEVEL`);
    }
})
