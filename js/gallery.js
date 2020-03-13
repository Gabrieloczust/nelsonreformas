// Galeria Fancybox
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