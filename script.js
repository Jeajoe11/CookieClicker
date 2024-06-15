//ADDITION COOKIES 
const Add1Cookie = document.getElementById("Add1Cookie");
const Add5Cookie = document.getElementById("Add5Cookie");
const Add10Cookie = document.getElementById("Add10Cookie");
const Add50Cookie = document.getElementById("Add50Cookie");
const Add150Cookie = document.getElementById("Add150Cookie");

//AUTO ADDITION COOKIES
const AutoAdd1Cookie = document.getElementById("AutoAdd1Cookie");
const AutoAdd5Cookie = document.getElementById("AutoAdd5Cookie");
const AutoAdd10Cookie = document.getElementById("AutoAdd10Cookie");
const AutoAdd50Cookie = document.getElementById("AutoAdd50Cookie");
const AutoAdd150Cookie = document.getElementById("AutoAdd150Cookie");

//EXTRA
const BigCookie = document.getElementById("myCookie");
const BigCookieCookie = document.querySelector(".myCookie");
const RebirthBtnAfter = document.querySelector("#RebirthBtn::after")

//PREVIEWS
const CookiePreview = document.getElementById("totalCookiesPreview");
const cookiesPerClickPreview = document.getElementById("cookiesPerClick");
const cookiesPerSecondPreview = document.getElementById("cookiesPerSecond");
const RebirthBtn = document.getElementById("RebirthBtn");
const CookieMultiplierPreview = document.getElementById("CookieMultiplierPreview");


//VARIABLES
let NumOfCookies = 0;
let CookieMultiplier = 1;
let CookiePerClick = 1*CookieMultiplier;
let CookiePerSecond = 0*CookieMultiplier;
let PourcentageValue = 0;
let RebirthAmount = 50000;

//ADDITION COOKIES PRICES
let Add1CookiePrice = 12*CookieMultiplier;
let Add5CookiePrice = 104*CookieMultiplier;
let Add10CookiePrice = 269*CookieMultiplier;
let Add50CookiePrice = 1200*CookieMultiplier;
let Add150CookiePrice = 2169*CookieMultiplier;

//AUTO ADDITION COOKIES PRICES
let AutoAdd1CookiePrice = 44;
let AutoAdd5CookiePrice = 169;
let AutoAdd10CookiePrice = 690;
let AutoAdd50CookiePrice = 1699;
let AutoAdd150CookiePrice = 4999;

BigCookie.onclick = function(){
  NumOfCookies += CookiePerClick*CookieMultiplier;
  NumOfCookies == 1 ? CookiePreview.textContent = NumOfCookies + " " + "Cookie" : CookiePreview.textContent = NumOfCookies + " " + "Cookies";
  PourcentageValue = NumOfCookies/RebirthAmount*100;
  RebirthBtn.setAttribute("style", `--after-width: ${PourcentageValue}%`);
  RebirthBtn.setAttribute("after-width",`${PourcentageValue.toFixed(0)}%`);
  BigCookieCookie.setAttribute("style", "transform: scale(0.96);");
  
  setTimeout(() => {
    BigCookieCookie.setAttribute("style", "transform: scale(1);");
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
      document.querySelector("#Add1Cookie p span").textContent = Add1CookiePrice;
    }, 100);
    NumOfCookies == 1 ? CookiePreview.textContent = NumOfCookies + " " + "Cookie" : CookiePreview.textContent = NumOfCookies + " " + "Cookies";
  }
  cookiesPerClickPreview.textContent = CookiePerClick == 1 ? cookiesPerClickPreview.textContent = CookiePerClick + " " + "Cookie per click" : cookiesPerClickPreview.textContent = CookiePerClick + " " + "Cookies per click";
  PourcentageValue = NumOfCookies/RebirthAmount*100;
  RebirthBtn.setAttribute("style", `--after-width: ${PourcentageValue}%`);
  RebirthBtn.setAttribute("after-width",`${PourcentageValue.toFixed(0)}%`);
}
//+5 Cookies
Add5Cookie.onclick = function(){
  if(NumOfCookies >= Add5CookiePrice){
    CookiePerClick+=5;
    NumOfCookies-=Add5CookiePrice;
    setTimeout(() => {
      Add5CookiePrice+=10;
      document.querySelector("#Add5Cookie p span").textContent = Add5CookiePrice;
    }, 100);
    NumOfCookies == 1 ? CookiePreview.textContent = NumOfCookies + " " + "Cookie" : CookiePreview.textContent = NumOfCookies + " " + "Cookies";
  }
  cookiesPerClickPreview.textContent = CookiePerClick == 1 ? cookiesPerClickPreview.textContent = CookiePerClick + " " + "Cookie per click" : cookiesPerClickPreview.textContent = CookiePerClick + " " + "Cookies per click";
  PourcentageValue = NumOfCookies/RebirthAmount*100;
  RebirthBtn.setAttribute("style", `--after-width: ${PourcentageValue}%`);
  RebirthBtn.setAttribute("after-width",`${PourcentageValue.toFixed(0)}%`);
}
//+10 Cookies
Add10Cookie.onclick = function(){
  if(NumOfCookies >= Add10CookiePrice){
    CookiePerClick+=10;
    NumOfCookies-=Add10CookiePrice;
    setTimeout(() => {
      Add10CookiePrice+=50;
      document.querySelector("#Add10Cookie p span").textContent = Add10CookiePrice;
    }, 100);
    NumOfCookies == 1 ? CookiePreview.textContent = NumOfCookies + " " + "Cookie" : CookiePreview.textContent = NumOfCookies + " " + "Cookies";
  }
  cookiesPerClickPreview.textContent = CookiePerClick == 1 ? cookiesPerClickPreview.textContent = CookiePerClick + " " + "Cookie per click" : cookiesPerClickPreview.textContent = CookiePerClick + " " + "Cookies per click";
  PourcentageValue = NumOfCookies/RebirthAmount*100;
  RebirthBtn.setAttribute("style", `--after-width: ${PourcentageValue}%`);
  RebirthBtn.setAttribute("after-width",`${PourcentageValue.toFixed(0)}%`);
}
//+50 Cookies
Add50Cookie.onclick = function(){
  if(NumOfCookies >= Add50CookiePrice){
    CookiePerClick+=50;
    NumOfCookies-=Add50CookiePrice;
    setTimeout(() => {
      Add1CookiePrice+=690;
      document.querySelector("#Add50Cookie p span").textContent = Add50CookiePrice;
    }, 100);
    NumOfCookies == 1 ? CookiePreview.textContent = NumOfCookies + " " + "Cookie" : CookiePreview.textContent = NumOfCookies + " " + "Cookies";
  }
  cookiesPerClickPreview.textContent = CookiePerClick == 1 ? cookiesPerClickPreview.textContent = CookiePerClick + " " + "Cookie per click" : cookiesPerClickPreview.textContent = CookiePerClick + " " + "Cookies per click";
  PourcentageValue = NumOfCookies/RebirthAmount*100;
  RebirthBtn.setAttribute("style", `--after-width: ${PourcentageValue}%`);
  RebirthBtn.setAttribute("after-width",`${PourcentageValue.toFixed(0)}%`);
}

