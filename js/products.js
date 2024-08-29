import { nbar, nbar_styles } from "../api/navbar.js";
import { createEle, getele, getVal } from "../api/Helper.js";
import { fot } from "../api/navbar.js";
import { cart_api } from "../api/cart_api.js";

const nbarr = getele("nbarr");
nbarr.innerHTML = nbar();

document.addEventListener("DOMContentLoaded", function () {
  const styletag = document.createElement("style")
  styletag.innerHTML = nbar_styles();
  document.head.appendChild(styletag)
})

const foot = getele("footr")
foot.innerHTML = fot();

// xxxxxxxxxxxxxxxx  nav-foot  xxxxxxxxxxxx

let isLogin = JSON.parse(localStorage.getItem("isLogin")) || false;
const logg = () => {
  if (isLogin) {
    getele("nbarr").innerHTML = nbar("logout", "")
    getele("log").addEventListener("click", () => {
      localStorage.setItem("isLogin", false)
    })
  } else {
    window.location.href = "/pages/login.html"
  }
}
logg()
// xxxxxxxxxxxxxxxx  Login True  xxxxxxxxxxxx

let data = [];

const API = async () => {
  let request = await fetch("https://json-server-deployment-mxgi.onrender.com/products");
  // let request = await fetch("https://dummyjson.com/products/search?q=phone");
  let response = await request.json();
  // console.log(response);
  display(response);
};

// cart
 let cart = await cart_api.get()
getele("count").innerHTML=cart.length

const isExists = (id) => {
  let temp = cart.filter((ele) => ele.id == id)
  return temp.length > 0 ? true : false
}

const handleCart = (ele) => {
  cart_api.post({ ...ele, qty: 1 })

  if (isExists(ele.id)) {
    cart.map((item, index) => {
      if (item.id == ele.id) {
        cart[index].qty += 1
      }
    })
    alert("qty added to cart")
  }
  else {
    cart.push({ ...ele, qty: 1 })
    alert("added  to the cart")
    getele("count").innerHTML=cart.length
  }
  
}
const card_Head = document.getElementById("card-head");

const display = (Data) => {
  card_Head.innerHTML = "";
  Data?.forEach((elem) => {
    const card_body = createEle("div", "", { class: "card-body" });
    const card = createEle("div", "", { class: "card h-100 p-4" });
    const col = createEle("div", "", {
      class: "col rounded-4",
      id: "card",
    });

    const View = createEle("button", "View", {
      class: "fs-6 fw-bold  buy-now-btn rounded-3",
    });
    const bynow = createEle("button", "Buy Now", {
      class: "fw-bold border-0 mx-4 rounded-3",
    });
    bynow.addEventListener("click", () => handleCart(elem));
    const btns = document.createElement("div");
    btns.append(View, bynow)
    btns.setAttribute("class", "div_btns")
    card_body.append(
      createEle("h5", `${elem.title}`, { class: "card-title text-white fw-bold" }),
      createEle("p", `Category: <span class="fw-bold">${elem.category}</span>`, {
        class: "card-text text-white fw-medium",
      }),
      createEle("p", `Price: <span class="text-white fw-bold">$${elem.price}</span>`, {
        class: "card-text",
      }),
      btns
    );

    card.append(
      createEle("img", "", {
        class: "card-img-top border bg-white shadow hover-zoom rounded-3", id: "card-img", src: `${elem.thumbnail}`, alt: `${elem.title}`, width: "100%", height: "100%",
      }),
      card_body
    );
    col.append(card);
    card_Head.append(col);
    data.push(elem);

    View.addEventListener("click", () => {
      localStorage.setItem("product_id", JSON.stringify(elem.id));
      window.location.href = "/pages/detailPage.html";
    });
  });
};

const applyFilters = (event) => {
  event.preventDefault();


  const selectedCategories = Array.from(
    document.querySelectorAll('input[name="category"]:checked')
  ).map((input) => input.value);

  const selectedPrice = document.querySelector(
    'input[name="price"]:checked'
  )?.value;

  const filteredProducts =
    selectedCategories.length === 0 || selectedCategories.includes("All")
      ? [...data]
      : data.filter((product) => selectedCategories.includes(product.category));

  const sortProducts = (products, sortOrder) => {
    if (sortOrder === "HTL") {
      return products.sort((a, b) => b.price - a.price);
    } else if (sortOrder === "LTH") {
      return products.sort((a, b) => a.price - b.price);
    }
    return products;
  };
  const sortedProducts = sortProducts(filteredProducts, selectedPrice);

  display(sortedProducts);
};

const handleSearch = (value) => {
  let temp = data.filter((ele) => ele.title.toLowerCase().includes(value.toLowerCase()));
  display(temp);
}
const handleSearchData = (e) => {
  e.preventDefault();
  let searchValue = getVal("searchValue");
  handleSearch(searchValue.toLowerCase())

}


// keypress events
const handleKeypress = (e) => {
  //  enter keypress
  //    if(e.key=="Enter") {
  //     let searchValue = getVal("searchValue");
  //     handleSearch(searchValue)
  //    }
  //    live keypress events
  let searchValue = getVal("searchValue");
  handleSearch(searchValue)
}

// enter 
document.getElementById("searchValue").addEventListener("keypress", handleKeypress)

document.getElementById("search").addEventListener("submit", handleSearchData)

API();
document.getElementById("btn-filter").addEventListener("click", applyFilters);
// document
//   .getElementById("input-search")
//   .addEventListener("keyup", SearchInputData);
// document
//   .getElementById("search-btn")
//   .addEventListener("click", SearchInputData);
