


$("#jsPasswordCheck").click(function(){
  var givenPassword = prompt("Enter Password");
  if (givenPassword == "123"){
    window.location.href = "file:///C:/Users/moham/Desktop/FullStackWeb/discord.html"
  } else{
    alert("access denied")
  }
})

for (var i = 0; i < 4; i++) {
  document.querySelectorAll(".jsAddContentAboutMe")[i].addEventListener("click", function(){

    var textInsideButton = this.innerHTML;

    switch (textInsideButton) {
      case "See My Hobbies!":
        document.querySelectorAll(".addedContentHobbies")[0].classList.toggle("added-content");
        document.querySelectorAll(".jsAddedContentAboutMeAdjust")[0].classList.toggle("jsAddedContentAboutMe");
        document.querySelectorAll("#jsSectionAddContentAdjust")[0].classList.toggle("colored-section");
      break;

      case "See My Contacts!":
        document.querySelectorAll(".addedContentContacts")[0].classList.toggle("added-content");
        document.querySelectorAll(".jsAddedContentAboutMeAdjust")[0].classList.toggle("jsAddedContentAboutMe");
        document.querySelectorAll("#jsSectionAddContentAdjust")[0].classList.toggle("colored-section");
      break;

      case "See My Skills!":
        document.querySelectorAll(".addedContentSkills")[0].classList.toggle("added-content");
        document.querySelectorAll(".jsAddedContentAboutMeAdjust")[0].classList.toggle("jsAddedContentAboutMe");
        document.querySelectorAll("#jsSectionAddContentAdjust")[0].classList.toggle("colored-section");
      break;

      default:console.log(this.innerHTML)

    }

  });


}
