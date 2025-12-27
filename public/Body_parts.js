const username = localStorage.getItem('username');
document.getElementById('hp_username').textContent = username

let bodyPart;

function mclick(btnid) {
    bodyPart = `${btnid}`
    localStorage.setItem('bodyPart', bodyPart);
    window.location.href='exercise_table.html';
}

function mouseover(pid) {
        const para = document.getElementById(`${pid}`);
        para.style.fontSize = "10px";
        para.style.display = "block";
}

function mouseleaves(pid) {
        const para = document.getElementById(`${pid}`);
        para.style.display = "none";
}
