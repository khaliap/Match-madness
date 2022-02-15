const box1 = document.getElementById("1")
const box2 = document.getElementById("2")
const box3 = document.getElementById("3")
const box4 = document.getElementById("4")
// box1.style.backgroundColor = "lightcoral";
// box2.style.backgroundColor = "rgb(26,83,92)";
// box3.style.backgroundColor = "rgb(26,148,111)";
// box4.style.backgroundColor = "#0B032D";
const message = document.getElementById('resultDis')
const startBtn = document.querySelector('button')
//reslut input
let resultArr = [];
let randomOutput = [];
let passed = true;
let num = 2
//
console.log("lastmoveFunc")
let pattern = randomOutput
let currentIndex = 0;
let audio = document.getElementsByTagName("audio")[0];
function playAudio() {
  audio.play();
}
function makeBoxBorderRed(box){
  switch(box){
    case box1 : box.style.backgroundColor = "lightcoral";
      break;
    case box2 : box.style.backgroundColor = "rgb(26,83,92)";
      break;
    case box3 : box.style.backgroundColor = "rgb(26,148,111)";
      break;
    case box4 : box.style.backgroundColor = "rgb(0,58,36)";
      break;
  }
}
// box1.style.backgroundColor
function turnBoxBack(box){
  box.style.backgroundColor = "white"
}
$("#1").hover(()=>{ makeBoxBorderRed(box1)},()=> {turnBoxBack(box1)});
$("#2").hover(()=>{ makeBoxBorderRed(box2)},()=> {turnBoxBack(box2)});
$("#3").hover(()=>{ makeBoxBorderRed(box3)},()=> {turnBoxBack(box3)});
$("#4").hover(()=>{ makeBoxBorderRed(box4)},()=> {turnBoxBack(box4)});
function changesColorBlinck(box){
  box.style.background = "lightcoral";
  blinkBoxclick(getID(box))
  box.style.background = "white"
}
box1.addEventListener("click",()=>{
    blinkBoxclick(getID(box1))
    // playAudio()
    // changesColorBlinck(box1)
    resultArr.push(getID(box1))
    checkIndex()
    currentIndex ++
    LastMove()
})
box2.addEventListener("click",()=>{
  blinkBoxclick(getID(box2))
  // playAudio()
  // changesColorBlinck(box2)
  resultArr.push(getID(box2))
  checkIndex()
  currentIndex ++
  LastMove()
})
box3.addEventListener("click",()=>{
  blinkBoxclick(getID(box3))
  // playAudio()
  // changesColorBlinck(box3)
  resultArr.push(getID(box3))
  checkIndex()
  currentIndex ++
  LastMove()
})
box4.addEventListener("click",()=>{
  blinkBoxclick(getID(box4))
  // playAudio()
  // changesColorBlinck(box4)
  resultArr.push(getID(box4))
  checkIndex()
  currentIndex ++
  LastMove()
})
console.log(resultArr)
let booFlag = true
function checkIndex(){
    if(resultArr[currentIndex] !== pattern[currentIndex]){
        message.innerHTML = "level reseting"
        setTimeout(function () {
          message.innerHTML = " "
      }, 3000);
        booFlag = false
    }
  }
  // console.log(resultArr)
function getID(currBox){
    return Number(currBox.id)
}
function sleep(ms) {
  return new Promise(resolve => {
    setTimeout(() => {resolve('')},ms)
  })
}
async function startGame(){
for(let i = 0; i < pattern.length; i++){
  playAudio()
  blinkBox(pattern[i])
  await sleep(1000)
}
}
function blinkBox(boxId){
    $("#" + boxId.toString()).fadeOut(200).fadeIn(200);  
}
function blinkBoxclick(boxId){
  $("#" + boxId.toString()).fadeOut(20).fadeIn(20);  
}
/// adding to last move function.
// gonna add a flag to confirm if the palyer is ever wrong
let currLevel = 1;
const levelText = document.querySelector('span')
function LastMove(){
    if(booFlag && currentIndex === pattern.length){
      message.innerHTML = "Level complete"
      setTimeout(function () {
        message.innerHTML = " "
    }, 3000);
      num++;
      currentIndex = 0
      clearArrayAndNewPattern();
      levelTextFunc();
      levelDelay()
    }
    else if(!booFlag){
      console.log("reset game")
      booFlag = true;
      num = 2
      currentIndex = 0
      currLevel = 1;
      levelText.innerText = currLevel;
      clearArrayAndNewPattern()
    }
}  
// levelText.innerText = "hwehewfhbewk"
function levelTextFunc() {
  currLevel++;
  levelText.innerText = currLevel;
}
function clearArrayAndNewPattern(){
  resultArr = [];
  randomOutput = [];
  getRandomInt()
  pattern = randomOutput;
}
startBtn.addEventListener("click", ()=>{
  getRandomInt();
  startGame();    
})
let randomOptions = [1,2,3,4]
function getRandomInt() {  
  while(randomOutput.length < num ){
    let randomPattern = randomOptions[Math.floor(Math.random()* randomOptions.length)];
    randomOutput.push(randomPattern)
  }
}
console.log("making sure code works")

function levelDelay(){

  setTimeout(startGame, 3000)
  // message.innerHTML = " "
}


console.log('making chnages to see if it pushes')