window.onscroll = function(){myFunction()};

  var navigationBar = document.querySelector("nav");

  var sticky = navigationBar.offsetTop;

  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navigationBar.classList.add("sticky");
    } else {
      navigationBar.classList.remove("sticky");
    }
  }