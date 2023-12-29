let dot = document.querySelectorAll(".dot");
let items = document.querySelectorAll(".item");
let actDotNo = 0;
$(document).ready(function () {
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 1,
    loop: true,
    nav: false,
    dots: true,
    dotsContainer: '#dots',
    dotsEach: true,
    autoplay:true,
    autoplayTimeout:2500,
  });

  $(".dots-indicator .dot").click(function () {
    var index = $(this).index();
    owl.trigger("to.owl.carousel", [index, 300]);
    $(".dot").removeClass("active");
    $(this).addClass("active");
  });
});
