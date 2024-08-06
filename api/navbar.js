 const nbar=()=>{
    return `  <div class="navbarr ">
     <!-- nav-box-1 -->
          <a href="/index.html" class="nav-logo ">
                 <div class="logo"></div>
            </a>
             <!-- nav-box-2 -->
                <div class="nav-add bod">
                    <p class="add1">Deliver to</p>
                    <div class="add-icon">
                        <i class="fa-solid fa-location-dot"></i>
                        <p class="add2">India</p>
                    </div>
                </div>
                 <!-- nav-box-3 -->
                <div class=" nav-search">
                    <select class="search-select">
                         <option>All</option>
                    </select>
                    <input placeholder="Search Amazon" class="search-input">
                    <div class="search-icon">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>
                 <!-- nav-box-4 -->
                 <div class="flag bod">
                    <img src="images/flag.png" alt="">
                       EN
                       <i class="fa-solid fa-caret-down"></i>
                 </div>
                  <!-- nav-box-5 -->
                  <div class="bod">
                    <a href="/pages/login.html" class="signin">Hello,sign in</a>
                    <div class="boxx5"> <a>Accounts & lists</a> 
                        <i class="fa-solid fa-caret-down"></i>
                      </div>
                  </div>
                   <!-- nav-box-6 -->
                   <div class="bod nav-add">
                    <p class="signin">Returns</p>
                    <div class="boxx5"><a>& Orders</a>
                      </div>
                  </div>
                    <!-- nav-box-7 -->
                    <div class="cart bod ">
                      <a href="/pages/cart.html"> <i class="fa-solid fa-cart-shopping"></i>
                        Cart</a> 
                    </div>  
                     </div>
                     <head> 
        <div class="b1 align-items  ">
        <a href="/pages/products.html" class="bod b1-1"><i class="fa-solid fa-bars"> All</i></a> 
        <a class="bod">Amazon miniTV</a>
        <a class="bod">Best Sellers</a>
        <a class="bod">Today's Deals</a>
        <a class="bod">Mobiles</a>
        <a class="bod">Customer Service</a>
        <a class="bod">Electronics</a>
        <a class="bod">New Releases</a>
        <a class="bod">Prime<i class="fa-solid fa-caret-down"></i></a>
        <a class="bod">Home & Kitchen</a>
        <a class="bod" href="/pages/chart.html">Dashboard</a>
        <img class="" src="images/head.jpg" alt="">
    </div>
        </head>`
}
const nbar_styles=()=>{
    return `*{}
    .bod{
    border: 1px solid transparent;
    border-radius: 10px;
    padding: 2px;
}
.bod:hover{
    border: 2px solid  rgb(201, 114, 52);
}
.navbarr{
    height: 60px;
    background-color: #0f1111;
    color: white;
    display: flex;
    align-items: center;
    justify-content:space-evenly;
    // position: fixed;
    width:100%
}

.nav-logo{
    height: 50px;
    width: 100px;
}
.logo{
    background-image: url("/images/amazon_logo.png");
    height: 50px;
    width: 100%;
    background-size: cover;
}
    .foot{
    // position: fixed;
    bottom: 0;
    width:100%;
    z-index:3;
}
    
    .foot-pl-3{
    background-color: #222F3E;
    border-top: 0.5px solid white;
    height: 70px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;  
}
.logo6{
    background-image: url("/images/amazon_logo.png");
    background-size: cover;
    height: 50px;
    width: 100px;
}
    .add1{
    color: #cccccc;
    font-size: 0.85rem;
    margin-left: 15px;

}
.nav-add p{
    margin-bottom: 0px !important;
}

.add2{
    font-size: 1rem;
    margin-left: 3px;
    
}
.add-icon{
    display: flex;
    align-items: center;
}
/* nav box3 */
.nav-search{
    display: flex;
    width: 620px;
    height: 40px;
    border: 2px solid transparent;
    justify-content:space-evenly ;
    border-radius: 5px;
}
.search-select{
    background-color: #f3f3f3;
    width: 50px;
    text-align: center;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    border: none;
}
.search-input{
    width: 100%;
    border: none;
    font-size: 1rem;
}
.search-icon{
width: 45px;
display: flex;
justify-content: center;
align-items: center;
size: 1.2rem;
background-color: rgb(201, 114, 52);
border-top-right-radius: 3px;
border-bottom-right-radius: 3px;
}
.nav-search:hover{
    border: 2px solid rgb(243, 159, 3);
}
/* nav box4 */
.flag{
    height:20px;
}
.flag img{
    height: .8rem;
    padding-right: 2px;
}
.fa-caret-down{
    color: #a7acb270;  
    justify-self: baseline;
}
/* nav boxx5-6*/
.boxx5 a {
    font-size: 14px;
    font-weight:700;
}
.signin{
    font-size: 12px;
    color: white;
} 
/* nav box7 */ 
.cart i {
    font-size: 35px;
    align-items: center;
    justify-content: center;
}
.cart a{
    color: white;
}`
}
const fot =()=>{
    return ` <div class="foot text-white">
            <div class="foot-pl-3">
                <div class="logo6"></div>
                <div class="icon"><i class="fa-solid fa-globe"></i> English</div>
                <div class="icon2"><i class="fa-regular fa-dollar-sign"></i> USD-Us-Doller</div>
                <div class="flag"><img src="images/flag.png" alt=""> India</div>
            </div>
        </div>`
}
export { nbar , nbar_styles, fot} 