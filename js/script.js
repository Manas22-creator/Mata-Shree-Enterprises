document.addEventListener('DOMContentLoaded', function () {
    // --- Mobile Menu Code ---
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // --- Product Page Filter Logic ---
    const filterContainer = document.querySelector(".filter-buttons");
    const productCards = document.querySelectorAll(".product-card");

    if (filterContainer) {
        filterContainer.addEventListener("click", (event) => {
            if (event.target.classList.contains("filter-btn")) {
                // Remove active class from all buttons
                const activeBtn = filterContainer.querySelector(".active");
                if (activeBtn) activeBtn.classList.remove("active");
                // Add active class to clicked button
                event.target.classList.add("active");

                const filterValue = event.target.getAttribute("data-filter");

                productCards.forEach((card) => {
                    if (card.dataset.category === filterValue || filterValue === "all") {
                        card.classList.remove("hide");
                    } else {
                        card.classList.add("hide");
                    }
                });
            }
        });
    }
});