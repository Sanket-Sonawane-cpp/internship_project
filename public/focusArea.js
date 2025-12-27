document.getElementById("BoneStrengthening").addEventListener('click', () => {
    let focusArea = "Bone Mobility"
    localStorage.setItem('focusArea', focusArea);
    window.location.href='Body_parts.html';
    
})

document.getElementById("MuscleTraining").addEventListener('click', () => {
    let focusArea = "Muscle Strengthening"
    localStorage.setItem('focusArea', focusArea);
    window.location.href='Body_parts.html';
})

const username = localStorage.getItem('username');
document.getElementById('hp_username').textContent = username
