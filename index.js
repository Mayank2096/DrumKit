
// loopLength=document.querySelectorAll(".drum").length;
// for (var i=0; i<loopLength; i++)
// {
//     document.querySelectorAll(".drum")[i].addEventListener("click",mouseClick);
// }

// function mouseClick(){


    // var clickObj= this.innerHTML;
    // className= "."+clickObj;
    // document.querySelector(className).style.color = "black";
    // music(clickObj);
    // buttonAnimation(clickObj);

// }

    

// document.addEventListener("keydown", function (evt){  // here we are collecting EVENT OCCURED
//   var keyClick=evt.key;                               // here we are collecting EVENT KEY !!!
//   // alert("key pressed is "+ keyClick);
//   music(keyClick);
//   className="."+keyClick;
//   document.querySelector(className).style.color="blue";
//   buttonAnimation(keyClick);
// }
// );

function music(key){

    // different sounds for different music
    // basically giving different responses to different user interaction
    // where many if-else statements --> use Switch
    switch(key) {
        case "w":
            tom_1= new Audio("./sounds/tom-1.mp3");
            tom_1.play();
        break;
        case "a":
            tom_2= new Audio("./sounds/tom-2.mp3");
            tom_2.play();
          break;
        case "s":
            tom_3= new Audio("./sounds/tom-3.mp3");
            tom_3.play();
          break;
        case "d":
            tom_4= new Audio("./sounds/tom-4.mp3");
            tom_4.play();
          break;
        case "j":
            crash= new Audio("./sounds/crash.mp3");
            crash.play();
          break;
        case "k":
            kick= new Audio("./sounds/kick-bass.mp3");
            kick.play();
          break;
        case "l":
            snare= new Audio("./sounds/snare.mp3");
            snare.play();
          break;
        default:
          alert("click right")
      }
}


// function buttonAnimation(buttonKey){

//   var newKey=buttonKey;
//   var newClass="."+newKey;

//   var activeButton= document.querySelector(newClass);

//   activeButton.classList.add("pressed");

//   setTimeout(function(){
//     activeButton.classList.remove("pressed");
//   }, 500);
// }



$("button").click(function(){

  var clickObj= this.innerHTML;
  // className= "."+clickObj;
  // $(className).style.color = "black";
  music(clickObj);
  // buttonAnimation(clickObj);

});


$(document).on("keydown",function(event){
  $("h1").css("font-family", "cursive`");
  music(event.key);
});

