document.addEventListener('DOMContentLoaded', function () {
    const moreButtons = document.querySelectorAll('.intro .more-button, .sidebar .more-button');
    const mainSection = document.getElementById('main-section');
    const mainButton = document.getElementById('mainButton');
    const featuresSection = document.getElementById('features-section');
    const featuresButton = document.getElementById('featuresButton');
    const vacationsButton = document.getElementById('vacationsButton');
    const vacationSection = document.getElementById('vacation-section');
    const viewsButton = document.getElementById('viewsButton');
    const viewsSection = document.getElementById('views-section');
    const navBar = document.getElementById("navBar");
    const sideBar = document.getElementById("sidebar");
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

            moreButtons.forEach(function (btn) {
                btn.classList.remove('active');
            });
            button.classList.add('active');
            sideBar.style.right = "-500px";
            navBar.classList.remove('change');    
            smoothScrollTo(featuresSection, 1000, -60);
        });
    });
    featuresButton.addEventListener('click', function () {
        featuresButton.forEach(function (btn) {
            btn.classList.remove('active');
        });

        mainButton.classList.add('active');
        sideBar.style.right = "-500px";
        navBar.classList.remove('change');    
        smoothScrollTo(featuresSection, 1000, 0);
    });
    vacationsButton.addEventListener('click', function () {
        moreButtons.forEach(function (btn) {
            btn.classList.remove('active');
        });

        vacationsButton.classList.add('active');
        sideBar.style.right = "-500px";
        navBar.classList.remove('change');    
        smoothScrollTo(vacationSection, 1000, -60);
    });
    mainButton.addEventListener('click', function () {
        moreButtons.forEach(function (btn) {
            btn.classList.remove('active');
        });

        mainButton.classList.add('active');
        sideBar.style.right = "-500px";
        navBar.classList.remove('change');    
        smoothScrollTo(mainSection, 1000, 0);
    });
    viewsButton.addEventListener('click', function () {
        moreButtons.forEach(function (btn) {
            btn.classList.remove('active');
        });

        viewsButton.classList.add('active');
        sideBar.style.right = "-500px";
        navBar.classList.remove('change');    
        smoothScrollTo(viewsSection, 1000, 0);
    });
});
