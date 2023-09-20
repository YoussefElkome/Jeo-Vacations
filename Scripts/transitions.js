document.addEventListener('DOMContentLoaded', function () {
    // Get references to the "Features" and "Vications" sections
    const featuresSection = document.getElementById('features-section');
    const vacationSection = document.getElementById('vacation-section');

    // Get references to the elements to animate in both sections
    const featuresElementsToAnimate = document.querySelectorAll('.container .features');
    const vacationElementsToAnimate = document.querySelectorAll('.container .vications');

    function handleIntersection(entries, observer) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Check which section is intersecting and apply animations accordingly
                if (entry.target === featuresSection) {
                    // When the "Features" section enters the viewport, set opacity to 1 and transform to 0
                    featuresElementsToAnimate.forEach((element) => {
                        element.style.opacity = 1;
                        element.style.transform = 'translateY(0)';
                    });
                } else if (entry.target === vacationSection) {
                    // When the "Vications" section enters the viewport, set opacity to 1 and transform to 0
                    vacationElementsToAnimate.forEach((element) => {
                        element.style.opacity = 1;
                        element.style.transform = 'translateY(0)';
                    });
                }

                // Stop observing once the animation is applied
                observer.unobserve(entry.target);
            }
        });
    }

    // Create an Intersection Observer
    const intersectionObserver = new IntersectionObserver(handleIntersection, {
        threshold: 0.2, // Adjust this threshold as needed
    });

    // Observe both the "Features" and "Vications" sections
    intersectionObserver.observe(featuresSection);
    intersectionObserver.observe(vacationSection);
});
