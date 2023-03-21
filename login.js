const signup = document.querySelector(".col-right-signup");
const login = document.querySelector(".col-right-login");
const msg = document.querySelector(".msg");

function main(){
  window.location.href='index.html'
}

const btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
  signup.style.display = signup.style.display == "none" ? "block" : "none";
  login.style.display = login.style.display == "block" ? "none" : "block";
  btn.innerText = btn.innerText == "Signup" ? "Login" : "Signup";
  msg.innerText =
    msg.innerText == "Create your account."
      ? "Login your account."
      : "Create your account.";
});

let auth = JSON.parse(localStorage.getItem("auth")) || [];
let userData={};
document.querySelector("#login").addEventListener("click", logind);
function logind(event) {
  event.preventDefault();
  let emaild = document.querySelector("#login-email").value;
  let password = document.querySelector("#login-password").value;
  console.log(emaild, password);
  let flag = false;
  if(emaild==""||password==""){
    alert("All field are required!")
  }else{
    auth.forEach((e) => {
    
      if (emaild === e.email && password === e.password) {
        flag = true;
        userData=e
      }
    });
    console.log(userData,"dataaaa")
  
    if (flag == false) {
      alert("email or password wrong");
    } else {
      alert("login successfull");
      localStorage.setItem("user",JSON.stringify(userData))
      setInterval(()=>{
          window.location.href="index.html"
      },1000)
    }
  }


let form = document.querySelector("#form");

document.querySelector("#signup").addEventListener("click", Signup);
function Signup(e) {
  e.preventDefault();
  let obj = {
    name: form.name.value,
    email: form.email.value,
    password: form.password.value,
  };
  if (obj.name === "" || obj.email === "" || obj.password === "") {
    alert("Opps! All fields are required");
  } else {
    auth.push(obj);
    localStorage.setItem("auth", JSON.stringify(auth));
    alert("Great Welcome to be part ! Now you can login");
  }

  console.log(obj);
}
}
