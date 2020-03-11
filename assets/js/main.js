/*
 * Evento -  Event html  Template
 * Build Date: jan 2018
 * Author: colorlib
 * Copyright (C) 2018 colorlib
 */
 /* ------------------------------------- */
/*  TABLE OF CONTENTS
 /* ------------------------------------- */
/*   PRE LOADING                          */
/*   WOW                                 */
/*   sliders                      */
/*    MAPS                               */
/*   COUNTER JS              */

const nodes = [].slice.call(document.querySelectorAll('li'), 0);
const directions  = { 0: 'top', 1: 'right', 2: 'bottom', 3: 'left' };
const classNames = ['in', 'out'].map((p) => Object.values(directions).map((d) => `${p}-${d}`)).reduce((a, b) => a.concat(b));

const getDirectionKey = (ev, node) => {
  const { width, height, top, left } = node.getBoundingClientRect();
  const l = ev.pageX - (left + window.pageXOffset);
  const t = ev.pageY - (top + window.pageYOffset);
  const x = (l - (width/2) * (width > height ? (height/width) : 1));
  const y = (t - (height/2) * (height > width ? (width/height) : 1));
  return Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
}

class Item {
  constructor(element) {
    this.element = element;    
    this.element.addEventListener('mouseover', (ev) => this.update(ev, 'in'));
    this.element.addEventListener('mouseout', (ev) => this.update(ev, 'out'));
  }
  
  update(ev, prefix) {
    this.element.classList.remove(...classNames);
    this.element.classList.add(`${prefix}-${directions[getDirectionKey(ev, this.element)]}`);
  }
}

nodes.forEach(node => new Item(node));


$('.nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

var options = {"particles":{"number":{"value":90,"density":{"enable":true,"value_area":552.4033491425909}},"color":{"value":"#000000"},"shape":{"type":"circle","stroke":{"width":2,"color":"#ffffff"},"polygon":{"nb_sides":3},"image":{"src":"img/github.svg","width":70,"height":100}},"opacity":{"value":1,"random":true,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":2,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":1.5782952832645452,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":true,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":7},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":false};
particlesJS("particle", options);


var btn = $('#but1');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});


$(document).scroll(function() {
  var scroll = $(this).scrollTop();
  if (scroll >= 150) {
    $("#popUp").css("margin-left", "-425px");
    $("#plus").css("margin-left", "0px");
  }
});

$("#plus").click(function() {
  $("#popUp").css("margin-left", "0px");
  $("#plus").css("margin-left", "-425px");
});

$("#close").click(function() {
  $("#popUp").css("margin-left", "-425px");
  $("#plus").css("margin-left", "0px");
});

    /* ==============================================
/*  PRE LOADING
  =============================================== */
'use strict';
$(window).load(function() {
    $('.loader').delay(200).fadeOut('slow');
});


$(document).ready(function() {

    'use strict';
    /* ==============================================
     /*   wow
      =============================================== */
    var wow = new WOW(
        {
            animateClass: 'animated',
            offset: 10,
            mobile: true
        }
    );
    wow.init();
    /* ==============================================
        STICKY HEADER
        =============================================== */

    $(window).on('scroll', function () {
        if ($(window).scrollTop() < 100) {
            $('.header').removeClass('sticky_header');
        } else {
            $('.header').addClass('sticky_header');
        }
    });
    /* --------------------------------------------------------
     COUNTER JS
     ----------------------------------------------------------- */

    

    /* ==============================================
     SLIDER
     =============================================== */
    $(".cover_slider").owlCarousel({
        loop:true,
        autoplay:true,
        smartSpeed:1000,
        autoplayHoverPause:false,
        dots:true,
        nav:false,
        items:1,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        dotsContainer: '.cover_dots'
    });

    $(".brand_carousel").owlCarousel({
        loop:true,
        autoplay:true,
        smartSpeed:450,
        autoplayHoverPause:false,
        dots:false,
        nav:false,
        responsiveClass:true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3

            },
            1000:{
                items:5

            }
        },
        items:5
    });
    /* ------------------------------------- */
    /* Animated progress bars
     /* ------------------------------------- */

    var waypoints = $('.progress_container').waypoint(function() {
        $('.progress .progress-bar').progressbar({
            transition_delay: 1000
        });
    },{
        offset: '50%'
    });


        /* --------------------------------------------------------
    MAPS
    ----------------------------------------------------------- */
    var map = $('#map');
    if(map.length > 0) {
        google.maps.event.addDomListener(window, 'load', init);
        var lattuide = map.attr('data-lat');
        var longtuided = map.attr('data-lon');
    }
    function init() {
        // Basic options for a simple Google Map
        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 16,
            scrollwheel: false,
            navigationControl: false,
            mapTypeControl: false,
            scaleControl: false,
            // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(lattuide, longtuided), // New York

            // How you would like to style the map.
            // This is where you would paste any style found on Snazzy Maps.
            styles: [{"featureType":"water","stylers":[{"saturation":43},{"lightness":-11},{"hue":"#0088ff"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"hue":"#ff0000"},{"saturation":-100},{"lightness":99}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#808080"},{"lightness":54}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ece2d9"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#ccdca1"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#767676"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"poi","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#b8cb93"}]},{"featureType":"poi.park","stylers":[{"visibility":"on"}]},{"featureType":"poi.sports_complex","stylers":[{"visibility":"on"}]},{"featureType":"poi.medical","stylers":[{"visibility":"on"}]},{"featureType":"poi.business","stylers":[{"visibility":"simplified"}]}]
        };

        // Get the HTML DOM element that will contain your map
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.getElementById('map');

        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);

        // Let's also add a marker while we're at it
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(lattuide, longtuided),
            map: map,
            title: 'evento!'
        });
    }

});