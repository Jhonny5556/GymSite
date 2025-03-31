document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    const navigationbar = document.createElement("nav");
    navigationbar.innerHTML = `
        <!-- Hamburger Menu per mobile -->
        <div class="hamburger" id="hamburger">&#9776;</div>

        <!-- Logo o titolo a sinistra -->
        <div class="logo">
            <a href="#">Logo</a>
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
        </ul>
    `;
    header.appendChild(navigationbar);

    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("menu");

    hamburger.addEventListener("click", () => {
        menu.classList.toggle("show");
    });
});