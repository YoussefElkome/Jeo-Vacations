document.addEventListener('DOMContentLoaded', function () {
    // Get references to the ".transform-element" elements within the "Features" section
    const transformElements = document.querySelectorAll('.container .features .transform-element');

    // Function to handle the intersection of the ".transform-element" elements
    function handleTransformIntersection(entries, observer) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // When a ".transform-element" element is in the viewport, set transform to 0 and opacity to 1
                entry.target.style.transform = 'translateY(0)';
                entry.target.style.opacity = '1';
            }
        });
    }

    // Create an Intersection Observer
    const transformObserver = new IntersectionObserver(handleTransformIntersection, {
        threshold: 0.2, // Adjust this threshold as needed
    });

    // Observe each ".transform-element" element
    transformElements.forEach((element) => {
        transformObserver.observe(element);
    });
});
