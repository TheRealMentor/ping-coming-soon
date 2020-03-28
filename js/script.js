console.log("Script Started!");
var btn = document.getElementById('btn');

btn.addEventListener('click', (e)=>{
  e.preventDefault();
  console.log("AAAAAAAA");
  validation();
});

function validation() {
  console.log("Entered validation")
  let email = document.getElementById("email").value;
  let emailCheck = isEmail(email);
  let msg = '';
  let err = null;
  let green = "#2ecc71";
  let red = "#ff5263";
  
  if (email === '') {
    msg = "Whoops! It looks like you forgot to add your email";
    err = true;
  } else if (!emailCheck) {
    msg = "Please provide a valid email address";
    err = true;
  } else {
    msg = "Welcome to the club!";
    err = false;
  }

  if(err) {
    document.getElementById('msg').innerHTML = msg;
    document.getElementById('msg').style.color = red;
    document.getElementById('email').style.borderColor = red;
  } else {
    document.getElementById('msg').innerHTML = msg;
    document.getElementById('msg').style.color = green;
    document.getElementById('email').style.borderColor = green;
  }

  if(window.screen.width < 375) {
    btn.style.marginTop = "50px";
  }
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}