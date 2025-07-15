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
    }

    function forgotPassword() {
        document.getElementById("login-container").style.display = "none" ;
        document.getElementById("signUp-container").style.display = "none" ;
    }

    let data = {};
document.getElementById("userLogin").addEventListener('submit', async function (e) {
    e.preventDefault();
    const name = document.getElementById('loginUsername').value;
    const password = document.getElementById('logPassword').value;
    console.log(password);
    const res = await fetch(`/api/users?name=${name}&password=${password}`);
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
    const name = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;
    const phone_number = document.getElementById('number').value;
	if( password === document.getElementById('confirm_password').value){		
		const res = await fetch('/submit', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ name, email, password, phone_number })
		});
        data = await res.json();
        if (data == "ok") {
            switchDiv();
        } else {
            window.alert("user already exists. try logging in")
        }
	} else {
		window.alert("Password is not matching. Try again!");
	}
})

