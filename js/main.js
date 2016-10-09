(function(){

    $(".left-button").on("click", function(){
      $(".left-button").toggleClass("hide");
      $(".right-button").toggleClass("hide");
      $(".left-sidebar").toggleClass("open closed");
      $(".clickable-area").addClass("high-z-index");
    });

    $(".right-button").on("click", function(){
      $(".left-button").toggleClass("hide");
      $(".right-button").toggleClass("hide");
      $(".right-sidebar").toggleClass("open closed");
      $(".clickable-area").addClass("high-z-index");
    });

    $(".close-left-sidebar").on("click", function(){
      $(".left-button").toggleClass("hide");
      $(".right-button").toggleClass("hide");
      $(".left-sidebar").toggleClass("open closed");
      $(".clickable-area").removeClass("high-z-index");
    });

    $(".close-right-sidebar").on("click", function(){
      $(".left-button").toggleClass("hide");
      $(".right-button").toggleClass("hide");
      $(".right-sidebar").toggleClass("open closed");
      $(".clickable-area").removeClass("high-z-index");
    });

    $(".clickable-area").on("click", function(){
      $(this).removeClass("high-z-index");
      $(".left-button").toggleClass("hide");
      $(".right-button").toggleClass("hide");
      $(".left-sidebar").removeClass("open");
      $(".left-sidebar").addClass("closed");
      $(".right-sidebar").removeClass("open");
      $(".right-sidebar").addClass("closed");
    });

})();
