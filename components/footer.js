function footer(){

    return `<div id="mail">
    <div>
      <h1>SIGN UP FOR EMAIL & GET 25% OFF*</h1>
    </div>
    <div>
      <input type="text" placeholder="Enter your email address" />
      <span><button>JOIN</button></span>
      <p>
        *VALID FOR FIRST-TIME REGISTRANTS ONLY & APPLIES TO REG. PRICE
        ITEMS<br />
        ONLY. PRIVACY POLICY
      </p>
    </div>
  </div>

  <div id="oi">
    <p>BUY ONLINE,PICK UP IN STORE,OR CURBSIDE. <span>LEARN MORE →</span></p>
  </div>

  <div id="op">
    <p>
      4 BRANDS 1 EASY CHECKOUT.<span
        >REWARDS MEMBERS get FREE SHIPPING on all Orders $50+
        <a href="">Sign in </a>or <a href="">Join</a></span
      >
    </p>
  </div>
  

  <div id="footer">
    <div>
      <h2>ABOUT US</h2>
      <a href="">Careers</a><br /><br />
      <a href="">Sustainability</a><br /><br />
      <a href="">Gap for Good</a><br /><br />
    </div>
    <div>
      <h2>CUSTOMER SUPPORT</h2>
      <a href="">Store Locater</a><br /><br />
      <a href="">Customer Service</a><br /><br />
      <a href="">Shipping</a><br /><br />
      <a href="">Returns</a><br /><br />
      <a href="">Track Your Order</a><br /><br />
      <a href="">1.800.427.7895</a><br /><br />
    </div>
    <div>
      <h2>GAP GOOD REWARDS</h2>
      <a href="">My Points and Rewards</a><br /><br />
      <a href="">Explore Benefits</a><br /><br />
      <a href="">Pay Credit Card Bill</a><br /><br />
      <a href="">Activate Credit Card</a><br /><br />
      <a href="">Join Gap Good Rewards --it's Free</a><br /><br />
      <a href="">or Apply Now for a Credit Card</a><br /><br />
    </div>
    <div>
      <h2>WAYS TO SHOP</h2>
      <a href="">Get the App</a><br /><br />
      <a href="">Gap Good Rewards</a><br /><br />
      <a href="">Apple Pay</a><br /><br />
      <a href="">AfterPay</a><br /><br />
      <a href="">PayPal</a><br /><br />
      <a href="">Giftcards</a><br /><br />
    </div>
  </div>
  <p id="pu">
    © 2022 THE GAP, INC.|PRIVACY POLICY|DO NOT SELL MY INFO|INTEREST BASED
    ADS|YOUR CALIFORNIA PRIVACY<br />
    RIGHTS|CALIFORNIA TRANSPARENCY IN SUPPLY CHAINS ACT|TERMS OF
    USE|CAREERS|SUSTAINABILITY|ABOUT GAP INC.<br />
    <p id="pe">AMERICANS WITH DISABILITIES ACT|GAP INC. POLICIES</p>
  </p>
</body>
</html>

<script type="module">
import navbar from "./components/navbar.js";
let cont = document.getElementById("cont");
cont.innerHTML = navbar();`

}

export default footer