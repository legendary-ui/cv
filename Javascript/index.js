// interactive website

for (var i = 0; i < 4; i++) {
  document.getElementsByClassName("download-button")[i].addEventListener("click", handleClick);

  function handleClick() {
    document.getElementsByClassName("jsTextChange")[0].style.fontSize = "2.5rem"
    document.querySelector(".jsTextChange").innerHTML = "Thank you for using us! We would like your feed back on how our website was. Looking forward for more deals!";
  }
}

document.getElementById("addContentButton").addEventListener("click", addContentFunc)

function addContentFunc(){
  document.getElementsByClassName("added-content")[0].classList.remove("added-content")
}

// add review

var form = document.getElementById("jsReviewForm");

form.onsubmit = function(e){

  e.preventDefault()

  var review = document.getElementsByClassName("jsReview")[0].value ;
  var reviewName = document.getElementsByClassName("jsReviewName")[0].value;
  var carouselFrame = "<div class='carousel-item container-fluid'><h2 class='testimonial-text'>" + review + "</h2><img class='testimonial-image' src='' alt=''><em>" + reviewName + "</em></div>";

  var carousel = document.getElementsByClassName("jsCarousel")[0];
  carousel.innerHTML = carousel.innerHTML + carouselFrame;

  carouselItems = document.getElementsByClassName("Carousel-item");

  for(var i=3; i=carouselItems.length; i++){
    var indicators = document.getElementsByClassName("carousel-indicators")[0];
    var addIndicator = "<li data-target='#carouselExampleControls' data-slide-to='"+ i +"'></li>";
    indicators.innerHTML = indicators.innerHTML + addIndicator
  }

  form.reset();
}
