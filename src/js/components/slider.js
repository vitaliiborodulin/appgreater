$('.foto__list').owlCarousel({
    loop:true,
    margin:10,
    dots: true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        770:{
            items:2,
            dots: false,
            nav:true,
        }
    }
})