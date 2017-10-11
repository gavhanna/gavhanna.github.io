(function(){
  const year = document.getElementById("year");
  const currentYear = new Date().getFullYear();
  const navButton = document.querySelector(".nav-button");
  const nav = document.querySelector(".nav-links");
  const navItems = document.querySelectorAll(".nav-item");
  const navCloser = document.querySelector(".close-nav");
  year.innerText = currentYear;

  navButton.addEventListener("click", navControl);
  navCloser.addEventListener("click", navControl);
  navItems.forEach(el => {
    el.addEventListener("click", navControl);
  });

  function navControl() {
    navCloser.classList.toggle("open");
    nav.classList.toggle("nav-on");
  }


  


$('a[href*="#"]')
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {  
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top - 50
      }, 1000, function() {
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});

})();