/*-------------google map-----------------*/
var map ;

function initMap() {
  var myLatLng =  {lat: -34.397, lng: 150.644};

  map = new google.maps.Map(document.getElementById("b-map"), {
    center: myLatLng,
    zoom: 8,
    disableDefaultUI: true,
    scrollwheel: false

  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!'
  });
}

$(document).ready(function() {

  function closeAllWindow(){
    if($('[opened="on"]')){
      $('[opened="on"]').attr('opened', 'off').hide();
    }
  }
  /*-----------scroll bar-------------*/
  function initCustomScrollBar(){
    $('div[customscrollbar]').customScrollbar({
      skin: "default-skin", 
      hScroll: false,
      setAnimationSpeed:300,
      updateOnWindowResize: true,
      preventDefaultScroll: true
    });  
  }
  initCustomScrollBar();

  /*-----------open header nav--------*/
  $('.navbar-toggle').click(function(){
    $('.b-nav__nav-link').toggleClass('active');
    $('.b-nav__nav-link').removeClass('scroll');
  });
  /*-----------remove/add events from .b-open ---------*/
  function removeAddEvents(){
    if($(window).width() <= 481){
      $('.b-open').off();
    }else{
      $('.b-close').click(function(e){
          e.preventDefault();
          $($(this).attr('href')).removeClass('fadeInLeft');
          $($(this).attr('href')).attr('opened','off');
          $($(this).attr('href')).addClass('animated fadeOutLeft');
      });

      $('.b-open').click(function(e){
        e.preventDefault();
        $($(this).attr('href')).removeClass('fadeOutLeft');
        
        /*close all window if opened*/
        if($('[opened="on"]')){
          $('[opened="on"]').attr('opened', 'off').hide();
        }
        
        $($(this).attr('href')).addClass('animated fadeInLeft');
        $($(this).attr('href')).attr('opened','on');
        $($(this).attr('href')).show();
         
        /*init customscrollbar in header*/  
        if($(this).closest('div').find('div[customscrollbar]')){
          initCustomScrollBar();
        } 
      });
    }
  }
/**/
  function slideCategory(){
    if($(window).width() <= 481){
      $('.b-open').click(function(e){
        e.preventDefault();
        $('.b-nav__nav-link').toggleClass('scroll');
        $('.b-navpopup').removeClass('opened');
        $($(this).attr('href')).addClass('opened');
      });    
    }else{
      $('.b-nav__nav-link').removeClass('scroll');
      $('.b-category-nav,.b-search-nav,.b-archive-nav').removeClass('opened');
      $('.b-nav__nav-link').removeClass('active');
    }
  }
/*resze window*/
  $(window).resize(function() {
    console.log('resize');
    removeAddEvents();
    slideCategory();
  });

  removeAddEvents();
  slideCategory();
  
  $('#search_category').fastLiveFilter('#search_list_category');
});

