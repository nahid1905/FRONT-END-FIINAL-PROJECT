$(document).ready(function(){

    // HOME PAGE SLIDER SECTION
    
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })  

    // END OF HOME PAGE SLIDER SECTION

    

    //  OUR TEAM SECTION'S TEXT DIV'S ANIMATION

    new WOW().init();

    //  END OF OUR TEAM SECTION'S TEXT DIV'S ANIMATION

})  


