document.addEventListener("DOMContentLoaded", function () {
    // Gestione della ricerca prodotto
    const searchInput = document.querySelector("#ricercaProdotto");
    
    if (searchInput) {
        searchInput.addEventListener("input", function () {
            const searchTerm = searchInput.value.toLowerCase();
            const products = document.querySelectorAll(".product-item");
            
            products.forEach(product => {
                const productName = product.querySelector("h3").innerText.toLowerCase();
                if (productName.includes(searchTerm)) {
                    product.style.display = "block";
                } else {
                    product.style.display = "none";
                }
            });
        });
    }
});
