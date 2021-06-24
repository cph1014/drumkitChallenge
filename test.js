let clapIcon = document.getElementById("clap");
let closeIcon = document.getElementById("close");
let crashIcon = document.getElementById("crash");
let kickIcon = document.getElementById("kick");
let openIcon = document.getElementById("open");
let snareIcon = document.getElementById("snare");

//Detecting Button Press
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i<numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function (){
   var buttonInnerHTML = this.innerHTML;
   makeSound(buttonInnerHTML);
   buttonAnimation(buttonInnerHTML);
});
}

//Detecting keyboard Press
document.addEventListener("keypress",function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key){
switch (key) {
  case "a":
    var boom = new Audio('sounds/boom.wav');
    boom.play();
  break;

  case "s":
    var clap = new Audio('sounds/clap.wav');
    clap.play();
    clapIcon.style.transform = "scale(1.2)"; 
    setTimeout(function(){
      clapIcon.style.transform = "scale(1.0)"},200);

  case "d":
    var hihat = new Audio('sounds/hihat.wav');
    hihat.play();

  break;
  case "f":
    var kick = new Audio('sounds/kick.wav');
    kick.play();
    kickIcon.style.transform = "scale(1.2)"; 
    setTimeout(function(){
      kickIcon.style.transform = "scale(1.0)"},200);
      
  break;
  case "g":
    var openhat = new Audio('sounds/openhat.wav');
    openhat.play();
    openIcon.style.transform = "scale(1.2)"; 
    setTimeout(function(){
      openIcon.style.transform = "scale(1.0)"},200);

  break;
  case "h":
    var ride = new Audio('sounds/ride.wav');
    ride.play();

  break;
  case "j":
    var snare = new Audio('sounds/snare.wav');
    snare.play();
    snareIcon.style.transform = "scale(1.2)"; 
    setTimeout(function(){
      snareIcon.style.transform = "scale(1.0)"},200);

  break;

  case "k":
    var tink = new Audio('sounds/tink.wav');
    tink.play();
    break;

  case "l":
    var tom = new Audio('sounds/tom.wav');
    tom.play();
    break;

  default: console.log();
}

}

function buttonAnimation(currentKey){
var activeButton = document.querySelector("." + currentKey );
activeButton.classList.add("pressed");

setTimeout(function(){
  activeButton.classList.remove("pressed");
},100);
}

//icon with sounds
clapIcon.addEventListener("click", ()=>{
  document.getElementById("clapclap").play();
})

closeIcon.addEventListener("click", ()=>{
  document.getElementById("closeclose").play();
})

crashIcon.addEventListener("click", ()=>{
  document.getElementById("crashcrash").play();
})

kickIcon.addEventListener("click", ()=>{
  document.getElementById("kickkick").play();

})

openIcon.addEventListener("click", ()=>{
  document.getElementById("openopen").play();
})

snareIcon.addEventListener("click", ()=>{
  document.getElementById("snaresnare").play();
})