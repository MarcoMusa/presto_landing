
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


//fetch accordion e creazione oggetto

fetch("./data.json")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);

        let pillsTab = document.querySelector("#pills-tab");
        let pillsTabContent = document.querySelector("#pills-tabContent");

        let categories = data.map((el) => el.category_name);

        let = frequencyCategories = categories.reduce((t, n) => {
            t[n] ? t[n]++ : (t[n] = 1);
            return t;
        }, {});

        let topCategories = Object.entries(frequencyCategories)
            .sort((a, b) => (b[1] = a[1]))
            .slice(0, 4)
            .map((el) => el[0]);

        console.log(topCategories);

        topCategories.forEach((category, indice) => {
            let li = document.createElement("li");
            li.classList.add("nav-item");
            li.innerHTML = `
            <button
                class="nav-link ${indice === 0 ? "active" : ""}"
                id="pills-${category}-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-${category}"
              >
                ${category}
              </button>
            `;
            pillsTab.appendChild(li);

            let div = document.createElement("div");
            div.classList.add("tab-pane", "fade");
            if (indice === 0) {
                div.classList.add("show", "active");
            }
            div.setAttribute("id", `pills-${category}`);
            div.textContent = `qui ci sono i prodotti della categoria ${category}`;
            pillsTabContent.appendChild(div);
        });

        console.log(pillsTab, pillsTabContent);
    });





