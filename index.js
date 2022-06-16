alert(document.querySelector("script").getAttribute("src"));// just a test to see if its linked


//document.querySelector("button").addEventListener("click", handleClick);

//function handleClick() {
//    alert("i got clicked")
//}
var ButtonsArr = [];

// document.querySelector("button.w").addEventListener("click", function() {
//     alert("w got clicked");
// });
// document.querySelector("button.a").addEventListener("click", function() {
//     alert("a got clicked");
// });
// document.querySelector("button.s").addEventListener("click", function() {
//     alert("s got clicked");
// });
// document.querySelector("button.d").addEventListener("click", function() {
//     alert("d got clicked");
// });
// document.querySelector("button.j").addEventListener("click", function() {
//     alert("j got clicked");
// });
// document.querySelector("button.k").addEventListener("click", function() {
//     alert("k got clicked");
// });
// document.querySelector("button.l").addEventListener("click", function() {
//     alert("l got clicked");
// });

//Detecting button press

for (var i=0; i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {

        var buttonInnerHTML = this.innerHTML;

        MakeSound(buttonInnerHTML);

        ButtonAnimation(buttonInnerHTML);
    });

}

//Detecting keyboard press

document.addEventListener("keydown", function(event) {
MakeSound(event.key);

ButtonAnimation(event.key);
})

function MakeSound(key) {

    switch (key) {
            case "w":
                var crash = new Audio('sounds/crash.mp3');
                crash.play();
                break;
        
            case "a":
                var kickbass = new Audio('sounds/kick-bass.mp3');
                kickbass.play();
                break;
                
            case "s":
                var snare = new Audio('sounds/snare.mp3');
                snare.play();
                break;

            case "d":
                var tom1 = new Audio('sounds/tom-1.mp3');
                tom1.play();
                break;

            case "j":
                var tom2 = new Audio('sounds/tom-2.mp3');
                tom2.play();
                break;

            case "k":
                var tom3 = new Audio('sounds/tom-3.mp3');
                tom3.play();
                break;

            case "l":
                var tom4 = new Audio('sounds/tom-4.mp3');
                tom4.play();
                break;

            
            default: console.log(buttonInnerHTML);
                break;
        }
}

function ButtonAnimation(currentKey){

   var activeButton = document.querySelector("." + currentKey);

   activeButton.classList.add("pressed");
   setTimeout(function(){
       activeButton.classList.remove("pressed");    
   }, 100);
}