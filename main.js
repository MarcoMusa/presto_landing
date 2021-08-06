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