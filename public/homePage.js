const username = localStorage.getItem('username');
if(username !== null) {
    document.getElementById('hp_username').textContent = username
    let endIndex = username.indexOf(" ");
    let name;
    if(endIndex === -1) {
        name = username;
    } else {
        name = username.slice(0, endIndex);
    }
    document.getElementById("welcomeMsg").textContent = `Welcome ${name}!`
}

let difficulty;
//let movement;
//let targetGroup;

document.getElementById("simple").addEventListener('click', () => {
    difficulty = "Simple"
    localStorage.setItem('difficulty', difficulty);
    window.location.href='focus_area.html';
})
document.getElementById("medium").addEventListener('click', () => {
    difficulty = "Medium"
    localStorage.setItem('difficulty', difficulty);
    window.location.href='focus_area.html';
})
document.getElementById("complex").addEventListener('click', () => {
    difficulty = "Complex"
    localStorage.setItem('difficulty', difficulty);
    window.location.href='focus_area.html';
})

const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Simple', 'Medium', 'Complex', 'Not Done'],
      datasets: [{
        label: 'Your Progress',
        data: [10, 5, 2, 103],
        backgroundColor: [
        '#f6d75bff', // Red
        '#36a2eb', // Blue
        '#ff2c2cff',  // Yellow
        '#727272ff'
        ],
        borderColor: '#ffffffff',
        borderWidth: 1
    }]
    },
    options: {
  plugins: {
    legend: {   
        labels: {
            color: '#4B2E2E',
            font: {
                family: 'Georgia'
            }
        },
          position: 'bottom', // or 'bottom', 'left', 'right'
    }
  }
}
   
  });