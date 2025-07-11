function switchDiv() {
    login_div = document.getElementById("login-container");
    signUp_div = document.getElementById("signUp-container");
    if(login_div.style.display == "block") {
        login_div.style.display = "none";
        signUp_div.style.display = "block";
    }
    else {
        signUp_div.style.display = "none";
        login_div.style.display = "block";
        
    }
    if (document.getElementById("forgotPassword-container").style.display == "block"){
        document.getElementById("forgotPassword-container").style.display = "none";
    }   
}

function forgotPassword() {
    document.getElementById("login-container").style.display = "none" ;
    document.getElementById("signUp-container").style.display = "none" ;
    document.getElementById("forgotPassword-container").style.display = "block" ;
}

document.getElementById('userSignup').addEventListener('submit', async function (e) {
  e.preventDefault();

  const name = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const ph_no = document.getElementById('number').value;
  const pwd = document.getElementById('password').value;

  console.log('Submitting:', { name, email, ph_no, pwd });
  const res = await fetch('/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email, ph_no, pwd })
  });

  const msg = await res.text();
  document.getElementById('responseMsg').innerText = msg;
});



//Login Function
let data = {};
document.getElementById("userLogin").addEventListener('submit', async function (e) {
    e.preventDefault();

    const name = document.getElementById('loginUsername').value;
    const pwd = document.getElementById('loginPassword').value;

    const res = await fetch(`/api/users?name=${name}&pwd=${pwd}`);
    data = await res.json();

    if(data != null) {
      //  localStorage.setItem('username', data[0].name);
        window.alert("Login Successful");
        window.location.href = "focus_area.html";
    } else {
        window.alert("User not found. Try again!");
    }
})

/*
    //document.getElementById("hp_username").textContent = data.name;
    document.getElementById("userSignUp").addEventListener('submit', async function (e) {
        e.preventDefault();

        const name = document.getElementById('loginUsername').value;
        const password = document.getElementById('logPassword').value;
        const res = await fetch('/api/users');
        const data = await res.json();
        switchDiv();
    })
*/