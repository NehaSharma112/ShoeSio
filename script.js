var logo = document.querySelector(".logo");
var Home = document.getElementById("Home");
var Products = document.getElementById("Products");
var About = document.getElementById("About");
var Reveiw = document.getElementById("Reveiw");
var Services = document.getElementById("Services");
var Contact_Us = document.getElementById("Contact Us");
// Home.addEventListener("click", window.scrollTo("document.querySelector(".home")"));
Home.scrollIntoView({behavior:"smooth"});
Home.addEventListener("click",()=>{
    document.querySelector(".home").scrollIntoView({behavior:"smooth"});
});
Products.addEventListener("click",()=>{
    document.querySelector(".Products").scrollIntoView({behavior:"smooth"});
});
Reveiw.addEventListener("click",()=>{
    document.querySelector(".review").scrollIntoView({behavior:"smooth"});
});
Services.addEventListener("click",()=>{
    document.querySelector(".delivery").scrollIntoView({behavior:"smooth"});
});
Contact_Us.addEventListener("click",()=>{
    document.querySelector(".contact").scrollIntoView({behavior:"smooth"});
});