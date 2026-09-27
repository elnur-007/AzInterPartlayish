document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".counter");
    const duration = 2000;
    const steps = 60;
    let hasAnimated = false;

    function animateCounters() {
        counters.forEach(counter => {
            const target = +counter.getAttribute("data-target");
            let current = 0;
            const increment = target / steps;
            let step = 0;

            const interval = setInterval(() => {
                step++;
                current += increment;

                if (step >= steps) {
                    current = target;
                    clearInterval(interval);
                }

                let formatted;
                if (target >= 1000000) {
                    formatted = Math.floor(current / 1000000) + "m+";
                } else if (target >= 1000) {
                    formatted = Math.floor(current / 1000) + "k";
                } else {
                    formatted = Math.floor(current);
                }

                counter.textContent = formatted;
            }, duration / steps);
        });
    }

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimated) {
                animateCounters();
                hasAnimated = true;
                obs.disconnect();
            }
        });
    }, {
        threshold: 0.2
    });

    const scoreSection = document.querySelector("#score");
    if (scoreSection) {
        observer.observe(scoreSection);
    }
})