document.addEventListener('DOMContentLoaded', function () {
    const andMore = document.getElementById("andMore");
    setTimeout(() => {
        andMore.textContent = 'And More.';
    }, 100); 
    setTimeout(() => {
        andMore.textContent = 'And More..';
    }, 100); 
    setTimeout(() => {
        andMore.textContent = 'And More...';
    }, 100); 
})
