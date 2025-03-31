document.addEventListener("DOMContentLoaded", function () {
    
    const body = document.querySelector("body");
    const footer = document.createElement("footer");
    footer.innerHTML = `
        <div class="footer-content">
            <p>&copy; 2025 Praise the bar</p>
            <p>All rights reserved</p>
        </div>
        <ul class="footer-links">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Contact Us</a></li>
        </ul>
    `;
    body.appendChild(footer);
});