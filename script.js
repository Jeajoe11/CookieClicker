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

BigCookie.onclick = function(){
  NumOfCookies += CookiePerClick;
  NumOfCookies == 1 ? CookiePreview.textContent = NumOfCookies + " " + "Cookie" : CookiePreview.textContent = NumOfCookies + " " + "Cookies";
  BigCookie.setAttribute("style", "transform: scale(0.96);");
  
  setTimeout(() => {
    BigCookie.setAttribute("style", "transform: scale(1);");
  }, 150);
}
Add1Cookie.onclick = function(){
  if(NumOfCookies >= 1){
    CookiePerClick+=1;
    NumOfCookies-=1;
    NumOfCookies == 1 ? CookiePreview.textContent = NumOfCookies + " " + "Cookie" : CookiePreview.textContent = NumOfCookies + " " + "Cookies";
  }
  cookiesPerClickPreview.textContent = CookiePerClick == 1 ? cookiesPerClickPreview.textContent = CookiePerClick + " " + "Cookie per click" : cookiesPerClickPreview.textContent = CookiePerClick + " " + "Cookies per click";
}
Add5Cookie.onclick = function(){
  if(NumOfCookies >= 5){
    CookiePerClick+=5;
    NumOfCookies-=5;
    NumOfCookies == 1 ? CookiePreview.textContent = NumOfCookies + " " + "Cookie" : CookiePreview.textContent = NumOfCookies + " " + "Cookies";
  }
  cookiesPerClickPreview.textContent = CookiePerClick == 1 ? cookiesPerClickPreview.textContent = CookiePerClick + " " + "Cookie per click" : cookiesPerClickPreview.textContent = CookiePerClick + " " + "Cookies per click";
}
Add10Cookie.onclick = function(){
  if(NumOfCookies >= 10){
    CookiePerClick+=10;
    NumOfCookies-=10;
    NumOfCookies == 1 ? CookiePreview.textContent = NumOfCookies + " " + "Cookie" : CookiePreview.textContent = NumOfCookies + " " + "Cookies";
  }
  cookiesPerClickPreview.textContent = CookiePerClick == 1 ? cookiesPerClickPreview.textContent = CookiePerClick + " " + "Cookie per click" : cookiesPerClickPreview.textContent = CookiePerClick + " " + "Cookies per click";
}
Add50Cookie.onclick = function(){
  if(NumOfCookies >= 50){
    CookiePerClick+=50;
    NumOfCookies-=50;
    NumOfCookies == 1 ? CookiePreview.textContent = NumOfCookies + " " + "Cookie" : CookiePreview.textContent = NumOfCookies + " " + "Cookies";
  }
  cookiesPerClickPreview.textContent = CookiePerClick == 1 ? cookiesPerClickPreview.textContent = CookiePerClick + " " + "Cookie per click" : cookiesPerClickPreview.textContent = CookiePerClick + " " + "Cookies per click";
}
AutoAdd1Cookie.onclick = function(){
  if(NumOfCookies >= 1){
    NumOfCookies-=1;
    CookiePerSecond+=1;
    NumOfCookies == 1 ? CookiePreview.textContent = NumOfCookies + " " + "Cookie" : CookiePreview.textContent = NumOfCookies + " " + "Cookies";
    cookiesPerSecondPreview.textContent = CookiePerSecond == 1 ? CookiePerSecond + " " + "Cookie per second" : CookiePerSecond + " " + "Cookies per second"
  }
}
AutoAdd5Cookie.onclick = function(){
  if(NumOfCookies >= 5){
    NumOfCookies-=5;
    CookiePerSecond+=5;
    NumOfCookies == 1 ? CookiePreview.textContent = NumOfCookies + " " + "Cookie" : CookiePreview.textContent = NumOfCookies + " " + "Cookies";
    cookiesPerSecondPreview.textContent = CookiePerSecond == 1 ? CookiePerSecond + " " + "Cookie per second" : CookiePerSecond + " " + "Cookies per second"
  }
}
AutoAdd10Cookie.onclick = function(){
  if(NumOfCookies >= 10){
    NumOfCookies-=10;
    CookiePerSecond+=10;
    NumOfCookies == 1 ? CookiePreview.textContent = NumOfCookies + " " + "Cookie" : CookiePreview.textContent = NumOfCookies + " " + "Cookies";
    cookiesPerSecondPreview.textContent = CookiePerSecond == 1 ? CookiePerSecond + " " + "Cookie per second" : CookiePerSecond + " " + "Cookies per second"
  }
}
AutoAdd50Cookie.onclick = function(){
  if(NumOfCookies >= 50){
    NumOfCookies-=50;
    CookiePerSecond+=50;
    NumOfCookies == 1 ? CookiePreview.textContent = NumOfCookies + " " + "Cookie" : CookiePreview.textContent = NumOfCookies + " " + "Cookies";
    cookiesPerSecondPreview.textContent = CookiePerSecond == 1 ? CookiePerSecond + " " + "Cookie per second" : CookiePerSecond + " " + "Cookies per second"
  }
}
setInterval(() => {
  NumOfCookies+=CookiePerSecond;
  CookiePreview.textContent = NumOfCookies == 1 ? CookiePreview.textContent = NumOfCookies + " " + "Cookie" : CookiePreview.textContent = NumOfCookies + " " + "Cookies";
}, 1000)
