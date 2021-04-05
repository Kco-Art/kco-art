$(window).scroll(function() {
  if ($(document).scrollTop() > 200) {
    $('#navbar, #kco').addClass('shrink');
  } else {
    $('#navbar, #kco').removeClass('shrink');
  }
});