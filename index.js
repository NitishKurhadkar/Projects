for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var option =this.innerHTML;
        audioPlay(option);
        buttonPress(option);
       
   })


}
    document.addEventListener("keydown",function(event){
    var option = event.key;
    audioPlay(option);
    buttonPress(option);
    })

function audioPlay(option) {
    switch (option) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;

        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();   
            break;

        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;

        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;

        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;

        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;

        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        default:
    }
}

function buttonPress(option){

    var activeBtn = document.querySelector("." + option);
    activeBtn.classList.add("pressed");

    setTimeout(function(){
        activeBtn.classList.remove("pressed");},100)
    }
