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

const form = document.querySelector(".form")

form.addEventListener("submit",async (e)=>{
  const fom = e.target;
  const name = fom.username.value

  const res = await fetch('/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({name})
  });

  const msg = await res.text();

  if (msg === 'Success'){
    window.location.href = "home_page.html"
  } else {
    alert("User not found")
  }
})