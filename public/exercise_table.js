const username = localStorage.getItem('username');
document.getElementById('hp_username').textContent = username


let diff = localStorage.getItem('difficulty');
let focuus = localStorage.getItem('focusArea');
let part = localStorage.getItem('bodyPart');
let data;

async function getExercise(diff, focuus, part) {
    const res = await fetch(`./api/exercises/${focuus}/${part}`);
    data = await res.json();
    console.log(data);
    const table_id = document.getElementById("exercise_table");
    const users = data.users;
    for(const exercise of users) {
        console.log(exercise)
         const html_div = 
        `<tr class="list" onclick="nextPage('${exercise["_id"]}')">
            <td>${exercise["_id"]}</td>
            <td>${exercise["Exercise Name"]}</td>
            <td>${exercise["Exercise Steps"]}</td>
            <td>${exercise["Exercise Type"]}</td>
            <td>9</td>
        </tr>
        `
        table_id.innerHTML = table_id.innerHTML + html_div; 
    } 
}

getExercise(diff,focuus,part);

let id;
function nextPage(id) {
    localStorage.setItem('id', id);
    window.location.href=`Exercise_description.html`
}