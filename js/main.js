(function(){

    $(".left-button").on("click", function(){
      $(".left-button").toggleClass("hide");
      $(".right-button").toggleClass("hide");
      $(".left-sidebar").toggleClass("open closed");
      console.log($btn);
    });

    $(".right-button").on("click", function(){
      $(".left-button").toggleClass("hide");
      $(".right-button").toggleClass("hide");
      $(".right-sidebar").toggleClass("open closed");
      console.log($btn);
    });

    $(".close-left-sidebar").on("click", function(){
      $(".left-button").toggleClass("hide");
      $(".right-button").toggleClass("hide");
      $(".left-sidebar").toggleClass("open closed");
    });

    $(".close-right-sidebar").on("click", function(){
      $(".left-button").toggleClass("hide");
      $(".right-button").toggleClass("hide");
      $(".right-sidebar").toggleClass("open closed");
    });

})();
