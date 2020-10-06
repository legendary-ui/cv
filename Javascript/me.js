for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".jsAddContentAboutMe")[i].addEventListener("click", function(){

    var textInsideButton = this.innerHTML;

    switch (textInsideButton) {
      case "See My Hobbies!":
        document.querySelectorAll(".addedContentHobbies")[0].classList.remove("added-content");
        document.querySelectorAll(".jsAddedContentAboutMe")[0].classList.remove("jsAddedContentAboutMe");
      break;

      case "See My Contacts!":
        document.querySelectorAll(".addedContentContacts")[0].classList.remove("added-content");
        document.querySelectorAll(".jsAddedContentAboutMe")[0].classList.remove("jsAddedContentAboutMe");
      break;

      case "See My Skills!":
        document.querySelectorAll(".addedContentSkills")[0].classList.remove("added-content");
        document.querySelectorAll(".jsAddedContentAboutMe")[0].classList.remove("jsAddedContentAboutMe");
      break;

      default:console.log(this.innerHTML)

    }

  });


}


$("#jsPasswordCheck").click(function(){
  var givenPassword = prompt("Enter Password")
  if (givenPassword == "123"){
    window.location.href = "file:///C:/Users/moham/Desktop/FullStackWeb/discord.html"
  } else{
    alert("access denied")
  }
})