//AUTO ADDITION COOKIES FUNCTION

//Auto +1 Cookie
AutoAdd1Cookie.onclick = function(){
  if(NumOfCookies >= AutoAdd1CookiePrice){
    NumOfCookies-=AutoAdd1CookiePrice;
    CookiePerSecond+=1;
    setTimeout(() => {
      AutoAdd1CookiePrice+=9;
      document.querySelector("#AutoAdd1Cookie p span").textContent = AutoAdd1CookiePrice;
    }, 100);
    NumOfCookies == 1 ? CookiePreview.textContent = NumOfCookies + " " + "Cookie" : CookiePreview.textContent = NumOfCookies + " " + "Cookies";
    cookiesPerSecondPreview.textContent = CookiePerSecond == 1 ? CookiePerSecond + " " + "Cookie per second" : CookiePerSecond + " " + "Cookies per second";
    PourcentageValue = NumOfCookies/RebirthAmount*100;
    RebirthBtn.setAttribute("style", `--after-width: ${PourcentageValue}%`);
    RebirthBtn.setAttribute("after-width",`${PourcentageValue.toFixed(0)}%`);
  }
}
//Auto +5 Cookies
AutoAdd5Cookie.onclick = function(){
  if(NumOfCookies >= AutoAdd5CookiePrice){
    NumOfCookies-=AutoAdd5CookiePrice;
    CookiePerSecond+=5;
    setTimeout(() => {
      AutoAdd5CookiePrice+=21;
      document.querySelector("#AutoAdd5Cookie p span").textContent = AutoAdd5CookiePrice;
    }, 100);
    NumOfCookies == 1 ? CookiePreview.textContent = NumOfCookies + " " + "Cookie" : CookiePreview.textContent = NumOfCookies + " " + "Cookies";
    cookiesPerSecondPreview.textContent = CookiePerSecond == 1 ? CookiePerSecond + " " + "Cookie per second" : CookiePerSecond + " " + "Cookies per second";
    PourcentageValue = NumOfCookies/RebirthAmount*100;
    RebirthBtn.setAttribute("style", `--after-width: ${PourcentageValue}%`);
    RebirthBtn.setAttribute("after-width",`${PourcentageValue.toFixed(0)}%`);
  }
}
//Auto +10 Cookies
AutoAdd10Cookie.onclick = function(){
  if(NumOfCookies >= AutoAdd10CookiePrice){
    NumOfCookies-=AutoAdd10CookiePrice;
    setTimeout(() => {
      AutoAdd10CookiePrice+=69;
      document.querySelector("#AutoAdd10Cookie p span").textContent = AutoAdd10CookiePrice;
    }, 100);
    CookiePerSecond+=10;
    NumOfCookies == 1 ? CookiePreview.textContent = NumOfCookies + " " + "Cookie" : CookiePreview.textContent = NumOfCookies + " " + "Cookies";
    cookiesPerSecondPreview.textContent = CookiePerSecond == 1 ? CookiePerSecond + " " + "Cookie per second" : CookiePerSecond + " " + "Cookies per second";
    PourcentageValue = NumOfCookies/RebirthAmount*100;
    RebirthBtn.setAttribute("style", `--after-width: ${PourcentageValue}%`);
    RebirthBtn.setAttribute("after-width",`${PourcentageValue.toFixed(0)}%`);
  }
}
//Auto +50 Cookies
AutoAdd50Cookie.onclick = function(){
  if(NumOfCookies >= AutoAdd50CookiePrice){
    NumOfCookies-=AutoAdd50CookiePrice;
    setTimeout(() => {
      AutoAdd50CookiePrice+=769;
      document.querySelector("#AutoAdd50Cookie p span").textContent = AutoAdd50CookiePrice;
    }, 100);
    CookiePerSecond+=50;
    NumOfCookies == 1 ? CookiePreview.textContent = NumOfCookies + " " + "Cookie" : CookiePreview.textContent = NumOfCookies + " " + "Cookies";
    cookiesPerSecondPreview.textContent = CookiePerSecond == 1 ? CookiePerSecond + " " + "Cookie per second" : CookiePerSecond + " " + "Cookies per second";
    PourcentageValue = NumOfCookies/RebirthAmount*100;
    RebirthBtn.setAttribute("style", `--after-width: ${PourcentageValue}%`);
    RebirthBtn.setAttribute("after-width",`${PourcentageValue.toFixed(0)}%`);
  }
}
//Auto +150 Cookies
AutoAdd150Cookie.onclick = function(){
  if(NumOfCookies >= AutoAdd150CookiePrice){
    NumOfCookies-=AutoAdd150CookiePrice;
    setTimeout(() => {
      AutoAdd150CookiePrice+=1169;
      document.querySelector("#AutoAdd150Cookie p span").textContent = AutoAdd150CookiePrice;
    }, 100);
    CookiePerSecond+=150;
    NumOfCookies == 1 ? CookiePreview.textContent = NumOfCookies + " " + "Cookie" : CookiePreview.textContent = NumOfCookies + " " + "Cookies";
    cookiesPerSecondPreview.textContent = CookiePerSecond == 1 ? CookiePerSecond + " " + "Cookie per second" : CookiePerSecond + " " + "Cookies per second"
    PourcentageValue = NumOfCookies/RebirthAmount*100;
    RebirthBtn.setAttribute("style", `--after-width: ${PourcentageValue}%`);
    RebirthBtn.setAttribute("after-width",`${PourcentageValue.toFixed(0)}%`);
  }
}
RebirthBtn.setAttribute("pourcentageValue", PourcentageValue);
RebirthBtn.onclick = function(){
  if(PourcentageValue >= 100) {
    CookieMultiplier++;
    CookieMultiplierPreview.textContent = CookieMultiplier + "x" + " " + "Cookies"
    NumOfCookies = 0;
    CookiePerClick = 1;
    CookiePerSecond = 0;
    PourcentageValue = 0;
    RebirthAmount*5;
    cookiesPerClickPreview.textContent = CookiePerClick == 1 ? cookiesPerClickPreview.textContent = CookiePerClick + " " + "Cookie per click" : cookiesPerClickPreview.textContent = CookiePerClick + " " + "Cookies per click";
    cookiesPerSecondPreview.textContent = CookiePerSecond == 1 ? CookiePerSecond + " " + "Cookie per second" : CookiePerSecond + " " + "Cookies per second";
    NumOfCookies == 1 ? CookiePreview.textContent = NumOfCookies + " " + "Cookie" : CookiePreview.textContent = NumOfCookies + " " + "Cookies";
    PourcentageValue = NumOfCookies/RebirthAmount*100;
    RebirthBtn.setAttribute("style", `--after-width: ${PourcentageValue}%`);
    RebirthBtn.setAttribute("after-width",`${PourcentageValue.toFixed(0)}%`);
  }
  else {
    RebirthBtn.onclick = function(){
      CookieMultiplierPreview.setAttribute("style", "font-size: 30px;")
        CookieMultiplierPreview.textContent = "You have not reached the requested amount of Cookies. Please try again once you have gotten" + " " + (100 - PourcentageValue).toFixed(0) + "%" + " " + "more Cookies.";
      setTimeout(()=> {
        CookieMultiplierPreview.textContent = CookieMultiplier + "x" + " " + "Cookies";
        CookieMultiplierPreview.setAttribute("style", "font-size: 50px;")
      }, 4000)
    }
  };
}
PourcentageValue = NumOfCookies/RebirthAmount*100;
RebirthBtn.setAttribute("style", `--after-width: ${PourcentageValue}%`);
RebirthBtn.setAttribute("after-width",`${PourcentageValue.toFixed(0)}%`);

setInterval(() => {
  NumOfCookies+=CookiePerSecond*CookieMultiplier;
  CookiePreview.textContent = NumOfCookies == 1 ? CookiePreview.textContent = NumOfCookies + " " + "Cookie" : CookiePreview.textContent = NumOfCookies + " " + "Cookies";
}, 1000)