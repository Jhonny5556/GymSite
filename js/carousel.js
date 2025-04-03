document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const productList = document.querySelector(".product-list");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    function updateProducts() {
        return document.querySelectorAll(".product-item");
    }

    let products = updateProducts();
    if (!products.length) return;

    let currentIndex = 0;
    let productWidth = products[0].offsetWidth;
    let maxIndex = products.length - 1;
    let autoScrollTimer;
    let autoScrollInterval = null; // ✅ Dichiarato correttamente
    const scrollInterval = 5000; // 5 secondi

    function updateDimensions() {
        productWidth = carousel.offsetWidth;
        products.forEach((item) => {
            item.style.minWidth = `${productWidth}px`;
        });
        maxIndex = products.length - 1;
        updateCarousel();
    }

    function updateCarousel() {
        if (currentIndex < 0) currentIndex = 0;
        if (currentIndex > maxIndex) currentIndex = maxIndex;
        productList.style.transform = `translateX(-${currentIndex * productWidth}px)`;
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === maxIndex;
    }

    function startAutoScroll() {
        stopAutoScroll(); // ✅ Evita di avviare più intervalli contemporaneamente
        autoScrollInterval = setInterval(moveToNext, scrollInterval);
    }

    function stopAutoScroll() {
        if (autoScrollInterval) {
            clearInterval(autoScrollInterval);
        }
    }

    function moveToPrev() {
        currentIndex--;
        products = updateProducts();
        updateDimensions();
        updateCarousel();
        resetAutoScroll();
    }

    function moveToNext() {
        currentIndex++;
        products = updateProducts();
        updateDimensions();
        updateCarousel();
        resetAutoScroll();
    }

    function resetAutoScroll() {
        if (autoScrollInterval) { // ✅ Controlla se esiste prima di cancellarlo
            clearInterval(autoScrollInterval);
        }
        autoScrollInterval = setInterval(moveToNext, 5000);
    }

    carousel.addEventListener("wheel", (e) => {
        e.preventDefault();
        stopAutoScroll();
        if (e.deltaY > 0) {
            moveToNext();
        } else {
            moveToPrev();
        }
        startAutoScroll();
    });

    productList.addEventListener("touchstart", (e) => {
        isDragging = true;
        startX = e.touches[0].pageX;
        scrollLeft = currentIndex * productWidth;
        stopAutoScroll();
    });

    productList.addEventListener("touchmove", (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.touches[0].pageX;
        const walk = (x - startX) * 2;
        productList.style.transform = `translateX(${-scrollLeft + walk}px)`;
    });

    productList.addEventListener("touchend", () => {
        if (!isDragging) return;
        isDragging = false;
        const endTransform = window.getComputedStyle(productList).transform;
        const matrix = new DOMMatrix(endTransform);
        const currentTranslate = matrix.m41;

        if (currentTranslate < -scrollLeft - productWidth / 3) {
            moveToNext();
        } else if (currentTranslate > -scrollLeft + productWidth / 3) {
            moveToPrev();
        }

        updateCarousel();
        startAutoScroll();
    });

    updateDimensions();
    nextBtn.addEventListener("click", moveToNext);
    prevBtn.addEventListener("click", moveToPrev);
    startAutoScroll();
    window.addEventListener("resize", updateDimensions);
    carousel.addEventListener("mouseenter", stopAutoScroll);
    carousel.addEventListener("mouseleave", startAutoScroll);
    carousel.addEventListener("touchstart", stopAutoScroll);
});
