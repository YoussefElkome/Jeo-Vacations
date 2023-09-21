document.addEventListener("DOMContentLoaded", function () {
    const navBar = document.getElementById("navBar");
    const navbar = document.getElementById("navbar");
    const sideBar = document.getElementById("sidebar");
    const closeI = document.getElementById("closeI");

    navBar.addEventListener("click", toggleSidebar);

    function toggleSidebar() {
        if (sideBar.style.right === "0px") {
            sideBar.style.right = "-400px";
        } else {
            sideBar.style.right = "0px";
        }
    }
});

function myFunction(x) {
    x.classList.toggle("change");
}
