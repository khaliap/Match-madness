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
let pattern = randomOutput

let currentIndex = 0;

box1.addEventListener("click",()=>{
    resultArr.push(getID(box1))
    checkIndex()
    currentIndex ++
      LastMove()
})

box2.addEventListener("click",()=>{
  resultArr.push(getID(box2))
  checkIndex()
  currentIndex ++
    LastMove()
})


box3.addEventListener("click",()=>{
  resultArr.push(getID(box3))
  checkIndex()
  currentIndex ++
  LastMove()
})


box4.addEventListener("click",()=>{
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
    return true; 
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
  blinkBox(pattern[i])
  await sleep(2000)
}
}

function blinkBox(boxId){
    $("#" + boxId.toString()).fadeOut(1000).fadeIn(1000);
    
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


console.log("hello")