


let id = localStorage.getItem('id');
let focuus = localStorage.getItem('focusArea');
let data;
//console.log(`${diff}, ${focuus}, ${part}`);

async function getExercise(id) {
    const res = await fetch(`./api/exercise/id/${id}`);
    data = await res.json();
    console.log(data);
    console.log(data.users[0]["Exercise Type"]);
    document.getElementById("ExerciseName").textContent = data.users[0]["Exercise Name"] 
    document.getElementById("Benefits").textContent = data.users[0]["Benefit"] 
    document.getElementById("ExerciseSteps").textContent = data.users[0]["Exercise Steps"] 
    document.getElementById("count").textContent = data.users[0]["Minimum Count / Duration"]
}

getExercise(id);

if (focuus === "Muscle Strengthening") {
    document.getElementById("stopwatch").style.display = "block";
    let startTime = 0;
    let intervalId = null;
    let isRunning = false;
    let elapsed = 0;
    const start = document.getElementById("btn_start");
    const stop = document.getElementById("btn_stop");
    const reset = document.getElementById("btn-reset");
    reset.style.display = "block"
    const display = document.getElementById("display");

    function updateDisplay(elapsed) {
        elapsed = Date.now() - startTime;
        const ms = elapsed % 100;
        const totalSeconds = Math.floor(elapsed / 1000);
        const seconds = totalSeconds % 60;
        const minutes = Math.floor((totalSeconds / 60)) % 60;
        const hours = Math.floor(totalSeconds / 3600);
        if ((seconds - 10) === 0) {
            display.innerText = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:00`;
            clearInterval(intervalId);
            start.disabled = false;
            stop.disabled = true;
        } else {
            display.innerText = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(ms).padStart(2, '0')}`;
        }
    }

    start.addEventListener("click", () => {
        stop.disabled = false;
        start.disabled = true;
        if (!isRunning) {
            isRunning = true;
            startTime = Date.now() - elapsed;
            intervalId = setInterval(() => {
                updateDisplay(elapsed);
            }, 1);
        }
    }
);


    stop.addEventListener("click", () => {
        start.disabled = false;
        stop.disabled = true;
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
            display.innerText = `00:00:00:00`;
            elapsed = 0;
            startTime = 0;
            isRunning = false;
            start.disabled = false;
            stop.disabled = true;
        } else {
            clearInterval(intervalId);
            intervalId = null;
            display.innerText = `00:00:00:00`;
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

} else {
    //this.disabled = true; startExercise()
    const start = document.getElementById("btn_start");
    const stop = document.getElementById("btn_stop");
    start.addEventListener(`click`, () => {
        start.disabled = true; 
        startExercise()
    })

    stop.addEventListener(`click`, () => { 
        stopExercise()
    })

    function startExercise() {
        alert("Exercise started! Get ready!");
        stop.disabled = false;
    }
    function stopExercise() {
        alert("Exercise stopped");
        start.disabled = false;
        stop.disabled = true;
    }
}

document.getElementById("submitBtn").addEventListener(`click`, () => {
    const energylevel = document.querySelector("input[type=radio]:checked");
    if(energylevel) {
        
        window.alert(`your energy level is: ${energylevel.value}`);
        
    } else {
        window.alert(`SELECT ENERGY LEVEL`);
    }
})

