(function ($) {
    "use strict";
    /*----------------------------
    Animation js active
    ------------------------------ */
    AOS.init();
    /*----------------------------
    Counter-up
    ------------------------------ */
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    /*-----------------------------
Project Carousel
------------------------------*/
    $('.dot-list').owlCarousel({
        loop:true,
        autoplayHoverPause:true,
        autoplay:true,
        dots: true,
        smartSpeed:1000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }});

    /*----------------------------
    jQuery Mean Menu
    ------------------------------ */
    $("#mobile-menu").meanmenu({
        meanMenuContainer: ".mobile-menu",
        meanScreenWidth: "767"});
    $(".info-bar").on("click", function() {
        $(".extra-info").addClass("info-open");});
    $(".close-icon").on("click", function() {
        $(".extra-info").removeClass("info-open");
    });
    /*----------------------------
          Menu active JS
        ----------------------------*/
    $('.main-menu ul li a').on ('click', function () {
        $('.main-menu ul li a').removeClass("current");
        $(this).addClass("current");
    });
    /*----------------------------
     Video Popup JS
 ----------------------------*/
    $('.popup-youtube').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
    /*----------------------------
    jQuery Stickymenu
    ------------------------------ */
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 0) {
            $('.sticky-header').addClass("sticky");
        }
        else {
            $('.sticky-header').removeClass("sticky");
        }
    });

    /*----------------------------
    Smooth Scrool
    ------------------------------ */
    $('a').on('click', function (event) {
        var $anchor = $($(this).attr('href')).offset().top - 60;
        $('body, html').animate({
            scrollTop: $anchor
        }, 1500);
        event.preventDefault();
        return false;
    });
    /*-----------------
    Scroll-Up
    -----------------*/
    $.scrollUp({
        scrollText: '<i class="fa fa-arrow-up" aria-hidden="true"></i>',
        easingType: 'linear',
        scrollSpeed: 1000,
        animation: 'fade'
    });
    /* ---------------------------------------------
         portfolio filtering
         --------------------------------------------- */

    var $portfolio = $('.blog-grid');
    if ($.fn.imagesLoaded && $portfolio.length > 0) {
        imagesLoaded($portfolio, function () {
            $portfolio.isotope({
                itemSelector: '.blog-item',
                filter: '*'
            });
            $(window).trigger("resize");
        });
    }

    $('.blog-filter').on('click', 'a', function (e) {
        e.preventDefault();
        $(this).parent().addClass('active').siblings().removeClass('active');
        var filterValue = $(this).attr('data-filter');
        $portfolio.isotope({filter: filterValue});
    });

    /*----------------------------
    Preloader
    ------------------------------ */
    $(window).on('load',function () {
        $("#status").on('fadeOut',"slow");
        $("#preloader").on('delay',500).on('fadeOut',"slow").remove();
    });
    /*----------------------------
    Count Down
    ------------------------------ */
     $('.countdown').downCount({
     date: '12/12/2019 12:00:00'
    });

     /* Partical Bg */
    var count_particles, stats, update;
    stats = new Stats;
    stats.setMode(0);
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';
    document.body.appendChild(stats.domElement);
    count_particles = document.querySelector('.js-count-particles');
    update = function() {
        stats.begin();
        stats.end();
        if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
            count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
        }
        requestAnimationFrame(update);
    };
    requestAnimationFrame(update);

})(jQuery); 