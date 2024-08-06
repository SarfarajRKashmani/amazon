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