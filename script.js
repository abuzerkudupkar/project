$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        800:{
          items:3
        },
        1000:{
            items:4
        }
    }
})
$(function(){
    $("#stu_counter").numScroll({
      number: 15,
      time:800,
      delay:0
    });
    $(".no_of_stu_counter").numScroll({
      number: 31000,
    });
    $("#noof_place").numScroll({
      number: 25000,
    });
    $("#noof_regis").numScroll({
      number: 39000,
    });
  
  });