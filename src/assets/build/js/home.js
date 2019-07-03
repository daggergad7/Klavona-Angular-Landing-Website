
        
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
  

// new
      
      
            // Menu-toggle button
      
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
      
      
      
      var carousel = (function(){
        
        
        /* var  maxWidth = window.innerWidth;
      var  maxHeight = window.innerHeight; */
      setTimeout(function(){
      
      
      //  console.log(maxWidth);
      // console.log(maxHeight);
      var image_holder = document.getElementById('main-slider');
      var img_array = image_holder.querySelectorAll('.slider-wrapper img'); 
      console.log(img_array[0]);
      console.log(img_array[0].clientHeight);
      var imageWidth = img_array[0].width; 
      var imageHeight = img_array[0].height;  
      
      
      
      
      function resizeBg(element_for_reszie) {
        
          var  maxWidth = document.body.clientWidth;
          var  maxHeight = document.body.clientHeight;  
           var aspectRatio = imageWidth /imageHeight;
          if (typeof(element_for_reszie) != 'undefined' && (element_for_reszie != null) ) {
              console.log(maxWidth / maxHeight);
              
              if ( (maxWidth / maxHeight) < aspectRatio ) {
                console.log('here')
                  element_for_reszie.classList.remove("bgwidth");
                  element_for_reszie.classList.add("bgheight");
              } else {
                console.log('there')
                  element_for_reszie.classList.remove("bgheight");
                  element_for_reszie.classList.add("bgwidth");
              }  
          }
      };
      
      for (var i = 0; i < img_array.length; i++) { 
          //console.log(img_array[i]);
          resizeBg(img_array[i]);
      }
      
      
      
      
      window.addEventListener('resize', function(event){
        console.log('resize');
        for (var i = 0; i < img_array.length; i++) { 
            //console.log(img_array[i]);
            resizeBg(img_array[i]);
        }
      });
      
      
      
      
      
      
      var box = document.getElementById('main-slider');
      var prev = box.querySelector('.slider-previous');
      var next = box.querySelector('.slider-next');
      var counter = 0;
      var items = box.querySelectorAll('.slider-wrapper img');
      console.log(items)
      var amount = items.length;
      
      //console.log(items);
      //console.log(amount);
      var current = items[0];
      current.classList.add('current');
      //box.classList.add('active'); //????
      function navigate(direction) {
        //console.log(current);
        current.classList.remove('current');
        counter = counter + direction;
        //console.log(counter);
        if  (direction === -1  && counter < 0) {
          counter = amount - 1; // start at 0, this last item
        }
        if( direction === 1 && !items[counter]) {
            counter = 0;
        }
         current = items[counter];
         current.classList.add('current');
        
      }
      
      next.addEventListener('click', function(e){
        navigate(1);
      });
      
       prev.addEventListener('click', function(e){
        navigate(-1);
      });
      
      
      
      var intervalID = window.setInterval(call_timer, 6000);
      
      function call_timer() {
      navigate(1);
      }  
      
      
       }, 100); 
      
      })();
        
      
        $(document).ready(function() {
              var docWidth = $('body').width(),
              $wrap = $('#wrap'),
              $images = $('#wrap .block'),
              slidesWidth = $wrap.width();
      
              $(window).on('resize', function() {
                    docWidth = $('body').width();
                    slidesWidth = $wrap.width();
              })
      
        });
      
        var t1 = new TimelineMax({paused: true});
      
        // TweenMax.from(".logo", 0.5, {
        //       opacity: 0,
        //       y: 10,
        //       delay: 1
        // });
      
        // TweenMax.from(".menu", 0.5, {
        //       opacity: 0,
        //       y: 10,
        //       delay: 1.2
        // });
      
        // TweenMax.from(".title", 3, {
        //       opacity: 0,
        //       delay: 1.4
        // });
      
        // TweenMax.from(".tagline", 3, {
        //       opacity: 0,
        //       delay: 1.6
        // });
      
      
        t1.to(".wines", 1, {
              autoAlpha: 1,
              height: '700px'
      
        });
      
      
        t1.reverse();
        $(document).on("click", ".card-two", function() {
          // $('.wines').css('height', '800px');
              t1.reversed(!t1.reversed());
        });
      
      
        var $images = $('#wrap .block');
        var offset=0;
        
        $(document).on("click", ".leftnav", function() {
              offset=offset+600;
              $images.css({
                    '-wrbkit-transform' : 'translate3d(' + offset + 'px,0,0)',
                          'transform' : 'translate3d(' + offset + 'px,0,0)',
                          'transition': 'transform 200ms linear'
                          
                    });
                    
        });
      
        $(document).on("click", ".rightnav", function() {
              offset=offset-600;
      
              $images.css({
                          '-wrbkit-transform' : 'translate3d(' + offset + 'px,0,0)',
                          'transform' : 'translate3d(' + offset + 'px,0,0)',
                          'transition': 'transform 200ms linear'
      
                    });
        });
        
      
      
      
      
      