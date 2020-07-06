// Bxslider
$(document).ready(function () {
    $('.bxslider').bxSlider({
        minSlides: 1,
        maxSlides: 1,
        auto: true,
        autoControls: false,
        slideMargin: 0
    });
});

// Fancybox
$('.fancybox').fancybox({
    loop: true,
    buttons: [
        //"zoom",
        //"share",
        "slideShow",
        "fullScreen",
        //"download",
        "thumbs",
        "close"
    ],
    animationEffect: "zoom",
    slideShow: {
        autoStart: true,
        speed: 4000
    }
});