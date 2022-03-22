$(function() {

  let header = $("#header");
  let section = $("#section"); 
  let sectionH;
  let scrollPos = $(window).scrollTop();

  $(window).on("scroll load resize", function() {
    sectionH = section.innerHeight();
    scrollPos = $(this).scrollTop();
    
    if( scrollPos > sectionH ) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }

  });
});