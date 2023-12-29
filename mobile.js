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
    autoplayTimeout:1000,
  });


  // Add touch event listeners
  // owl.on("drag.owl.carousel", function (event) {
  //   $(".dot").removeClass("active");
  // });

  // owl.on("changed.owl.carousel", function (event) {
  //   var current = event.item.index;
  //   var dots = $(".dot");
  //   dots.removeClass("active");
  //   dots.eq(current % dots.length).addClass("active");
  // });
  $(".dots-indicator .dot").click(function () {
    var index = $(this).index();
    owl.trigger("to.owl.carousel", [index, 300]);
    $(".dot").removeClass("active");
    $(this).addClass("active");
  });
});



// setInterval(() => {
//   // autoSlide(actDotNo);
// }, 4000);

// console.log(dot[0])
// function def(){
//   for(let i=0; i<dot.length; i++){
//     if(dot[i].classList.contains("active")){
//       dot[i].classList.remove("active");
//     }
//   }
  // for(i=0;i<items.length;i++){
  //   if(items[i].classList.contains("act-item")){
  //     items[i].classList.remove("act-item");
  //   }
  // }
// }

function actdot(e){
  def();
  // for(let i=0; i<dot.length; i++){
  //   if(dot[i].classList.contains("active")){
  //     dot[i].classList.remove("active");}
  //   }
  let elem = document.getElementById(e);
  if(!(elem.classList.contains("active"))){
    elem.classList.add("active");
  }
  let actitemclass = "item"+e;
  let items = document.querySelector(`.${actitemclass}`);
  if(!(items.classList.contains("act-item"))){
    items.classList.add("act-item");
  }

}
