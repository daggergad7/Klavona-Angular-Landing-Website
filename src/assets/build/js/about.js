
        
  var loader;
  function loadNow(opacity) {
      if(opacity <= 0) {
          displayContent();
      }
      else {
          loader.style.opacity = opacity;
          window.setTimeout(function() {
              loadNow(opacity - 0.05)
          }, 100);
      }
  }
  
  function displayContent() {
      loader.style.display = 'none';
      document.getElementById('content').style.display = 'block';
  }
  
loader = document.getElementById('loader');
loadNow(1);
  

    
$(document).ready(function() {
    $(".menu-icon").on("click", function() {
          $("nav ul").toggleClass("showing");
          console.log("click");

    });
});

  // Scrolling Effect

  $(window).on("scroll", function() {
        if($(window).scrollTop()) {
              $('nav').addClass('black');
        }

        else {
              $('nav').removeClass('black');
        }
  })


