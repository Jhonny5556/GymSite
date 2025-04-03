document.addEventListener("DOMContentLoaded", function () {
    const body = document.querySelector("body");
    const footer = document.createElement("footer");
    footer.innerHTML = `
        <ul class="footer-socials">
            <li><a href="https://www.instagram.com/power_houseequipment/" target="blank" title="Seguimi su Instagram">
                <img src="img/social/instagram.svg" alt="Instagram Icon" width="50" height="50">
            </a></li>
            <li><a href="https://www.youtube.com/@justjoseph-bs" target="blank" title="Iscriviti al canale youtube">
                <img src="img/social/youtube.svg" alt="Youtube Icon" width="50" height="50">
            </a></li>
            <li><a href="https://x.com/" target="blank" title="Twitta sul tuo profilo">
                <img src="img/social/twitter.svg" alt="Twitter Icon" width="50" height="50">
            </a></li>
        </ul>
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