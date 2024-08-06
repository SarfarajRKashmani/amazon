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
let arr = await userdata.get()
document.getElementById("data").addEventListener("submit", (e) => {
    e.preventDefault();
    let userdata = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].email === userdata.email || arr[i].password === userdata.password) {
            if (arr[i].email !== userdata.email) {
                alert("user not found")
                break
            }
            else if (arr[i].password !== userdata.password) {
                alert("password mismatch")
                break
            }
            else if (arr[i].email === userdata.email && arr[i].password === userdata.password) {
                alert("login successful")
                window.location.href="/index.html"
                break;
            }
        }
        else{
            alert("user not found") 
            break;
        }
    }
    });