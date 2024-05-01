


$(function () {
  $('#navbar_top .navbar-nav a').on('click', function () {

    $('#navbar_top .navbar-nav').find('li.active').removeClass('active');
    $(this).parent('li').addClass('active');
  });

  $( document ).ready(function() {

    // Add hover action for dropdowns
    let dropdown_hover = $(".dropdown-hover");
    dropdown_hover.on('mouseover', function(){
        let menu = $(this).find('.dropdown-menu'), toggle = $(this).find('.dropdown-toggle');
        menu.addClass('show');
        toggle.addClass('show').attr('aria-expanded', true);
    });
    dropdown_hover.on('mouseout', function(){
        let menu = $(this).find('.dropdown-menu'), toggle = $(this).find('.dropdown-toggle');
        menu.removeClass('show');
        toggle.removeClass('show').attr('aria-expanded', false);
    });

});
  //Google Map
  // var get_latitude = $('#google-map').data('latitude');
  // var get_longitude = $('#google-map').data('longitude');
  // var get_zoom = $('#google-map').data('zoom');


  // function initialize_google_map() {
  //   var myLatlng = new google.maps.LatLng(get_latitude, get_longitude);
  //   var mapOptions = {
  //     zoom: get_zoom,
  //     scrollwheel: false,
  //     center: myLatlng
  //   };
  //   var map = new google.maps.Map(document.getElementById('google-map'), mapOptions);
  //   var marker = new google.maps.Marker({
  //     position: myLatlng,
  //     map: map
  //   });
  // }
  // google.maps.event.addDomListener(window, 'load', initialize_google_map);


});

// Preloader
$(window).on('load', function () {
  $('#preloader').delay(100).fadeOut('slow', function () { $(this).remove(); });
});

$(window).on('scroll', function () {
  if ($(this).scrollTop() > 100) {
    $('.back-to-top').fadeIn('slow');
  } else {
    $('.back-to-top').fadeOut('slow');
  }
});

