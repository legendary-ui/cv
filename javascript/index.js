// toggle navbar lnks

const menu = document.querySelector('.navbar-toggler')

menu.addEventListener('click', function() {
  menu.classList.toggle('is-active')
})

// skills description

var targetSkillsButton = document.querySelectorAll(".description-btn")

function getSkillDiv(classes) {
  for (var i = 0; i < targetSkillsButton.length; i++) {
    var eachDiv = document.querySelectorAll(".skill")[i]
    if (eachDiv.hidden != true) {
      eachDiv.toggleAttribute("hidden")
    }
  }
  document.querySelector(".skill." + classes).toggleAttribute("hidden")
}

// add review

var form = document.getElementById("jsReviewForm");

form.onsubmit = function(e) {

  e.preventDefault()

  var review = document.getElementsByClassName("jsReview")[0].value;
  var reviewName = document.getElementsByClassName("jsReviewName")[0].value;
  var carouselFrame = "<div class='carousel-item container-fluid'><h2 class='testimonial-text'>" + review + "</h2><img class='testimonial-image' src='' alt=''><em>" + reviewName + "</em></div>";

  var carousel = document.getElementsByClassName("jsCarousel")[0];
  carousel.innerHTML = carousel.innerHTML + carouselFrame;

  carouselItemsLength = document.getElementsByClassName("carousel-item").length;
  var indicatorHolder = document.getElementsByClassName("carousel-indicators")[0];
  indicatorHolder.innerHTML = ""

  for (var i = 0; i < carouselItemsLength; i++) {
    console.log(i);
    var indicatorFrame = '<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="' + i + '" aria-label="Slide ' + (i + 1) + '"></button>';
    indicatorHolder.innerHTML = indicatorHolder.innerHTML + indicatorFrame
  }

  form.reset();
}

// open quick view

function getSecondPart(str) {
  if (str.includes(" ") == true) {
    return str.split(" ")[1];
  } else {
    return str
  }
}

var triggerButton = document.getElementsByClassName("toggle-quick-view");

function sortQuickView(classes) {

  // double checks the classes
  nClasses = getSecondPart(classes)
  var targetView = document.querySelector(".quick-view." + nClasses)

  targetView.toggleAttribute("hidden")
  document.querySelector(".overlay").classList.toggle("greyout")
}

overlay = document.querySelector(".target")
overlay.addEventListener("click", function() {
  overlay.classList.toggle("greyout")
  for (var i = 0; i < 6; i++) {
    var eachView = document.getElementsByClassName("quick-view")[i]
    if (eachView.hidden != true) {
      eachView.toggleAttribute("hidden")
    }
  }
})


document.querySelector(".html.neon-switch").click()

var purchaseButton = document.querySelectorAll(".purchase-button")
for (var i = 0; i < purchaseButton.length; i++) {
  purchaseButton[i].addEventListener("click", function() {
    alert("Oops, Feature Under Work, Try again Later!")
  })
}

// navbar

// hiding navbar on scroll down, show navbar on scroll up
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".navbar").style.top = "0";
  } else {
    document.querySelector(".navbar").style.top = "-85px";
  }
  prevScrollpos = currentScrollPos;
}
