document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const productList = document.querySelector('.product-list');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    // Funzione per aggiornare i prodotti nel carosello
    function updateProducts() {
        return document.querySelectorAll('.product-item');
    }

    let products = updateProducts(); // Inizializza la lista di prodotti
    if (!products.length) return;
    
    let currentIndex = 0;
    let productWidth = products[0].offsetWidth;
    let maxIndex = products.length - 1;
    let autoScrollTimer;
    const scrollInterval = 5000; // 5 secondi
    
    // Funzione per aggiornare le dimensioni al resize
    function updateDimensions() {
        productWidth = carousel.offsetWidth;
        products.forEach(item => {
            item.style.minWidth = `${productWidth}px`;
        });
        maxIndex = products.length - 1;
        updateCarousel();
    }

    function updateCarousel() {
        // Controlla i limiti
        if (currentIndex < 0) currentIndex = 0;
        if (currentIndex > maxIndex) currentIndex = maxIndex;
        
        productList.style.transform = `translateX(-${currentIndex * productWidth}px)`;
        
        // Disabilita pulsanti quando si raggiungono gli estremi
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === maxIndex;
    }

    function startAutoScroll() {
        // Prima cancella il timer esistente
        stopAutoScroll();
        // Poi avvia un nuovo timer
        autoScrollTimer = setInterval(() => {
            moveToNext();
        }, scrollInterval);
    }

    function stopAutoScroll() {
        if (autoScrollTimer) {
            clearInterval(autoScrollTimer);
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
        clearInterval(autoScrollInterval);
        autoScrollInterval = setInterval(moveToNext, 5000);
    }

    // Gestione scroll con rotellina del mouse
    carousel.addEventListener('wheel', (e) => {
        e.preventDefault();
        stopAutoScroll();
        
        if (e.deltaY > 0) {
            // Scroll down (avanti)
            moveToNext();
        } else {
            // Scroll up (indietro)
            moveToPrev();
        }
        
        startAutoScroll();
    });

    // Gestione touch/swipe per mobile
    productList.addEventListener('touchstart', (e) => {
        isDragging = true;
        startX = e.touches[0].pageX;
        scrollLeft = currentIndex * productWidth;
        stopAutoScroll();
    });

    productList.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.touches[0].pageX;
        const walk = (x - startX) * 2; // Moltiplicatore per sensibilità
        productList.style.transform = `translateX(${-scrollLeft + walk}px)`;
    });

    productList.addEventListener('touchend', () => {
        if (!isDragging) return;
        isDragging = false;
        
        // Determina la direzione dello swipe
        const endTransform = window.getComputedStyle(productList).transform;
        const matrix = new DOMMatrix(endTransform);
        const currentTranslate = matrix.m41;
        
        if (currentTranslate < -scrollLeft - productWidth/3) {
            // Swipe a sinistra (avanti)
            moveToNext();
        } else if (currentTranslate > -scrollLeft + productWidth/3) {
            // Swipe a destra (indietro)
            moveToPrev();
        }
        
        updateCarousel();
        startAutoScroll();
    });


    // Inizializzazione
    updateDimensions();
    nextBtn.addEventListener('click', moveToNext);
    prevBtn.addEventListener('click', moveToPrev);
    
    // Avvia l'auto-scroll iniziale
    startAutoScroll();
    
    // Aggiorna dimensioni al resize della finestra
    window.addEventListener('resize', updateDimensions);

    // Pausa l'auto-scroll quando il mouse è sul carosello
    carousel.addEventListener('mouseenter', stopAutoScroll);
    carousel.addEventListener('mouseleave', startAutoScroll);
    carousel.addEventListener('touchstart', stopAutoScroll);
});