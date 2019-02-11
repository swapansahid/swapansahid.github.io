  /*========================
  |  |  |Preloader | | |
  ==========================*/
  $(window).on('load', function () { //Make sure that whole site is loaded
      $('#status').fadeOut();
      $('#preloader').delay(350).fadeOut('slow');
  });

/*========================
    |  |  |Sidebar | | |
==========================*/
$(document).ready(function(){
    $(".toggle-btn").click(function(){
        $("#sidebar").slideToggle("slow");
    });
});
  /*========================
    |  |  |Team | | |
    ==========================*/

  $(document).ready(function () {
      $('#team-members').owlCarousel({
          smartSpeed: 700,
          autoplay: true,
          loop: true,
          dots: false,
          nav: true,
          autoplayHoverPause: true,
          responsive: {
              0: {
                  items: 1
              },
              300: {
                  items: 2
              }
          }
      });
  });

  /*===========================
      |  |  |Progress Bar | |
      ==========================*/
  $(function () {
      $("#progress-elements").waypoint(function () {
          $(".progress-bar").each(function () {
              $(this).animate({
                  width: $(this).attr("aria-valuenow") + "%"
              }, 2000);
          });



          $(this).destroy();
      }, {
          offset: 'bottom-in-view'
      });

  });

  /*===========================
        |  |  |Services| |
        ==========================*/


  $(function () {
      $("#services-tabs").responsiveTabs({
          animation: 'slide'
      });
  });


/*===========================
    |  |  |Testimonial| |
 ==========================*/
$(document).ready(function () {
      $('#testimonial-slider').owlCarousel({
          smartSpeed: 700,
          autoplay: true,
          loop: true,
          dots: false,
          nav: true,
          autoplayHoverPause: true,
          responsive: {
              0: {
                  items: 1
              }
              
          }
      });
  });


/*===========================
 |  |  |  Stats | |
 ==========================*/
$(document).ready(function(){
   $(".counter").counterUp({
       delay: 10,
       time: 2000
   }) ;
});

/*===========================
 |  |  |  Clients | |
 ==========================*/
$('#clients-list').owlCarousel({
    autoplay: true,
    loop:true,
    margin:10,
    nav:true,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})


/*===========================
 |  |  |  Stats | |
 ==========================*/
$(window).on('load', function(){
    var addressString = "Road No. 6, Mohammadia Housing, Mohammadpur, Dhaka";
    var myLatlng = {lat: 51.507351, lng: -0.127758};
    
    var map = new google.maps.Map(document.getElementById("map"),{
        zoom: 11,
        center: myLatlng
    });
});



/*===========================
 |  |  |  Navigation | |
 ==========================*/

/*---show & Hight White Navigation Bar---*/

$(document).ready(function(){
    showHideNav();
   $(window).scroll(function(){
       showHideNav();
   }); 
    
    function showHideNav(){
        if($(window).scrollTop() > 50 ){
           $("nav").addClass("white-nav-top");
       }
       else{
           $("nav").removeClass("white-nav-top");
       }
    }
});





















