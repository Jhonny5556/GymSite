document.addEventListener("DOMContentLoaded", function () {
    const body = document.querySelector("body");
    const footer = document.createElement("footer");
    footer.innerHTML = `
        <div class="footer-content">
            <p>&copy; 2025 PowerHouse Equipment</p>
            <p>All rights reserved</p>
        </div>
        <ul class="footer-links">
            <li><a href="privacy_policy.htm">Privacy Policy</a></li>
            <li><a href="term_of_service.htm">Terms of Service</a></li>
            <li><a href="contact.html">Contact Us</a></li>
        </ul>
    `;
    body.appendChild(footer);
});