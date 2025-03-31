document.addEventListener("DOMContentLoaded", function () {
    
    const body = document.querySelector("body");
    const footer = document.createElement("footer");
    footer.innerHTML = `
        <div class="footer-content">
            <p>&copy; 2025 Praise the bar</p>
            <p>All rights reserved</p>
        </div>
        <div class="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Contact Us</a>
        </div>
    `;
    body.appendChild(footer);
});