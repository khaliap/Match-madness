const box1 = document.getElementById("1")

const box2 = document.getElementById("2")

// box1.style.backgroundColor = "black"
// box1.style.width = "100px"
// box.style.height = "100px"


let boxTest = 1; 
let pattern = [1,3,4]
function sleep(ms) {
  return new Promise(resolve => {
    setTimeout(() => {resolve('')},ms)
  })
  
}

async function startGame(){
  
for(let i =0; i <pattern.length; i ++){

  blinkBox(pattern[i])

  await sleep(2000)
}

}

function blinkBox(boxId){
    $("#" + boxId.toString()).fadeOut(1000).fadeIn(1000);
    
  
}
// $("#" + el.toString()).fadeOut(1000).fadeIn(1000);  
  



box1.addEventListener("click", ()=>{
  startGame();  
})

