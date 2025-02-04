$(document).ready(function(){
    $('.slickSlider').slick({
        rtl: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        isArabic: true,
        autoplay: true,
        autoplaySpeed: 1000,

        responsive: [
            {
            breakpoint: 1024,
            settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});
