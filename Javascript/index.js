for (var i = 0; i < 4; i++){
  document.getElementsByClassName("download-button")[i].addEventListener("click", handleClick);
  function handleClick(){
    document.getElementsByClassName("jsTextChange")[0].style.fontSize = "2.5rem"
    document.querySelector(".jsTextChange").innerHTML = "Thank you for using us! We would like your feed back on how our website was. Looking forward for more deals!";
  }
}
