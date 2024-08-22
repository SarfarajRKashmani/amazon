import { nbar, nbar_styles } from "../api/navbar.js";
import { getele } from "../api/Helper.js";
import { fot } from "../api/navbar.js";

// Set up the navbar
const nbarr = getele("nbarr");
nbarr.innerHTML = nbar();

document.addEventListener("DOMContentLoaded", function () {
    const styletag = document.createElement("style");
    styletag.innerHTML = nbar_styles();
    document.head.appendChild(styletag);
});

// Set up the footer
const foot = getele("footr");
foot.innerHTML = fot();

// User authentication
import { userdata } from "../api/api.js";

(async () => {
    let arr = await userdata.get();

    document.getElementById("data").addEventListener("submit", (e) => {
        e.preventDefault();

        let enteredData = {
            email: document.getElementById("email").value,
            password: document.getElementById("password").value
        };

        // Find the user
        let user = arr.find(user => user.email === enteredData.email);

        if (!user) {
            alert("User not found");
        } else if (user.password !== enteredData.password) {
            alert("Password mismatch");
        } else {
            alert("Login successful");
            localStorage.setItem("isLogin", true);
            window.location.href = "/index.html";
        }
    });
})();
