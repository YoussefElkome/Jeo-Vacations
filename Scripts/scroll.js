document.addEventListener('DOMContentLoaded', function () {
    const moreButtons = document.querySelectorAll('.intro .more-button, .sidebar .more-button');
    const featuresSection = document.getElementById('features-section');
    const vacationsButton = document.getElementById('vacationsButton');
    const vacationSection = document.getElementById('vacation-section');

    function smoothScrollTo(targetElement, duration, offset) {
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
        const startPosition = window.pageYOffset;
        const startTime = performance.now();

        function animate(currentTime) {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            const easeInOutQuad = progress < 0.5 ? 2 * progress * progress : -1 + (4 - 2 * progress) * progress;

            window.scrollTo(0, startPosition + (targetPosition - startPosition - offset) * easeInOutQuad);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        }

        requestAnimationFrame(animate);
    }

    moreButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            smoothScrollTo(featuresSection, 1000, -60); // 100px offset
        });
    });

    vacationsButton.addEventListener('click', function () {
        smoothScrollTo(vacationSection, 1000, -60); // 100px offset
    });
});
