(function () {
    function smoothScrollToElementWithOffset(element, offsetPx = 0) {
        if (!element) return;
        const rect = element.getBoundingClientRect();
        const absoluteTop = rect.top + window.scrollY;
        window.scrollTo({ top: absoluteTop - offsetPx, behavior: "smooth" });
    }

    const videoSection = document.getElementById("video-block");
    const footerElem = document.getElementById("footer-area");

    const ghostBtn = document.getElementById("seeItInActionBtn");
    if (ghostBtn && videoSection) {
        ghostBtn.addEventListener("click", (e) => {
            e.preventDefault();
            smoothScrollToElementWithOffset(videoSection, 48);
        });
    }

    const primaryCta = document.querySelector(".btn-primary");
    if (primaryCta && footerElem) {
        primaryCta.addEventListener("click", (e) => {
            e.preventDefault();
            smoothScrollToElementWithOffset(footerElem, 32);
        });
    }

    const navCta = document.querySelector(".nav-cta-text");
    if (navCta && footerElem) {
        navCta.addEventListener("click", (e) => {
            e.preventDefault();
            smoothScrollToElementWithOffset(footerElem, 32);
        });
    }

    // Video facade
    const facade = document.getElementById("videoFacade");
    const player = document.getElementById("voomlyPlayer");
    if (facade && player) {
        facade.addEventListener("click", () => {
            facade.classList.add("hidden");
            player.style.display = "block";
        });
    }

    if (window.location.hash === "#video-block") {
        setTimeout(() => {
            const target = document.getElementById("video-block");
            if (target) smoothScrollToElementWithOffset(target, 48);
        }, 100);
    }

    // Rotating testimonials
    const slides = document.querySelectorAll(".testimonial-slide");
    const dotsContainer = document.getElementById("testimonialDots");
    let currentIndex = 0;
    let intervalId = null;

    function createDots() {
        if (!dotsContainer) return;
        dotsContainer.innerHTML = "";
        slides.forEach((_, idx) => {
            const dot = document.createElement("button");
            dot.setAttribute("type", "button");
            dot.classList.add("dot");
            if (idx === currentIndex) dot.classList.add("active");
            dot.setAttribute("aria-label", `Go to testimonial ${idx + 1}`);
            dot.addEventListener("click", () => {
                stopAutoRotate();
                showSlide(idx);
                startAutoRotate();
            });
            dotsContainer.appendChild(dot);
        });
    }

    function showSlide(index) {
        if (index < 0) index = 0;
        if (index >= slides.length) index = 0;
        slides.forEach((slide, i) => slide.classList.toggle("active", i === index));
        document.querySelectorAll(".dot").forEach((dot, i) => dot.classList.toggle("active", i === index));
        currentIndex = index;
    }

    function nextSlide() {
        showSlide(currentIndex + 1 >= slides.length ? 0 : currentIndex + 1);
    }

    function startAutoRotate() {
        if (intervalId) clearInterval(intervalId);
        intervalId = setInterval(nextSlide, 6000);
    }

    function stopAutoRotate() {
        if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
        }
    }

    if (slides.length > 0) {
        createDots();
        startAutoRotate();
        const container = document.getElementById("testimonialContainer");
        if (container) {
            container.addEventListener("mouseenter", stopAutoRotate);
            container.addEventListener("mouseleave", startAutoRotate);
        }
        document.addEventListener("visibilitychange", () => {
            document.hidden ? stopAutoRotate() : startAutoRotate();
        });
    }

    const navPreviewBtn = document.getElementById("navPreviewBtn");
    if (navPreviewBtn && videoSection) {
        navPreviewBtn.addEventListener("click", () => {
            smoothScrollToElementWithOffset(videoSection, 48);
        });
    }

    const featuresSection = document.getElementById("features-block");
    const navFeaturesBtn = document.getElementById("navFeaturesBtn");
    if (navFeaturesBtn && featuresSection) {
        navFeaturesBtn.addEventListener("click", () => {
            smoothScrollToElementWithOffset(featuresSection, 48);
        });
    }

    // Feature filter
    const filterBtns = document.querySelectorAll(".filter-btn");
    const featCards = document.querySelectorAll(".feat-card");
    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            const filter = btn.getAttribute("data-filter");
            requestAnimationFrame(() => {
                featCards.forEach(card => {
                    if (filter === "all" || card.getAttribute("data-category") === filter) {
                        card.classList.remove("hidden");
                    } else {
                        card.classList.add("hidden");
                    }
                });
            });
        });
    });

    const revealElements = document.querySelectorAll('.reveal');

    if (revealElements.length > 0) {
        const revealObserver = new IntersectionObserver(
            function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        revealObserver.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.12,
                rootMargin: '0px 0px -40px 0px'
            }
        );

        revealElements.forEach(function(el) {
            revealObserver.observe(el);
        });
    }
})();
