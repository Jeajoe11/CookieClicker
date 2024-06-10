//ADDITION COOKIES 
const Add1Cookie = document.getElementById("Add1Cookie");
const Add5Cookie = document.getElementById("Add5Cookie");
const Add10Cookie = document.getElementById("Add10Cookie");
const Add50Cookie = document.getElementById("Add50Cookie");

//AUTO ADDITION COOKIES
const AutoAdd1Cookie = document.getElementById("AutoAdd1Cookie");
const AutoAdd5Cookie = document.getElementById("AutoAdd5Cookie");
const AutoAdd10Cookie = document.getElementById("AutoAdd10Cookie");
const AutoAdd50Cookie = document.getElementById("AutoAdd50Cookie");


//EXTRA
const BigCookie = document.getElementById("myCookie");
const CookiePreview = document.getElementById("totalCookiesPreview");
const cookiesPerClickPreview = document.getElementById("cookiesPerClick");
const cookiesPerSecondPreview = document.getElementById("cookiesPerSecond")

//VARIABLES
let NumOfCookies = 0;
let CookiePerClick = 1;
let CookiePerSecond = 0;
let running = true;

//ADDITION COOKIES PRICES
let Add1CookiePrice = 12;
let Add5CookiePrice = 104;
let Add10CookiePrice = 269;
let Add50CookiePrice = 1200;

//AUTO ADDITION COOKIES PRICES
let AutoAdd1CookiePrice = 44;
let AutoAdd5CookiePrice = 169;
let AutoAdd10CookiePrice = 690;
let AutoAdd50CookiePrice = 1699;


BigCookie.onclick = function(){
  NumOfCookies += CookiePerClick;
  NumOfCookies == 1 ? CookiePreview.textContent = NumOfCookies + " " + "Cookie" : CookiePreview.textContent = NumOfCookies + " " + "Cookies";
  BigCookie.setAttribute("style", "transform: scale(0.96);");
  
  setTimeout(() => {
    BigCookie.setAttribute("style", "transform: scale(1);");
  }, 150);
}
//ADDITION COOKIES FUNCTIONS

//+1 Cookie
Add1Cookie.onclick = function(){
  if(NumOfCookies >= Add1CookiePrice){
    CookiePerClick+=1;
    NumOfCookies-=Add1CookiePrice;
    setTimeout(() => {
      Add1CookiePrice+=5;
      document.querySelector("#Add1Cookie p").textContent = Add1CookiePrice + " " + "Cookies";
    }, 100);
    NumOfCookies == 1 ? CookiePreview.textContent = NumOfCookies + " " + "Cookie" : CookiePreview.textContent = NumOfCookies + " " + "Cookies";
  }
  cookiesPerClickPreview.textContent = CookiePerClick == 1 ? cookiesPerClickPreview.textContent = CookiePerClick + " " + "Cookie per click" : cookiesPerClickPreview.textContent = CookiePerClick + " " + "Cookies per click";
}
//+5 Cookies
Add5Cookie.onclick = function(){
  if(NumOfCookies >= Add5CookiePrice){
    CookiePerClick+=5;
    NumOfCookies-=Add5CookiePrice;
    setTimeout(() => {
      Add5CookiePrice+=10;
      document.querySelector("#Add5Cookie p").textContent = Add5CookiePrice + " " + "Cookies";
    }, 100);
    NumOfCookies == 1 ? CookiePreview.textContent = NumOfCookies + " " + "Cookie" : CookiePreview.textContent = NumOfCookies + " " + "Cookies";
  }
  cookiesPerClickPreview.textContent = CookiePerClick == 1 ? cookiesPerClickPreview.textContent = CookiePerClick + " " + "Cookie per click" : cookiesPerClickPreview.textContent = CookiePerClick + " " + "Cookies per click";
}
//+10 Cookies
Add10Cookie.onclick = function(){
  if(NumOfCookies >= Add10CookiePrice){
    CookiePerClick+=10;
    NumOfCookies-=Add10CookiePrice;
    setTimeout(() => {
      Add10CookiePrice+=50;
      document.querySelector("#Add10Cookie p").textContent = Add10CookiePrice + " " + "Cookies";
    }, 100);
    NumOfCookies == 1 ? CookiePreview.textContent = NumOfCookies + " " + "Cookie" : CookiePreview.textContent = NumOfCookies + " " + "Cookies";
  }
  cookiesPerClickPreview.textContent = CookiePerClick == 1 ? cookiesPerClickPreview.textContent = CookiePerClick + " " + "Cookie per click" : cookiesPerClickPreview.textContent = CookiePerClick + " " + "Cookies per click";
}
//+50 Cookies
Add50Cookie.onclick = function(){
  if(NumOfCookies >= Add50CookiePrice){
    CookiePerClick+=50;
    NumOfCookies-=Add50CookiePrice;
    setTimeout(() => {
      Add1CookiePrice+=690;
      document.querySelector("#Add50Cookie p").textContent = Add1CookiePrice + " " + "Cookies";
    }, 100);
    NumOfCookies == 1 ? CookiePreview.textContent = NumOfCookies + " " + "Cookie" : CookiePreview.textContent = NumOfCookies + " " + "Cookies";
  }
  cookiesPerClickPreview.textContent = CookiePerClick == 1 ? cookiesPerClickPreview.textContent = CookiePerClick + " " + "Cookie per click" : cookiesPerClickPreview.textContent = CookiePerClick + " " + "Cookies per click";
}

