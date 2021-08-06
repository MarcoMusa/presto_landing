
//SCROLLNAVBAR

document.addEventListener("scroll", () => {
    let navbar = document.querySelector("#navbar");
    let scrolled = window.scrollY;


    if (scrolled > 100) {

        navbar.classList.remove("bg-transparent")
        navbar.classList.add("bg-dark-blu")
        navbar.classList.add("shadow")

    } else {
        navbar.classList.add('bg-transparent')
        navbar.classList.remove("shadow")
        navbar.classList.remove("bg-dark-blu")
    }

});


//ROTAZIONE TOGGLER

let menu = document.querySelector('#menu');

menu.addEventListener("click", () => {
    plus.classList.toggle("rotate-45")
    plus.classList.toggle("text-accent")
    plus.classList.toggle("shadow")
})

