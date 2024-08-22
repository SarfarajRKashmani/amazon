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
// xxxxxxxxxxxxxxxx  nav-foot  xxxxxxxxxxxx
// cart -----xxxxxxxx--------
import { cart_api } from "../api/cart_api.js";
 let cart = await cart_api.get()
getele("count").innerHTML=cart.length
// cart -----xxxxxxxx--------

let isLogin=JSON.parse(localStorage.getItem("isLogin"))||false;

const logg=()=>{
    if(isLogin){
        getele("nbarr").innerHTML=nbar("logout","")
        getele("log").addEventListener("click",()=>{
            localStorage.setItem("isLogin",false)
        })
        getele("count").innerHTML=cart.length
    }else{
        window.location.href="./pages/login.html"
    }
}
logg()
