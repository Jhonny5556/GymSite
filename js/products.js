document.addEventListener("DOMContentLoaded", function () {
    // Seleziona tutti gli elementi con classe "product-item"
    const products = document.querySelectorAll(".product-item");

    // Aggiunge un evento di click a ciascun prodotto
    products.forEach(product => {
        product.addEventListener("click", function () {
            const productName = this.querySelector("h3").innerText;
            alert(`Hai selezionato: ${productName}`);
        });
    });

    // Funzione per aggiungere un nuovo prodotto dinamicamente
    function addProduct(name, description, price) {
        const productList = document.querySelector(".product-list");
        const newProduct = document.createElement("li");
        newProduct.classList.add("product-item");
        newProduct.innerHTML = `
            <h3>${name}</h3>
            <p>${description}</p>
            <p class="price">Prezzo: $${price}</p>
        `;
        productList.appendChild(newProduct);
        
        // Aggiungi evento di click al nuovo prodotto
        newProduct.addEventListener("click", function () {
            alert(`Hai selezionato: ${name}`);
        });
    }

    // Esempio di aggiunta di un nuovo prodotto
    document.getElementById("addProductBtn")?.addEventListener("click", function () {
        addProduct("Manubri", "Set di manubri regolabili per allenamento completo.", 149.99);
    });
});
