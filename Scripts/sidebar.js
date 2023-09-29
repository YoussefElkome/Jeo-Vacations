document.addEventListener("DOMContentLoaded", function () {
    const navBar = document.getElementById("navBar");
    const sideBar = document.getElementById("sidebar");
    const mainSection = document.querySelector('.container');
    navBar.addEventListener("click", toggleSidebar);

    function toggleSidebar() {
        if (sideBar.style.right === "0px") {
            sideBar.style.right = "-400px";
        } else {
            sideBar.style.right = "0px";
        }
    }
    mainSection.addEventListener("click", function (event) {
        sideBar.style.right = "-400px";
        navBar.classList.remove("change");
    });
});

function myFunction(x) {
    x.classList.toggle("change");
}
