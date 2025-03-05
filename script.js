document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".fade-in");
    const serviceItems = document.querySelectorAll(".service-item");
    const priceSection = document.getElementById("prices");
    const priceList = document.getElementById("price-list");
    const navToggle = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector("nav ul");

    function revealOnScroll() {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight * 0.85) {
                section.classList.add("visible");
            }
        });
    }

    function scrollToSection(id) {
        document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    }

    function showPrices(service) {
        const prices = {
            nails: "Manicure base - €20, Gel - €35, Ricostruzione - €50",
            massage: "Massaggio rilassante 30min - €40, Massaggio completo 60min - €70",
            waxing: "Gambe intere - €25, Ascelle - €10, Sopracciglia - €8",
            facial: "Pulizia viso - €30, Trattamento anti-age - €50"
        };
        
        priceList.innerHTML = `<p>${prices[service] || "Contattaci per maggiori informazioni"}</p>`;
        priceSection.classList.remove("hidden");
        priceSection.scrollIntoView({ behavior: "smooth" });
    }

    window.addEventListener("scroll", revealOnScroll);
    serviceItems.forEach(item => item.addEventListener("click", () => showPrices(item.getAttribute("onclick").split("'")[1])));
    
    navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

    revealOnScroll();
});