const message = document.getElementById('resultDis')
const startBtn = document.querySelector('button')
//result input 
let resultArr = [];

let randomOutput =[]

let num = 3
//
let pattern = randomOutput

let currentIndex = 0;

const playAudio = () => {
  let audio = document.getElementsByTagName("audio")[0];
  // [0] index, only 1 audio tag.
  audio.play();
}

// make function to perform action on each box on click
function toggleBox(boxId){
  // log action
  console.log('toggling ' + boxId);
  
  // get box element from id
  const box = document.getElementById(boxId);
  
  // make ui changes to box
  box.className =  "game-box " + getBoxColor(boxId);
  // getBoxColor(new class name, gets green, red etc...)
  
  playAudio();
  
  // add to result array for validation later
  resultArr.push(boxId);
  checkIndex();
  currentIndex++;
  LastMove();
}
// colors
function getBoxColor(boxId){
  if(boxId === 1) return "green";
  if(boxId === 2) return "purple";
  if(boxId === 3) return "pink";
  if(boxId === 4) return "yellow";
}

console.log(resultArr)

function checkIndex(){
    if(resultArr[currentIndex] !== pattern[currentIndex]){
        message.innerHTML = "wrong"
    }
    return true; 
  }

  // console.log(resultArr)
function getID(currBox){
    return Number(currBox.id)
}``



console.log(getID(box3))





function sleep(ms) {
  return new Promise(resolve => {
    setTimeout(() => {resolve('')},ms)
  })
}


async function startGame(){
  resetGame();
  for(let i =0; i <pattern.length; i ++){
    blinkBox(pattern[i])
    console.log('blinking box: ' + i);
    await sleep(1000)
  }
}

// reset all boxes back to black when game starts
function resetGame(){
  for (let i = 1; i <= 4; i++) {
    // get box element from id
    const box = document.getElementById(i);
    
    box.className =  "game-box";
  }
}

function blinkBox(boxId){
    $("#" + boxId.toString()).fadeOut(200).fadeIn(200);
    
}
// $("#" + el.toString()).fadeOut(1000).fadeIn(1000);  


function LastMove(){
    if(currentIndex === pattern.length){
         message.innerHTML = "good"
         console.log("kshbckhsbckhsdb")
         num++;
         currentIndex = 0;
         resultArr = [];
         randomOutput = [];
         getRandomInt()
         pattern = randomOutput;
    }
}  

// const board = document.getElementById("game-grid")


/// add last move func to all boxes, 

///
// board.addEventListener("click", LastMove())
  
  
function getRandomInt() {
  console.log('getting random int');
  
  let randomOptions = [1,2,3,4]
  while(randomOutput.length < num ){
    let randomPattern = randomOptions[Math.floor(Math.random()* randomOptions.length)];
    randomOutput.push(randomPattern)
  }
startGame();  
}


// console.log("hello")