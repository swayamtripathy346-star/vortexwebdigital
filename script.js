
// =======================
// Custom Cursor
// =======================

const cursor = document.querySelector(".cursor");


document.addEventListener("mousemove", function(e){

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

});





// =======================
// Scroll Reveal Animation
// =======================

const reveals = document.querySelectorAll(".reveal");


function revealOnScroll(){

    reveals.forEach(section=>{

        let windowHeight = window.innerHeight;

        let top = section.getBoundingClientRect().top;


        if(top < windowHeight - 100){

            section.classList.add("active");

        }

    });

}


window.addEventListener("scroll", revealOnScroll);

revealOnScroll();






// =======================
// Magnetic Button Effect
// =======================

const magneticButtons = document.querySelectorAll(".magnetic");


magneticButtons.forEach(button=>{


button.addEventListener("mousemove",(e)=>{


const rect = button.getBoundingClientRect();


const x = e.clientX - rect.left - rect.width/2;

const y = e.clientY - rect.top - rect.height/2;


button.style.transform =
`translate(${x * 0.25}px, ${y * 0.25}px)`;


});



button.addEventListener("mouseleave",()=>{


button.style.transform="translate(0,0)";


});


});
const faqs = document.querySelectorAll(".faq-item");

faqs.forEach(faq => {

    const btn = faq.querySelector(".faq-question");

    btn.addEventListener("click", () => {

        faq.classList.toggle("active");

    });

});
// ===========================
// BACK TO TOP
// ===========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        topBtn.style.display = "flex";

    }else{

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});
window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    document.getElementById("progress-bar").style.width = progress + "%";

});