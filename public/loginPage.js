    function switchDiv() {
        const login_div = document.getElementById("login-container");
        const signUp_div = document.getElementById("signUp-container");
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
    let data = {};
    document.getElementById("userLogin").addEventListener('submit', async function (e) {
        e.preventDefault();
        let verify = false;
        const name = document.getElementById('loginUsername').value;
        const email = document.getElementById('logPassword').value;
        console.log(email);
        const res = await fetch(`/api/users?name=${name}&email=${email}`);
        data = await res.json();
        console.log(data);
        if(data !== null) {
            localStorage.setItem('username', data[0].name);
            window.location.href = "try.html";
        } else {
            window.alert("User not found. Try again!");
        }
    })
    //document.getElementById("hp_username").textContent = data.name;
    document.getElementById("userSignUp").addEventListener('submit', async function (e) {
        e.preventDefault();

        const name = document.getElementById('loginUsername').value;
        const password = document.getElementById('logPassword').value;
        const res = await fetch('/api/users');
        const data = await res.json();
        switchDiv();
    })


