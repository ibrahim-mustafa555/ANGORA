//// Add scrollspy to <body>
//$('body').scrollspy({target: "#main-nav", offset: 50});



// navbar background color change on scroll

$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('nav').addClass('scroll');
    } else {
        $('nav').removeClass('scroll');
    }

});





// Partner Carousel
$('.client-carousel').owlCarousel({
    loop: false,
    nav: false,
    margin: 10,
    dots: false,
    //    autoplay:true,
    //    autoplayTimeout:3000,
    //    autoplayHoverPause:true,
    responsive: {
        0: {
            items: 3
        },
        600: {
            items: 4
        },
        1000: {
            items: 5
        }
    }
});


// testimonial Carousel
$('.partner-carousel').owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    autoplay: false,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 4
        },
        1000: {
            items: 5
        }
    }
});

// Counter 
$('.counter').counterUp({
    delay: 10,
    time: 1000
});


// scroll top element

var scrollButton = $("#scroll-top");

$(window).scroll(function() {
    if ($(this).scrollTop() > 300) {
        scrollButton.show();
    } else {
        scrollButton.hide();
    }

});

// Click On Button Top     

scrollButton.on('click', function() {
    $('html,body').animate({ scrollTop: 0 }, 300);
});


// Loading Screen 

// $(document).ready(function(){

//      $('#loading').fadeOut( 3000);

// })