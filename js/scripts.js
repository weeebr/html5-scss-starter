$(document).ready(function() {
    $('a[href*=\\#]').hammer().on('tap', function(e){
        e.preventDefault();
        e.stopPropagation();
        scrollToSection($(this));
    });

    $('.nav-button').hammer().on('tap', function() {
        toggleMobileMenu($(this));
    });

    $(window).on('scroll', function() {
        toggleHeaderClass();
    });

    bindSlick();
});

function scrollToSection($a) {
    var section = $a.attr('href');
    var headerHeight = isSmallDevice() ? 188.23 : 98.23; // height of header.scrolling
    var offset = $(section).offset().top - headerHeight + 1;

    $('html, body').animate({
        scrollTop: offset
    },'slow');
    
    window.location = 'http://' + window.location.host + '/' + section; 
}

function toggleMobileMenu($navButton) {
    let animationSpeed = 400;
    let $otherButton;

    if($navButton.hasClass('open')) {
        $('nav').addClass('open');
        $('nav a').slideDown(300);
        $otherButton = $('.nav-button.close');
    } else {
        $('nav').removeClass('open');
        $otherButton = '.nav-button.open';
    }

    $navButton.animate({
        'opacity': '0'
    }, animationSpeed).hide();

    $otherButton.animate({
        'opacity': '1',
    }, animationSpeed).show();
    
    console.log($navButton.hasClass('open')?'open':'close');
}

function toggleHeaderClass() {
    if($(window).scrollTop() === 0) {
        $('header').removeClass('scrolling');
        
    } else {
        $('header').addClass('scrolling');
    }
}

function bindSlick() {
    var $slider = $(".products-slider");

    var slickConfig = {
        centerMode: true,
        infinite: true,
        centerPadding: "30px",
        autoplay: true,
        autoplaySpeed: 4E3,
        speed: 1E3,
        pauseOnFocus: false,
        pauseOnHover: true,
        pauseOnDotsHover: false,
        draggable: true,
        swipeToSlide: true,
        dots: true
    };

    $slider.on({
        init: function() {
            //
        },
        beforeChange: function(event, slick, currentSlide, nextSlide) {
            //
        },
        afterChange: function(event, slick, currentSlide, nextSlide) {}
    }).slick(slickConfig);
}

function isSmallDevice() {
    return window.matchMedia("(max-width: 767px)").matches
}