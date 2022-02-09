const box = document.getElementById("Test")

box.style.backgroundColor = "black"
box.style.width = "100px"
box.style.height = "100px"




/// this box should be able to make the box blink for one sec and then stop after a second 
function blinkBox(){
 $("#Test").fadeOut(1000).fadeIn(1000);   
}

/// this is an example using j.query 
// $("#Test").fadeOut(1000).fadeIn(1000);


box.addEventListener("click",blinkBox)