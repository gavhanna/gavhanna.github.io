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
    navButton.classList.toggle("clicked")
    navCloser.classList.toggle("open");
    nav.classList.toggle("nav-on");
  }


  

  // Smooth scrolling
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

  function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }

  $(window).scroll(function () {
    $('.devicon').each(function () {
       if (isScrolledIntoView(this) === true) {
           $(this).addClass('in-view');
           console.log($(this), "is now in view");
           
       }
    });
  });

})();