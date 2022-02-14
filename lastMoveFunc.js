const box1 = document.getElementById("1")

const box2 = document.getElementById("2")

const box3 = document.getElementById("3")

const box4 = document.getElementById("4")

const message = document.getElementById('resultDis')
const startBtn = document.querySelector('button')
//reslut input 
let resultArr = [];

let randomOutput =[]

let num = 3
//


console.log("lastmoveFunc")
let pattern = randomOutput

let currentIndex = 0;

let audio = document.getElementsByTagName("audio")[0];

function playAudio() {
  audio.play();
}


function makeBoxBorderRed(box){
    box.style.border = "thick solid red"
}

function turnBoxBack(box){
  box.style.border = "black"
}

$("#1").hover(()=>{ makeBoxBorderRed(box1)},()=> {turnBoxBack(box1)});
$("#2").hover(()=>{ makeBoxBorderRed(box2)},()=> {turnBoxBack(box2)});
$("#3").hover(()=>{ makeBoxBorderRed(box3)},()=> {turnBoxBack(box3)});
$("#4").hover(()=>{ makeBoxBorderRed(box4)},()=> {turnBoxBack(box4)});


// function changesColorBlinck(box){
// }


box1.addEventListener("click",()=>{
    // blinkBox(getID(box1))
    playAudio()
    resultArr.push(getID(box1))
    checkIndex()
    currentIndex ++
    LastMove()
})

box2.addEventListener("click",()=>{
  playAudio()
  resultArr.push(getID(box2))
  checkIndex()
  currentIndex ++
  LastMove()
})


box3.addEventListener("click",()=>{
  playAudio()
  resultArr.push(getID(box3))
  checkIndex()
  currentIndex ++
  LastMove()
})


box4.addEventListener("click",()=>{
  playAudio()
  resultArr.push(getID(box4))
  checkIndex()
  currentIndex ++
  LastMove()
})


console.log(resultArr)

function checkIndex(){
    if(resultArr[currentIndex] !== pattern[currentIndex]){
        message.innerHTML = "wrong"
    }
     
  }

  // console.log(resultArr)
function getID(currBox){
    return Number(currBox.id)
}



// console.log(getID(box3))





function sleep(ms) {
  return new Promise(resolve => {
    setTimeout(() => {resolve('')},ms)
  })
}


async function startGame(){
for(let i =0; i <pattern.length; i ++){
  playAudio()
  blinkBox(pattern[i])
  await sleep(1000)
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

startBtn.addEventListener("click", ()=>{
  getRandomInt();  
})

let randomOptions = [1,2,3,4]

function getRandomInt() {  
  while(randomOutput.length < num ){
    let randomPattern = randomOptions[Math.floor(Math.random()* randomOptions.length)];
    randomOutput.push(randomPattern)
  }
  startGame();  
}


console.log("making sure code works")