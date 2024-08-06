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


// cart
let cart = JSON.parse(localStorage.getItem("cart")) || []

const handleDelete = (index) => {
    cart.splice(index, 1)
    document.getElementById("count").innerHTML=cart.length
    Mapper(cart)
    localStorage.setItem("cart", JSON.stringify(cart))
}

const handleQty = (index, opr) => {

    if (opr == "+") {
        cart[index].qty += 1
    }
    else {

        if (cart[index].qty > 1) {
            cart[index].qty -= 1
        }
        else {
            // handleDelete(index)
            alert("qty should be greater than 1")
        }
    }

    Mapper(cart)
    localStorage.setItem("cart", JSON.stringify(cart))


}



const Mapper = (cart) => {
    document.getElementById("list").innerHTML = "Loading..."
    cart.map((item, i) => {
        let td1 = document.createElement("td")
        let img = createTag("img", item.img)
        td1.append(img)
        let td2 = createTag("td", item.title)
        let td3 = createTag("td", item.category)
        let td4 = createTag("td", item.price)
        let td5 = document.createElement("td")

        let btn1 = createTag("button", "-")
        let btn2 = createTag("button", item.qty)
        let btn3 = createTag("button", "+")

        btn1.addEventListener("click", () => handleQty(i, "-"))
        btn3.addEventListener("click", () => handleQty(i, "+"))
        td5.append(btn1, btn2, btn3)
        let td6 = createTag("td", item.price * item.qty)
        let td7 = document.createElement("td")
        let btn = createTag("button", "remove")
        btn.addEventListener("click", () => handleDelete(i))
        td7.append(btn)
        let tr = document.createElement("tr")
        tr.append(td1, td2, td3, td4, td5, td6, td7)

        document.getElementById("list").append(tr)

    })
}

Mapper(cart)