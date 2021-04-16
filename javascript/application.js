$(window).scroll(function() {

  var screenHeight = window.innerHeight;
  var pageHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  );

  if (pageHeight - screenHeight < 200 ) {
    return
  }

  if ($(document).scrollTop() > 200) {
    $('#navbar, #kco').addClass('shrink');
  } else {
    $('#navbar, #kco').removeClass('shrink');
  }
});

(function ($) {
  var $grid = $('.masonry').imagesLoaded( function() {
    $("#loader-wrapper").remove()
    $grid.removeClass("d-none")
    $grid.masonry({
      itemSelector: '.card-item',
      gutter: 15,
      percentPosition: true
    })
  });
  var $imagesGrid = $('.images-masonry').imagesLoaded( function() {
    $("#loader-wrapper").remove()
    $imagesGrid.removeClass("d-none")
    $imagesGrid.masonry({
      itemSelector: '.card-item',
      gutter: 80,
      percentPosition: true
    })
  });
})(jQuery);
