document.addEventListener('DOMContentLoaded', function () {
    // Get references to the ".feature" elements within the "Features" section
    const featureElements = document.querySelectorAll('.container .features');

    // Function to handle the intersection of the ".feature" elements
    function handleFeatureIntersection(entries, observer) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // When a ".feature" element is in the viewport, set opacity to 1
                entry.target.style.opacity = '1';
            }
        });
    }

    // Create an Intersection Observer
    const featureObserver = new IntersectionObserver(handleFeatureIntersection, {
        threshold: 0.2, // Adjust this threshold as needed
    });

    // Observe each ".feature" element
    featureElements.forEach((element) => {
        featureObserver.observe(element);
    });
});
