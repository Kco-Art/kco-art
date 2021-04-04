$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('#navbar, #kco').addClass('shrink');
  } else {
    $('#navbar, #kco').removeClass('shrink');
  }
});