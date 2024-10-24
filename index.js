//by pressing on button playing music
var noOfDrums = document.querySelectorAll(".drum").length;
for ( var i = 0; i < noOfDrums ; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click" , handleClick); 
    function handleClick() {
        var sound = this.innerHTML;
            makeSound(sound);
            buttonAnimation(sound);
        }       
    }
//events for playing music with keyboard
document.addEventListener("keypress" , handleKey);
    function handleKey(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
}
//applying sound to keys / button
function makeSound(key){
    switch(key){
        case "w":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
        break;
        case "a":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
        break;
        case "s":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
        break;
        case "d":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
        break;
        case "j":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
        break;
        case "k":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
        break;
        case "l":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
        break;
        default:
            console.log(sound);
    }
} 
//animation
function buttonAnimation(buttonPressed){
    
    var currentButton = document.querySelector("."+ buttonPressed);
    currentButton.classList.add("pressed");
    setTimeout( function(){
        currentButton.classList.remove("pressed");
    }, 100);
}


