document.addEventListener('DOMContentLoaded', function () {
    const featuresSection = document.getElementById('features-section');
    const vacationSection = document.getElementById('vacation-section');
    const viewsSection = document.getElementById('views-section');
    const featuresElementsToAnimate = document.querySelectorAll('.container .features');
    const vacationElementsToAnimate = document.querySelectorAll('.container .vications');
    const whatAboutVacations = document.querySelectorAll('.container .what-about-vacations');
    function handleIntersection(entries, observer) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                if (entry.target === featuresSection) {
                    featuresElementsToAnimate.forEach((element) => {
                        element.style.opacity = 1;
                        element.style.transform = 'translateY(0)';
                    });
                } else if (entry.target === vacationSection) {
                    vacationElementsToAnimate.forEach((element) => {
                        element.style.opacity = 1;
                        element.style.transform = 'translateY(0)';
                    });
                } else if (entry.target === viewsSection) {
                    whatAboutVacations.forEach((element) => {
                        element.style.opacity = 1;
                        element.style.transform = 'translateY(0)';
                    });
                }


                observer.unobserve(entry.target);
            }
        });
    }

    const intersectionObserver = new IntersectionObserver(handleIntersection, {
        threshold: 0.2, // Adjust this threshold as needed
    });

    intersectionObserver.observe(featuresSection);
    intersectionObserver.observe(vacationSection);
    intersectionObserver.observe(viewsSection);
});
