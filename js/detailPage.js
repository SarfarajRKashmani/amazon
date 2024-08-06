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



const Product_Id = localStorage.getItem("product_id");

const getData = async (id) => {
  let req = await fetch(`https://dummyjson.com/products/${id}`);
  let product = await req.json();
  console.log(product);
  UI_Product(product);
};

const UI_Product = (product) => {
  document.getElementById("img").src = product.images[0];
  document.getElementById("title").innerHTML = product.title;
  document.getElementById(`price`).innerHTML = `Price: ${"$"+product.price}`;
  document.getElementById("rating").innerHTML = `Rating:-${product.rating}`;
  document.getElementById(`category`).innerHTML = `Category:${product.category}`;
  document.getElementById("brand").innerHTML = `Brand:${product.brand}`;
  document.getElementById(`description`).innerHTML = product.description;
};

getData(Product_Id);





