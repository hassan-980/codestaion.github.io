function openNav() {
    document.getElementById("nav").style.transition = "all 0.5s ease-out" ;
    document.getElementById("nav").style.height = "275px";
    document.getElementById("nav-btn").style.display = "none";
    document.getElementById("nav-cls").style.display = "block";
    document.getElementById("btn-nav").style.display = "block";
}


function closeNav() {
    document.getElementById("nav").style.transition = "none" ;
    document.getElementById("nav").style.height = "50px";
    document.getElementById("nav-btn").style.display = "block";
    document.getElementById("nav-cls").style.display = "none";
    document.getElementById("btn-nav").style.display = "none";
}

function closenavbar(){
    document.getElementById("nav").style.height = "50px"  ;
    document.getElementById("nav").style.transition = "none" ;
    document.getElementById("btn-nav").style.display = "none";
    document.getElementById("nav-btn").style.display = "block";
    document.getElementById("nav-cls").style.display = "none";
    
}

a = document.getElementById("ser-href");
a.setAttribute("href", "#services-text");

a = document.getElementById("con-href");
a.setAttribute("href", "#contact");

//Javacript for the scroll indicator bar
window.addEventListener("scroll", () => {
    const indicatorBar = document.querySelector(".scroll-indicator-bar");

    const pageScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollValue = (pageScroll / height) * 100;

    indicatorBar.style.width = scrollValue + "%";
});

//Responsive navigation menu toggle
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
    navigation.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    navigation.classList.remove("active");
});


