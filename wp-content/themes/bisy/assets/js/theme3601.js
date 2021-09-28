 
/*=======================================================================
 [Table of contents]
 =========================================================================
 1. Course Filter
 2. Vido Popup
 3. Funfact Count
 4. Teacher Silder
 5. Hero Silder
 6. Popular Course Slider
 7. Count Down
 8. Course Related Slider 
 9. Back To Top
 10. Preloader
 11. Mobile Menu
 12. Package Slider
 13. Fixed Header
 14. Testimonial Slider 
 14. Instructor Social 
 14. Post PopUp Video 
 */

(function ($) {
    'use strict';

    /*--------------------------------------------------------
    / 1. Course Filter
    /----------------------------------------------------------*/
    
    $(window).on('load', function () {

        if ($(".shafull-container").length > 0)
        {
            let $suffle_grid;

            $suffle_grid = $('.shafull-container');
            $suffle_grid.shuffle({
                itemSelector: '.shaf-item',
                sizer: '.shaf-sizer'
            });
            
            /* reshuffle when user clicks a filter item */
            $('.shaf-filter li').on('click', function () {
                // set active class
                $('.shaf-filter li').removeClass('active');
                $(this).addClass('active');
                // get group name from clicked item
                var groupName = $(this).attr('data-group');
                // reshuffle grid
                $suffle_grid.shuffle('shuffle', groupName);
            });
        }

    });
    /*--------------------------------------------------------
    / 2. Vido Popup
    /----------------------------------------------------------*/
    
    $('.popup-video').lightcase({
        transition: 'elastic',
        showSequenceInfo: false,
        slideshow: false,
        swipe: true,
        showTitle: false,
        controls: true
    });
   
   
   
   
    /*--------------------------------------------------------
    / 7. Count Down
    /----------------------------------------------------------*/
    if ($('.countdown').length > 0) {
        var d = $('.countdown').attr('data-day');
        var m = $('.countdown').attr('data-month');
        var y = $('.countdown').attr('data-year');
        $('.countdown').countdown({
            until: new Date(y, m - 1, d),
            format: 'DHMS'
        });
    }
    /*--------------------------------------------------------
    / 8. Course Related Slider 
    /----------------------------------------------------------*/
    if($(".related-course-slider").length > 0){
       $('.related-course-slider').owlCarousel({
            loop: false,
            margin: 25,
            responsiveClass: true,
            dots: true,
            autoplay: false,
            smartSpeed: 700,
            center: false,
            nav: false,
            items: 3,
            responsive: {
                0: {
                    items: 1
                },
                700: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });
    }

    /*--------------------------------------------------------
    / 9. Back To Top
    /----------------------------------------------------------*/
    var back = $("#back-to-top"),
        body = $("body, html");
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > $(window).height())
        {
            back.css({bottom: '20px', opacity: '1', visibility: 'visible'});
        } else
        {
            back.css({bottom: '-20px', opacity: '0', visibility: 'hidden'});
        }

    });
    body.on("click", "#back-to-top", function (e) {
        e.preventDefault();
        body.animate({scrollTop: 0}, 800);
        return false;
    });

    /*--------------------------------------------------------
    / 10. Preloader
    /----------------------------------------------------------*/
    $(window).load(function () {
        if ($('.preloader').length > 0) {
            $('.preloader').delay(900).fadeOut('slow');
        }
    });

    /*--------------------------------------------------------
    / 11. Mobile Menu
    /---------------------------------------------------------*/
 
        if ($(window).width() < 991 ) {
            
            $('.navbar-toggler').on('click', function (e) {
                e.stopPropagation();
                $('.navbar-collapse').stop(true, true).slideToggle();
                e.preventDefault();
            });

            $('.navbar-nav li.menu-item-has-children').each(function () {
                var $this = $(this);
                $this.append('<span class="submenu-toggler"><i class="fal fa-plus"></i></span>');
            });
            
            $('.navbar-nav li.menu-item-has-children span.submenu-toggler').on('click', function () {
                var $this = $(this);

                if ($(this).hasClass('active-span')) {
                    $('i', $this).removeClass('fa-minus').addClass('fa-plus');
                } else {
                    $('i', $this).addClass('fa-minus').removeClass('fa-plus');
                }

                $(this).prev('ul.sub-menu, .mega-menu').stop(true, true).slideToggle();
                $(this).toggleClass('active-span');
            });
        };
 
        // learnpress js conflict fix
        $( '.navbar-nav li a' ).on('click',function(){
           let url = $(this).attr('href');
           if(url.length>3){
            window.location.href = url;
           }
        });
    /*--------------------------------------------------------
    / 13. Fixed Header
    /----------------------------------------------------------*/
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 100)
        {
            $(".header-sticky").addClass('fix-header animated fadeInDown');
        } else
        {
            $(".header-sticky").removeClass('fix-header animated fadeInDown');
        }
    });
    /*--------------------------------------------------------
    / 14. Testimonial Slider 
    /----------------------------------------------------------*/
    if($(".testimonial-slider").length > 0){
       $('.testimonial-slider').owlCarousel({
            loop: false,
            margin: 30,
            responsiveClass: true,
            dots: false,
            autoplay: true,
            smartSpeed: 700,
            center: false,
            nav: false,
            items: 2,
            responsive: {
                0: {
                    items: 1
                },
                992: {
                    items: 2
                }
            }
        });
    }

    /*-------------------------------------------------------------
                learn press user setting frontend 
    -----------------------------------------------------------*/
    if($('.social_repeater').length){
        $('.social_repeater').repeater();
    }

      /*---------------------------------
        COMMENTS
    ----------------------------------*/
    var comment_form = $('textarea#comment');
    if (comment_form.length) {
        $('textarea#comment').html($('textarea#comment').html().trim());
    }

    /*----------------------------------
        Course LOAD MORE
    ------------------------------------*/        
    $('.bisy_loadmore').on('click', function (e) {

        e.preventDefault();
        var page       = parseInt($(this).attr('data-page'));
        var foundposts = parseInt($(this).attr('data-foundposts'));
        let order = $(this).attr('data-order').trim();
        let s = $(this).attr('data-search').trim();
        /* Optional Argument */
   
        let settings_json_data = {
            'order_by': order,
            's': s
        };

        /* Optional Argument end*/  

        var loadmore_text = $(".bisy_loadmore span").text();
        var loadmore_cls = $(".bisy_loadmore i").attr('class');
 
        $(this).attr('data-page', ++page);
      
        $.ajax({
                url: bisy_obj.ajax_url,
                type: 'POST',
                data: {
                    action  : 'bisy_course_post_ajax_loading',
                    settings: settings_json_data,
                    paged   : page
                },
                beforeSend: function () {
                    $('.bisy_loadmore span').text( bisy_obj.loadmore_text ).fadeIn(300);
                    $('.bisy_loadmore i').addClass( 'fa fa-spinner' ).fadeIn(300);
                },
                complete: function () {
                    $('.bisy_loadmore span').text(loadmore_text).fadeIn(300);
                    $('.bisy_loadmore i').removeClass('fa fa-spinner').fadeIn(300);
                    $('.bisy_loadmore i').addClass(loadmore_cls).fadeIn(300);
                }
            })
            .done(function (data) {
               
                $('.grid-ajax-content').append(data);
             
                $('.bisy_loadmore span').text(loadmore_text).fadeIn(300);
                $('.bisy_loadmore i').removeClass('fa fa-spinner').fadeIn(300);
                $('.bisy_loadmore i').addClass(loadmore_cls).fadeIn(300);

                let total_post = parseInt($('.bisy-loadmore-content-grid > div').length);
                if (total_post >= foundposts) {
                    $('.bisy_course_loadmore').remove();
                }
            
               $('.grid-ajax-content .shaf-item').each(function() {
                    var $newRow = $(this);
                   
                    $('.shafull-container').append($newRow);
                    $('.shafull-container').shuffle('appended', $newRow);  
                    
                });
                $('.grid-ajax-content').empty();
               

            })
            .fail(function () {
                $('.bisy_course_loadmore').remove();
            });

            
    });

     /*----------------------------------
        Course List LOAD MORE
    ------------------------------------*/        
    $('.bisy_list_loadmore').on('click', function (e) {

        e.preventDefault();

        let $that_item = $(this);
        let page       = parseInt($(this).attr('data-page'));
        let foundposts = parseInt($(this).attr('data-foundposts'));
        let order      = $(this).attr('data-order').trim();
        let s          = $(this).attr('data-search').trim();
        /* Optional Argument */
       
        var setting_json_data = {
            'order_by': order,
            's': s
        };
      
        /* Optional Argument end*/  

        let loadmore_text = $that_item.find('span').text();
        let loadmore_cls = $that_item.find('i').attr('class');
        
        $(this).attr('data-page', ++page);
      
        $.ajax({
                url: bisy_obj.ajax_url,
                type: 'POST',
                data: {
                    action  : 'bisy_course_list_post_ajax_loading',
                    settings: setting_json_data,
                    paged   : page
                },
                beforeSend: function () {
                    $that_item.find('span').text( bisy_obj.loadmore_text ).fadeIn(300);
                    $that_item.find('i').addClass( 'fa fa-spinner' ).fadeIn(300);
                },
                complete: function () {
                    $that_item.find('span').text(loadmore_text).fadeIn(300);
                    $that_item.find('i').removeAttr('class').addClass(loadmore_cls);
                 
                }
            })
            .done(function (data) {
               
      
                $('.bisy-loadmore-content-list').append(data).fadeIn(300);
                $that_item.find('span').text(loadmore_text).fadeIn(300);
                $that_item.find('i').removeAttr('class').addClass(loadmore_cls);

                let total_post = parseInt($('.bisy-loadmore-content-list > div').length);
                if (total_post >= foundposts) {
                    $('.bisy_list_course_loadmore').remove();
                }


            })
            .fail(function () {
                $('.bisy_list_course_loadmore').remove();
            });

            
    });
 
    // Video Post PopUp
    $('.video-popup').magnificPopup({
        type: 'iframe'
        // other options
    });

    $('.search-box input[type="search"]').attr("autocomplete", "off");

    $('.bisy-course-tabs li a[href="#list-tab"]').click(function (e) {
        e.preventDefault();
        $('#grid').removeClass('show in active');
        $('#list-tab').addClass('show in active');
    });

    $('.bisy-course-tabs li a[href="#grid"]').click(function (e) {
        e.preventDefault();
        $('#list-tab').removeClass('show in active');
        $('#grid').addClass('show in active');
    });

})(jQuery);