const box1 = document.getElementById("1")



// box1.style.backgroundColor = "black"
// box1.style.width = "100px"
// box.style.height = "100px"


let boxtest = 2; 



console.log("#" + boxtest.toString())
/// this box should be able to make the box blink for one sec and then stop after a second 
function blinkBox(boxId){
 $("#" + boxId.toString()).fadeOut(1000).fadeIn(1000);   
}

/// this is an example using j.query 
// $("#Test").fadeOut(1000).fadeIn(1000);


box1.addEventListener("click", ()=>{
  blinkBox(boxtest)  
})