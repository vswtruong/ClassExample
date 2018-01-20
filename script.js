const trivia = document.getElementById("trivia");
const videoButton = document.getElementById("videoButton");
const seagalPic = document.getElementById('seagalPic');
const seagalVideo = document.getElementById("seagalVideo")

triviaFunc = () => {
  alert("Please enter the letter for the corresponding values")
  const value1 = prompt("What was Steven Seagal's first movie? a: Above the Law, b. Under the Siege, c. The Glimmer Man");

if(value1 === "a"){
  alert("You got it right!")
}  else {
  alert("Incorrect, please try again.")
}
}


trivia.addEventListener("click", function(){
  triviaFunc();
})

videoButton.addEventListener("click", function(){
  seagalPic.classList.toggle("displayClass");
seagalVideo.classList.toggle("displayClass");
});
