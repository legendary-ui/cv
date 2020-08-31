// interactive website

for (var i = 0; i < 4; i++){
  document.getElementsByClassName("download-button")[i].addEventListener("click", handleClick);
  function handleClick(){
    document.getElementsByClassName("jsTextChange")[0].style.fontSize = "2.5rem"
    document.querySelector(".jsTextChange").innerHTML = "Thank you for using us! We would like your feed back on how our website was. Looking forward for more deals!";
  }
}

// review submit form
var form = document.getElementById("jsReviewForm");

form.onsubmit = function(e){

  e.preventDefault()

  var review = document.getElementsByClassName("jsReview")[0].value ;
  var reviewName = document.getElementsByClassName("jsReviewName")[0].value;
  var carouselFrame = "<div class='carousel-item container-fluid'><h2 class='testimonial-text'>" + review + "</h2><img class='testimonial-image' src='' alt=''><em>" + reviewName + "</em></div>";

  var carousel = document.getElementsByClassName("jsCarousel")[0];
  carousel.innerHTML = carousel.innerHTML + carouselFrame;

  form.reset();
}
