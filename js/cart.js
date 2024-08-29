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
let isLogin=JSON.parse(localStorage.getItem("isLogin"))||false;
// let userData=JSON.parse(localStorage.getItem("user"))

const logg=()=>{
    if(isLogin){
        getele("nbarr").innerHTML=nbar("logout","")
        getele("log").addEventListener("click",()=>{
            localStorage.setItem("isLogin",false)
        })
    }else{
        window.location.href="/pages/login.html"
    }
}
logg()
// xxxxxxxxxxxxxxxx  Login True  xxxxxxxxxxxx

// cart
import { cart_api } from "../api/cart_api.js";
let cart = await cart_api.get()
getele("count").innerHTML=cart.length

// console.log(cart);

const hdlqt = (index, ele, opr) => {
    if (opr === "+") {
        ele.qty += 1;
    } else if (opr === "-" && ele.qty > 1) {
        ele.qty -= 1;
        ele.qty<1?alert("Qty should be more than 1"):""
    }
    cart_api.patch(index, ele);
    Mapper(cart);
};

import { createTag } from "../api/Helper.js";

const Mapper = (cart) => {
    document.getElementById("list").innerHTML = ""
    cart.map((item, i) => {
        
        let td1 = document.createElement("td")
        let img = createTag("img", item.thumbnail)
        img.setAttribute("class","thumbnail")
        td1.append(img)
        
        let td3 = createTag("td", item.category)
        td3.setAttribute("class","name")
        let td4 = createTag("td",  "$"+" "+item.price)
        let td5 = document.createElement("td")
        // .setAttribute("class","btn rounded")

        let btn1 = createTag("button", "-")
        let btn2 = createTag("button", item.qty)
        let btn3 = createTag("button", "+")

        btn1.addEventListener("click", () => hdlqt(item.id,item, "-"))
        btn3.addEventListener("click", () => hdlqt(item.id,item, "+"))
        td5.append(btn1, btn2, btn3)
        let td6 = createTag("td", "$"+" "+Math.round(item.price * item.qty *100) / 100) 
        let td7 = document.createElement("td")
        let btn = createTag("button", "remove")
        btn.addEventListener("click", () => handleDelete(item.id))
        btn.setAttribute("class","rounded")
        td7.append(btn)
        let tr = document.createElement("tr")
        tr.setAttribute("class","trbox")
        tr.append(td1, td3, td4, td5, td6, td7)

        getele("list").append(tr)
    })
}
Mapper(cart)

const handleDelete = (id) => {
    cart = cart.filter(item => item.id !== id);
    cart_api.delete(id);
    getele("count").innerHTML = cart.length;
    Mapper(cart);
};

