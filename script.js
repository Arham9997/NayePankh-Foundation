// ===============================
// DARK MODE
// ===============================

const darkBtn = document.querySelector(".dark-mode-btn");

darkBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const icon = darkBtn.querySelector("i");

    if(document.body.classList.contains("dark")){

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

    }else{

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

    }

});

// ===============================
// STICKY HEADER
// ===============================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        header.style.background =
        "rgba(15,23,42,.95)";

        header.style.boxShadow =
        "0 5px 25px rgba(0,0,0,.15)";

    }

    else{

        header.style.background =
        "rgba(255,255,255,.1)";

        header.style.boxShadow = "none";

    }

});

// ===============================
// SMOOTH SCROLL
// ===============================

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target =
        document.querySelector(
        this.getAttribute("href")
        );

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// ===============================
// COUNTER ANIMATION
// ===============================

const counters =
document.querySelectorAll(
'.stat-card h2, .impact-card h3'
);

const startCounter = (counter) => {

    const target =
    parseInt(
    counter.innerText.replace(/,/g,'')
    );

    let count = 0;

    const increment =
    target / 100;

    const update = () => {

        count += increment;

        if(count < target){

            counter.innerText =
            Math.floor(count).toLocaleString() + "+";

            requestAnimationFrame(update);

        }else{

            counter.innerText =
            target.toLocaleString() + "+";

        }

    };

    update();

};

// ===============================
// INTERSECTION OBSERVER
// ===============================

const observer =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

startCounter(
entry.target
);

observer.unobserve(
entry.target
);

}

});

},

{
threshold:.5
}

);

counters.forEach(counter=>{

observer.observe(counter);

});

// ===============================
// REVEAL ANIMATION
// ===============================

const reveals =
document.querySelectorAll(

'.focus-card,\
.why-card,\
.impact-card,\
.mission-card,\
.gallery-grid img'

);

const revealObserver =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity = "1";

entry.target.style.transform =
"translateY(0)";

}

});

},

{
threshold:.2
}

);

reveals.forEach(item=>{

item.style.opacity = "0";

item.style.transform =
"translateY(50px)";

item.style.transition =
"all .7s ease";

revealObserver.observe(item);

});

// ===============================
// ACTIVE NAVIGATION
// ===============================

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(
".navbar a"
);

window.addEventListener("scroll", ()=>{

let current = "";

sections.forEach(section=>{

const sectionTop =
section.offsetTop - 150;

const sectionHeight =
section.clientHeight;

if(window.scrollY >= sectionTop){

current =
section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(

link.getAttribute("href") ===
`#${current}`

){

link.classList.add("active");

}

});

});

// ===============================
// CURRENT YEAR FOOTER
// ===============================

const yearElement =
document.querySelector(".year");

if(yearElement){

yearElement.textContent =
new Date().getFullYear();

}