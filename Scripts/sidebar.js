function myFunction(x) {
    x.classList.add("change");
  
    function myFunction1() {
      x.classList.remove("change");
    }
  
    setTimeout(myFunction1, 600);
  }