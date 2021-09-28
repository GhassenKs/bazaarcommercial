( function( $ ) {
  
    /*--------------------------------------------------------
    / 1. Hero Silder
    /----------------------------------------------------------*/
      var Intro_Banner_Slider = function( $scope, $ ) {
    
            var $container            = $scope.find('.hero-slider');
            var controls              = null;
            var control_obj           = {};
                controls              = JSON.parse($container.attr('data-controls'));
                control_obj = bisy_slider_controls(controls);
      
              
            if($container.length > 0){
                $container.owlCarousel({
                    loop: control_obj.bisy_slider_loop,
                    margin: parseInt(control_obj.bisy_slider_padding),
                    responsiveClass: true,
                    animateOut: controls.slider_animation_out,
                    animateIn: controls.slider_animation_in,
                    dots: false,
                    autoplayTimeout: control_obj.bisy_slider_autoplay_timeout,
                    autoplay: control_obj.bisy_slider_autoplay,
                    smartSpeed: control_obj.bisy_slider_smart_speed,
                    center: false,
                    nav: true,
                    navText: ['<i class="arrow_carrot-left"></i>', '<i class="arrow_carrot-right"></i>'],
                    items: control_obj.bisy_slider_items
                });
            }

    }; 
   
   /*--------------------------------------------------------
    / Funfact Count
    /----------------------------------------------------------*/
    var Counter = function( $scope, $ ) {

            var $container  = $scope.find('.timer');
            var skl = true;
            $container.appear();
            $container.on('appear', function () {
                if (skl)
                {
                  $container.each(function () {
                        var $this = $(this);
                        jQuery({Counter: 0}).animate({Counter: $this.attr('data-counter')}, {
                            duration: 3000,
                            easing: 'swing',
                            step: function () {
                                var num = Math.ceil(this.Counter).toString();
                                if (Number(num) > 999) {
                                while (/(\d+)(\d{3})/.test(num)) {
                                num = num.replace(/(\d+)(\d{3})/, '$1' + '<span>,</span>' + '$2');
                                }
                                }
                                $this.html(num);
                            }
                        });
                    });
                    skl = false;
                }
            });
         
      };
    /*--------------------------------------------------------
    / Package Slider
    /----------------------------------------------------------*/
    var Membership_Widget = function( $scope, $ ) {
     
      var $container  = $scope.find('.pack-slider');
      var $container2  = $scope.find('.pack-slider .package-item');
      
      var cards = $container2.toArray();

      startAnim(cards);

      function startAnim(array) {
          if (array.length >= 4) {
              TweenMax.fromTo(array[0], 0.5, {
                  x: 0,
                  y: 0,
                  opacity: 0
              }, {
                  x: 0,
                  y: -120,
                  opacity: 0,
                  zIndex: 0,
                  scale: 0.9,
                  delay: 0.03,
                  
                  ease: Cubic.easeInOut,
                  onComplete: sortArray(array)
              });

              TweenMax.fromTo(array[1], 0.5, {
                  x: 0,
                  y: 125,
                  opacity: 1,
                  zIndex: 1,
                  scale: 1,
              }, {
                  x: 0,
                  y: 0,
                  opacity: 0,
                  zIndex: 0,
                  scale: 0.9,
                 
                  boxShadow: '-5px 8px 8px 0 rgba(82,89,129,0.05)',
                  ease: Cubic.easeInOut
              });

              TweenMax.to(array[2], 0.5, {
                  bezier: [{
                      x: 0,
                      y: 250
                  }, {
                      x: 65,
                      y: 200
                  }, {
                      x: 0,
                      y: 125
                  }],
                  boxShadow: '-5px 8px 8px 0 rgba(82,89,129,0.05)',
                  zIndex: 1,
                  opacity: 1,
                  scale: 1,
                  ease: Cubic.easeInOut
              });

              TweenMax.fromTo(array[3], 0.5, {
                  x: 0,
                  y: 400,
                  opacity: 0,
                  zIndex: 0,
                  scale: 0.9,
              }, {
                  x: 0,
                  y: 170,
                  opacity: 0.75,
                  zIndex: 0,
                  scale: 0.9,
                 
                  ease: Cubic.easeInOut
              });
          } else {
            $container.append('<p>Sorry, carousel should contain more than 3 slides</p>');
          }
      }

      function sortArray(array) {
          clearTimeout(delay);
          var delay = setTimeout(function() {
              var firstElem = array.shift();
              array.push(firstElem);
              return startAnim(array);
          }, 4000);
      }
   
  };

    /*--------------------------------------------------------
    / Teacher Silder
    /----------------------------------------------------------*/
    var Instructor_Widget = function( $scope, $ ) {

      var $container  = $scope.find('.teachers-slider');
      var controls              = null;
       var control_obj           = {};
           controls              = JSON.parse($container.attr('data-controls'));
           control_obj           = bisy_slider_controls(controls);
        
          if($container.length > 0 && control_obj.slider_enable == true){
            $container.owlCarousel({
                loop: control_obj.bisy_slider_loop,
                margin: parseInt(control_obj.bisy_slider_padding),
                responsiveClass: true,
                dots: control_obj.bisy_slider_nav_show,
                autoplay: control_obj.bisy_slider_autoplay,
                smartSpeed: control_obj.bisy_slider_smart_speed,
                center: false,
                nav: false,
                items: control_obj.bisy_slider_items,
                responsive: {
                    0: {
                        items: control_obj.bisy_slider_items_mobile
                    },
                    750: {
                        items: control_obj.bisy_slider_items_tablet
                    },
                    992: {
                        items: control_obj.bisy_slider_items
                    }
                }
            });
        }
   
  };

     /*--------------------------------------------------------
    / Testimonial
    /----------------------------------------------------------*/
    var Testimonial_Widget = function( $scope, $ ) {

      var $container  = $scope.find('.testimonial-slider');
      var controls              = null;
       var control_obj           = {};
           controls              = JSON.parse($container.attr('data-controls'));
           control_obj           = bisy_slider_controls(controls);
        
          if($container.length > 0 && control_obj.slider_enable == true){
       
                 $container.owlCarousel({
                   loop: control_obj.bisy_slider_loop,
                   margin: parseInt(control_obj.bisy_slider_padding),
                   responsiveClass: true,
                   dots: control_obj.bisy_slider_nav_show,
                   autoplay: control_obj.bisy_slider_autoplay,
                   smartSpeed: control_obj.bisy_slider_smart_speed,
                   center: false,
                   nav: false,
                   items: control_obj.bisy_slider_items,
                   responsive: {
                        0: {
                          items: control_obj.bisy_slider_items_mobile
                      },
                      750: {
                          items: control_obj.bisy_slider_items_tablet
                      },
                      992: {
                          items: control_obj.bisy_slider_items
                      }
                   }
               });
           
        }
   
  };
  /*----------------------------
  * Course_Slider_Widget
  -----------------------------*/
  var Course_Slider_Widget = function( $scope, $ ) {

        var $container  = $scope.find('.popular-course-slider');
        var controls              = null;
        var control_obj           = {};
            controls              = JSON.parse($container.attr('data-controls'));
            control_obj           = bisy_slider_controls(controls);
            console.log(controls);
            if($container.length > 0 && control_obj.slider_enable == true){
        
                  $container.owlCarousel({
                    loop: control_obj.bisy_slider_loop,
                    margin: parseInt(control_obj.bisy_slider_padding),
                    responsiveClass: true,
                    dots: control_obj.bisy_slider_nav_show,
                    autoplay: control_obj.bisy_slider_autoplay,
                    smartSpeed: control_obj.bisy_slider_smart_speed,
                    animateOut: 'fadeOut',
                    center: false,
                    nav: false,
                    items: control_obj.bisy_slider_items,
                    responsive: {
                          0: {
                            items: control_obj.bisy_slider_items_mobile
                        },
                        750: {
                            items: control_obj.bisy_slider_items_tablet
                        },
                        992: {
                            items: control_obj.bisy_slider_items
                        }
                    }
                });
            
          }
    
    };
    
  /*----------------------------
  * Count Down
  -----------------------------*/
  var Count_Down_Widget = function( $scope, $ ) {

        var $container  = $scope.find('.countdown');
        var controls              = null;
        var control_obj           = {};
           // controls              = JSON.parse($container.attr('data-controls'));

            if ($container.length > 0) {
              var d = $container.attr('data-day');
              var m = $container.attr('data-month');
              var y = $container.attr('data-year');
              $container.countdown({
                  until: new Date(y, m - 1, d),
                  format: 'DHMS'
              });
          }
           
          
    
    };


	// Make sure you run this code under Elementor.
	$( window ).on( 'elementor/frontend/init', function() {


	   	elementorFrontend.hooks.addAction( 'frontend/element_ready/bisy-intro-banner-slider.default', Intro_Banner_Slider );
	   	elementorFrontend.hooks.addAction( 'frontend/element_ready/bisy-counter.default', Counter );
	   	elementorFrontend.hooks.addAction( 'frontend/element_ready/bisy-membership.default', Membership_Widget );
	   	elementorFrontend.hooks.addAction( 'frontend/element_ready/bisy-instructor-slider.default', Instructor_Widget );
	   	elementorFrontend.hooks.addAction( 'frontend/element_ready/bisy-testimonial-slider.default', Testimonial_Widget );
	   	elementorFrontend.hooks.addAction( 'frontend/element_ready/bisy-course-slider.default', Course_Slider_Widget );
	   	elementorFrontend.hooks.addAction( 'frontend/element_ready/bisy-count-down.default', Count_Down_Widget );
	
	 
    } );

   
   // utility function  
   // get slider control default settings
   function bisy_slider_controls(controls=[]){
    var newObj = {

      bisy_slider_autoplay:true,
      bisy_slider_loop:false,
      bisy_slider_autoplay_hover_pause:false,
      bisy_slider_autoplay_timeout:5000,
      bisy_slider_dot_nav_show:false,
      bisy_slider_items:3,
      bisy_slider_items_mobile:1,
      bisy_slider_items_tablet:3,
      bisy_slider_padding:5,
      bisy_slider_nav_show:false,
      bisy_slider_smart_speed:250,

    };
  
    if ('bisy_slider_autoplay' in controls){
      if(controls.bisy_slider_autoplay == 'yes'){
        newObj.bisy_slider_autoplay = true;
      }else{
        newObj.bisy_slider_autoplay = false;
      }  
    }  
    
    if ('bisy_slider_loop' in controls){
      if(controls.bisy_slider_loop == 'yes'){
        newObj.bisy_slider_loop = true;
      }else{
        newObj.bisy_slider_loop = false;
      }  
    }

    if ('bisy_slider_dot_nav_show' in controls){
      if(controls.bisy_slider_dot_nav_show == 'yes'){
        newObj.bisy_slider_dot_nav_show = true;
      }else{
        newObj.bisy_slider_dot_nav_show = false;
      }  
    }
     if ('bisy_slider_nav_show' in controls){
      if(controls.bisy_slider_nav_show == 'yes'){
        newObj.bisy_slider_nav_show = true;
      }else{
        newObj.bisy_slider_nav_show = false;
      }  
    }

    if ('bisy_slider_autoplay_timeout' in controls){
       newObj.bisy_slider_autoplay_timeout = parseInt( controls.bisy_slider_autoplay_timeout );
    }

    if ('bisy_slider_items' in controls){
        newObj.bisy_slider_items = parseInt( controls.bisy_slider_items || 1 );
    }
    
    if ('slider_enable' in controls){
        newObj.slider_enable = Boolean( controls.slider_enable =='yes'?true:false);
    }

    if ('bisy_slider_items_mobile' in controls){
        newObj.bisy_slider_items_mobile = parseInt( controls.bisy_slider_items_mobile || 1 );
    }
    if ('bisy_slider_items_tablet' in controls){
        newObj.bisy_slider_items_tablet = parseInt( controls.bisy_slider_items_tablet || 1 );
    }
    
    if ('bisy_slider_padding' in controls){
        newObj.bisy_slider_padding = parseInt( controls.bisy_slider_padding || 0);
    } 
    
    if ('bisy_slider_smart_speed' in controls){
        newObj.bisy_slider_smart_speed =  controls.bisy_slider_smart_speed || 250;
    }
    return newObj; 
  }

  
} )( jQuery );


