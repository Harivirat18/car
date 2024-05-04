// clickable function

var close = document.getElementById("close");
var ham = document.getElementById("bars");
var mobile = document.querySelector(".nav-mobile");

// for bar button

ham.addEventListener("click", function () {
    if (mobile.style.display === "none" || mobile.style.display === "") {
        mobile.style.display = "block";
        ham.style.display = "none";
        close.style.display = "block";
    }
});

// for close button

close.addEventListener("click", function () {
    mobile.style.display = "none";
    close.style.display = "none";
    ham.style.display = "block";
});

// feature filter section
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const all = document.getElementById("all");
const tesla = document.getElementById("tesla");
const audi = document.getElementById("audi");
const ferrari = document.getElementById("ferrari");

// Add event listeners to the buttons
btn1.addEventListener("click", function () {
    // Show all section and hide others
    all.style.display = "block";
    tesla.style.display = "none";
    audi.style.display = "none";
    ferrari.style.display = "none";
    btn2.style.background = "hsl(219 4% 7% / 1)";
    btn1.style.background = "hsl(219 69% 56% / 1)";
    btn3.style.background = "hsl(219 4% 7% / 1)";
    btn4.style.background = "hsl(219 4% 7% / 1)";
});

btn2.addEventListener("click", function () {
    // Show tesla section and hide others
    all.style.display = "none";
    tesla.style.display = "block";
    audi.style.display = "none";
    ferrari.style.display = "none";
    btn1.style.background = "hsl(219 4% 7% / 1)";
    btn2.style.background = "hsl(219 69% 56% / 1)";
    btn3.style.background = "hsl(219 4% 7% / 1)";
    btn4.style.background = "hsl(219 4% 7% / 1)";
});

btn3.addEventListener("click", function () {
    // Show audi section and hide others
    all.style.display = "none";
    tesla.style.display = "none";
    audi.style.display = "block";
    ferrari.style.display = "none";
    btn1.style.background = "hsl(219 4% 7% / 1)";
    btn3.style.background = "hsl(219 69% 56% / 1)";
    btn2.style.background = "hsl(219 4% 7% / 1)";
    btn4.style.background = "hsl(219 4% 7% / 1)";
});

btn4.addEventListener("click", function () {
    // Show audi section and hide others
    all.style.display = "none";
    tesla.style.display = "none";
    audi.style.display = "none";
    ferrari.style.display = "block";
    btn1.style.background = "hsl(219 4% 7% / 1)";
    btn4.style.background = "hsl(219 69% 56% / 1)";
    btn3.style.background = "hsl(219 4% 7% / 1)";
    btn2.style.background = "hsl(219 4% 7% / 1)";
});

// popular slider section

$(".single-item").slick({
    slidesToShow: 3,
    arrows: false,
    dots: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                // arrows: false,
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                // arrows: false,
                slidesToShow: 1,
            },
        },
    ],
});

// scroll section

const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 400,
    //reset: true
});

sr.reveal("header");
sr.reveal(`#home`);
sr.reveal(`#about`, { delay: 500, origin: "left" });
sr.reveal(`.home-btn`, { delay: 900, origin: "bottom" });
sr.reveal(`#popular`);
sr.reveal(`#features`, { origin: "left" });
sr.reveal(`#featured`);
sr.reveal(`.offer`);
sr.reveal(`.logo`, { delay: 700, origin: "left" });
sr.reveal(`.copy`, { delay: 900, origin: "left" });
sr.reveal(`footer`);
