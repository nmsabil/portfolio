
// adds and removed stickyadd class
$(window).on("scroll", function () {
  $(window).scrollTop() >= 50 ? $(".sticky").addClass("stickyadd") : $(".sticky").removeClass("stickyadd")
});



// on collpased nav when link is clicked hide it.
$(document).on("click", ".navbar-collapse.show", function (e) {
  $(e.target).is("a") && $(this).collapse("hide")
})


