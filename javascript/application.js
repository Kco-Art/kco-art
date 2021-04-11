$(window).scroll(function() {

  var screenHeight = window.innerHeight;
  var pageHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  );

  if (screenHeight - 100 < pageHeight ) {
    return
  }

  if ($(document).scrollTop() > 200) {
    $('#navbar, #kco').addClass('shrink');
  } else {
    $('#navbar, #kco').removeClass('shrink');
  }
});

