document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    const navigationbar = document.createElement("nav");
    navigationbar.innerHTML = `
        <!-- Hamburger Menu per mobile -->
        <div class="hamburger" id="hamburger">&#9776;</div>

        <!-- Logo o titolo a sinistra -->
        <div class="logo">
            <a href="#">💪</a>
        </div>
        <ul id="menu">
            <li><a href="home.html">Home</a></li>
            <li><a href="about.html">Chi Siamo</a></li>
            <li><a href="shop.html">Negozio</a></li>
            <!-- Form di ricerca -->
            <li>
                <form action="shop.html" method="get">
                    <input type="text" id="ricercaProdotto" placeholder="Cerca prodotto...">
                    <button type="submit">Cerca</button>
                </form>
            </li>
            <li class="right">
                <div class="toggle-container">
                    <div class="toggle-button"></div>
                </div>
            </li>
        </ul>
    `;
    header.insertAdjacentElement('afterend', navigationbar);
    //header.appendChild(navigationbar);

    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("menu");

    hamburger.addEventListener("click", () => {
        menu.classList.toggle("show");
    });

    // Controlla se esiste un valore salvato nel Local Storage
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }

    // Aggiunge l'evento per il toggle
    document.querySelector(".toggle-container").addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        // Salva la scelta dell'utente nel Local Storage
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });
});