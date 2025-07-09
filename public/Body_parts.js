let bodyPart;

function mclick(btnid) {
    bodyPart = `${btnid}`
    localStorage.setItem('bodyPart', bodyPart);
    window.location.href='Exercise_description.html';
}

function mouseover(pid) {
        const para = document.getElementById(`${pid}`);
        para.textContent = "Exercise completed 1/3";
        para.style.fontSize = "10px";
        para.style.display = "block";
}

function mouseleaves(pid) {
        const para = document.getElementById(`${pid}`);
        para.style.display = "none";
}
