
// adds and removed stickyadd class
$(window).on("scroll", function () {
  $(window).scrollTop() >= 50 ? $(".sticky").addClass("stickyadd") : $(".sticky").removeClass("stickyadd")
});



// on collpased(smaller screens) nav when link is clicked hide it.
$(document).on("click", ".navbar-collapse.show", function (e) {
  $(e.target).is("a") && $(this).collapse("hide")
})

// spyscroll animation
$(".navbar-nav a, .scroll_down a").on("click", function (e) {
  var a = $(this);
  $("html, body").stop().animate({
    scrollTop: $(a.attr("href")).offset().top - 0
  }, 1500, "easeInOutExpo"), e.preventDefault()
})

$("#navbarCollapse").scrollspy({
  offset: 20
})


// work icon tooltips
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$(window).on("load", function () {
  var e = $(".work-filter")
  e.isotope({
    filter: "*",
    layoutMode: "masonry",
    animationOptions: {
      duration: 750,
      easing: "linear"
    }
  })
})



// button to scroll back to top

$(window).on("scroll", function () {
  $(this).scrollTop() > 100 ? $(".back_top").fadeIn() : $(".back_top").fadeOut()
}), $(".back_top").click(function () {
  return $("html, body").animate({
    scrollTop: 0
  }, 1e3), !1
})

// preloader animation
window.onload = function () {
  //hide the preloader
  $("#status").fadeOut(), $("#preloader").fadeOut("slow"), $("body").delay(10).css({
    overflow: "visible"
  })
}

// close navbar when clicked outside on smaller screens
$(function () {
  $(document).click(function (event) {
    $('.navbar-collapse').collapse('hide');
  });
});



