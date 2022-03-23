
/* Fixed header */
$(function() {
  
  let header = $("#header");
  let section = $("#section"); 
  let sectionH = section.innerHeight();
  let scrollPos = $(window).scrollTop();

  checkSkroll(scrollPos, sectionH);

  $(window).on("scroll resize", function() {
    sectionH = section.innerHeight();
    scrollPos = $(this).scrollTop();    
    checkSkroll(scrollPos, sectionH); 
  });

  function checkSkroll(scrollPos, sectionH) {
    if( scrollPos > sectionH ) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  }

  /* Smooth scroll */

  $("[data-scroll]").on("click", function(event){
    event.preventDefault();

    let elenentId = $(this).data('scroll');
    let elementOffset = $(elenentId).offset().top;

    nav.removeClass("show");

    $("html, body").animate({
      scrollTop: elementOffset - 60
    }, 800);    
  });
});

/* NavToggle */

let nav = $("#nav");
let navToggle = $("#navToggle");

  navToggle.on("click", function(event){
    event.preventDefault();
    nav.toggleClass("show");
});

/* Scroll on top */
$(function() {
  $(window).scroll(function() {
    if($(this).scrollTop() != 0) {

    $('#button').fadeIn();
  } 
  });

      $('#button').click(function() {
      $('body,html').animate({scrollTop:0},800); 
     });
  });