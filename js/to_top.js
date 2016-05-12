jQuery(document).ready(function () {
  jQuery('a.scroll').bind("click", function (e) {
    var anchor = jQuery(this);
    jQuery('html, body').stop().animate({
      scrollTop: jQuery(anchor.attr('href')).offset().top
    }, 1000);
    e.preventDefault();
  });
  var topButton = jQuery('.scrollFadeIn');
  topButton.hide();
  jQuery(function () {
    jQuery(window).scroll(function () {
      if (jQuery(this).scrollTop() > 100) {
        topButton.fadeIn();
      } else {
        topButton.fadeOut();
      }
    });
  });

  return false;
});