//AUTO ADDITION COOKIES FUNCTION

//Auto +1 Cookie
AutoAdd1Cookie.onclick = function(){
  if(NumOfCookies >= AutoAdd1CookiePrice){
    NumOfCookies-=AutoAdd1CookiePrice;
    CookiePerSecond+=1;
    setTimeout(() => {
      AutoAdd1CookiePrice+=9;
      document.querySelector("#AutoAdd1Cookie p").textContent = AutoAdd1CookiePrice + " " + "Cookies";
    }, 100);
    NumOfCookies == 1 ? CookiePreview.textContent = NumOfCookies + " " + "Cookie" : CookiePreview.textContent = NumOfCookies + " " + "Cookies";
    cookiesPerSecondPreview.textContent = CookiePerSecond == 1 ? CookiePerSecond + " " + "Cookie per second" : CookiePerSecond + " " + "Cookies per second"
  }
}
//Auto +5 Cookies
AutoAdd5Cookie.onclick = function(){
  if(NumOfCookies >= AutoAdd5CookiePrice){
    NumOfCookies-=AutoAdd5CookiePrice;
    CookiePerSecond+=5;
    setTimeout(() => {
      AutoAdd5CookiePrice+=21;
      document.querySelector("#AutoAdd5Cookie p").textContent = AutoAdd5CookiePrice + " " + "Cookies";
    }, 100);
    NumOfCookies == 1 ? CookiePreview.textContent = NumOfCookies + " " + "Cookie" : CookiePreview.textContent = NumOfCookies + " " + "Cookies";
    cookiesPerSecondPreview.textContent = CookiePerSecond == 1 ? CookiePerSecond + " " + "Cookie per second" : CookiePerSecond + " " + "Cookies per second"
  }
}
//Auto +10 Cookies
AutoAdd10Cookie.onclick = function(){
  if(NumOfCookies >= AutoAdd10CookiePrice){
    NumOfCookies-=AutoAdd10CookiePrice;
    setTimeout(() => {
      AutoAdd10CookiePrice+=69;
      document.querySelector("#AutoAdd10Cookie p").textContent = AutoAdd10CookiePrice + " " + "Cookies";
    }, 100);
    CookiePerSecond+=10;
    NumOfCookies == 1 ? CookiePreview.textContent = NumOfCookies + " " + "Cookie" : CookiePreview.textContent = NumOfCookies + " " + "Cookies";
    cookiesPerSecondPreview.textContent = CookiePerSecond == 1 ? CookiePerSecond + " " + "Cookie per second" : CookiePerSecond + " " + "Cookies per second"
  }
}
//Auto +50 Cookies
AutoAdd50Cookie.onclick = function(){
  if(NumOfCookies >= AutoAdd50CookiePrice){
    NumOfCookies-=AutoAdd50CookiePrice;
    setTimeout(() => {
      AutoAdd1CookiePrice+=769;
      document.querySelector("#AutoAdd50Cookie p").textContent = AutoAdd50CookiePrice + " " + "Cookies";
    }, 100);
    CookiePerSecond+=50;
    NumOfCookies == 1 ? CookiePreview.textContent = NumOfCookies + " " + "Cookie" : CookiePreview.textContent = NumOfCookies + " " + "Cookies";
    cookiesPerSecondPreview.textContent = CookiePerSecond == 1 ? CookiePerSecond + " " + "Cookie per second" : CookiePerSecond + " " + "Cookies per second"
  }
}
setInterval(() => {
  NumOfCookies+=CookiePerSecond;
  CookiePreview.textContent = NumOfCookies == 1 ? CookiePreview.textContent = NumOfCookies + " " + "Cookie" : CookiePreview.textContent = NumOfCookies + " " + "Cookies";
}, 1000)