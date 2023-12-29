let sec = document.querySelectorAll("section");
let svgElem = document.querySelector(".svg");
let dots = document.querySelectorAll(".dotsst");
let pathfill = document.querySelector(".transrgwht").style;
pathfill.transition = "stroke-dasharray, 2s";

let secProp = [
  {
    'index': 0,
    'bgcolor': '#6015ab',
    'sdArray': '0'
  },
  {
    'index': 1,
    'bgcolor': '#352091',
    'sdArray': '140'
  },
  {
    'index': 2,
    'bgcolor': '#0f1239',
    'sdArray': '280'
  },
  {
    'index': 3,
    'bgcolor': '#17273c',
    'sdArray': '415'
  },
  {
    'index': 4,
    'bgcolor': '#154fa2',
    'sdArray': '530'
  },
  {
    'index': 5,
    'bgcolor': '#022d92',
    'sdArray': '680'
  },
  {
    'index': 6,
    'bgcolor': '#00824a',
    'sdArray': '880'
  }
]

let active = 0;

function defaultSet() {
  console.log("exdefault");
  sec.forEach((e) => {
    e.classList.add("none");
  });
  dots.forEach((e) => {
    e.style.fill = "rgb(255 255 255 / 50%)";
  });
}

// for the exit animation of elements
function exitAnimation() {
  console.log("exit animation triggered!");
  document.querySelectorAll(".animate__fadeInDown").forEach((e) => {
    e.classList.add("animate__fadeOutUp");
  });
  document.querySelectorAll(".animate__fadeInUp").forEach((e) => {
    e.classList.add("animate__fadeOutDown");
  });
  document.querySelectorAll(".animate__fadeInUpBig").forEach((e) => {
    e.classList.add("animate__fadeOutDownBig");
  });
  document.querySelectorAll(".animate__fadeInDownBig").forEach((e) => {
    e.classList.add("animate__fadeOutUpBig");
  });
  document.querySelectorAll(".animate__fadeInRight").forEach((e) => {
    e.classList.add("animate__fadeOutRight");
  });
  document.querySelectorAll(".animate__zoomOut").forEach((e) => {
    e.classList.add("animate__zoomIn");
  });
  document.querySelectorAll(".animate__zoomIn").forEach((e) => {
    e.classList.add("animate__zoomOut");
  });
}

// for the entry animation of the text and images
function entryAnimation() {
  console.log("entry animation triggered!");
  document.querySelectorAll(".animate__fadeInDown").forEach((e) => {
    e.classList.remove("animate__fadeOutUp");
  });
  document.querySelectorAll(".animate__fadeInUp").forEach((e) => {
    e.classList.remove("animate__fadeOutDown");
  });
  document.querySelectorAll(".animate__fadeInUpBig").forEach((e) => {
    e.classList.remove("animate__fadeOutDownBig");
  });
  document.querySelectorAll(".animate__fadeInDownBig").forEach((e) => {
    e.classList.remove("animate__fadeOutUpBig");
  });
  document.querySelectorAll(".animate__fadeInRight").forEach((e) => {
    e.classList.remove("animate__fadeOutRight");
  });
  document.querySelectorAll(".animate__zoomIn").forEach((e) => {
    e.classList.remove("animate__zoomOut");
  });
  document.querySelectorAll(".animate__zoomOut").forEach((e) => {
    e.classList.remove("animate__zoomIn");
  });
}

// svg dots for the active pages
function noOfDotActive(n) {
  for (var i = 0; i < n; i++) {
    dots[i].style.fill = "white";
  }
}

// to check which section is currently active
function checkActive(){
  for(var i=0; i<sec.length; i++){
    if(!(sec[i].classList.contains('none'))){
        active = i;
    }
}
}

// to display from first to last page
function showSec(index, bgcolor, strokeDashArrayVal){
  exitAnimation();
  pathfill.strokeDasharray = `${strokeDashArrayVal}, 1000`;
  setTimeout(() => {
    entryAnimation();
    defaultSet();
    sec[index].classList.remove("none");
    svgElem.style.backgroundColor = bgcolor;
    noOfDotActive(index+1);
    checkActive();
  }, 650);
}


window.addEventListener('wheel', handleScroll);

function handleScroll(event) {
  // Check the deltaY value to determine scroll direction
  if (event.deltaY < 0) {
    console.log('Scrolling upward');

    // to directly go to the last section on a single scroll 
    // if(active === 0){
    //   active = 7;
    // }

    try {
      showSec(active-1, secProp[active-1].bgcolor, secProp[active-1].sdArray)
    } catch (error) {
      console.log("Can't Scroll Backward: As this is the first page")      
    }

    // Perform actions for upward scroll
  } else if (event.deltaY > 0) {
    console.log('Scrolling downward');

    // to directly go to the first section on a single scroll 
    // if(active+1 === 7){
    //   active=-1;
    // }
    
    try {
      showSec(active+1, secProp[active+1].bgcolor, secProp[active+1].sdArray)
    } catch (error) {
      console.log("Can't Scroll Forward: As this is the last page")
    }
    // Perform actions for downward scroll
  } else {
    // deltaY is 0, indicating no vertical scroll
    console.log('No vertical scroll');
  }
}
