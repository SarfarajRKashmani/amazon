import { nbar,nbar_styles } from "../api/navbar.js";
import { getele } from "../api/Helper.js";
import { fot } from "../api/navbar.js";

const nbarr=getele("nbarr");
nbarr.innerHTML= nbar();

document.addEventListener("DOMContentLoaded", function(){
    const styletag=document.createElement("style")
    styletag.innerHTML= nbar_styles();
    document.head.appendChild(styletag)
})

const foot=getele("footr")
foot.innerHTML=fot();

import { userdata } from "../api/api.js";
let arr = await userdata.get();
const data1 = (e) => {
  e.preventDefault();
  var passwordregex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  var emailregex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i; 
  // var noregex = /^?[789]\d{9}$/;
  let details = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };
  console.log(details);
  if(!passwordregex.test(details.password)){
      alert("  Password must be 8 char long and contain one special char, uppercase & number")
    return
  }
  if(!emailregex.test(details.email)){
    alert("plz Enter a valid email")
    return
  }
  console.log(passwordregex.test(password));
  // if(!noregex.test(number)){
  //   alert("plz Enter a valid number")
  // }
  let emailExists = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].email === details.email) {
      emailExists = true;
      break;
    }
  }
  if (emailExists) {
    alert("Email already exists");
  } else {
    userdata.post(details);
    alert("singup Sucessfull.");
    window.location.href="/index.html"
  }
};

document.getElementById("data").addEventListener("submit", data1);