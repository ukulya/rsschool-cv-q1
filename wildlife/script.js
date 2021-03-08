$(document).ready(function() {
    $('.navbar-toggler').on('click', function () {
        $('.navbar').toggleClass('active');
        $('body').toggleClass('active');
        $(this).toggleClass('active');
    });

    $('.slide-carousel').owlCarousel({
        loop:true,
        autoplay:false,
        dots:false,
        nav:true,
        navText:['<span class="material-icons">chevron_left</span>', '<span class="material-icons">chevron_right</span>'],
        responsive:{
            992:{
                items: 3,
                margin: 60
            },
            768:{
                items: 3,
                margin: 30
            },

            320:{
                items: 1,
                margin: 0
            }
        }
    })
});

$(document).scroll(function() {
    if ( $(document).scrollTop() >= 50 ) {
        $('.navbar').addClass('scrolled')
    } else {
        $('.navbar').removeClass('scrolled')
    }
});
