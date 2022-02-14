const box1 = document.getElementById("1")

const box2 = document.getElementById("2")

// box1.style.backgroundColor = "black"
// box1.style.width = "100px"
// box.style.height = "100px"

// box2 = document.getElementById()

const box3 = document.getElementById("3")

const box4 = document.getElementById("4")

const message = document.getElementById('resultDis')
const startBtn = document.querySelector('button')
//reslut input 
let resultArr = [];

//
let pattern = [1,4,3]

let currentIndex = 0;

// function ClickOnBox{
//     resultArr.push()
// }




box1.addEventListener("click",()=>{
    resultArr.push(getID(box1))
    checkIndex()
    currentIndex ++
})

box2.addEventListener("click",()=>{
  resultArr.push(getID(box2))
  checkIndex()
  currentIndex ++
})


box3.addEventListener("click",()=>{
  resultArr.push(getID(box3))
  checkIndex()
  currentIndex ++
})


box4.addEventListener("click",()=>{
  resultArr.push(getID(box4))
  checkIndex()
  currentIndex ++
})


console.log(resultArr)

function checkIndex(){
    if(resultArr[currentIndex] !== pattern[currentIndex]){
        message.innerHTML = "wrong"
    }
  }

  console.log(resultArr)
function getID(currBox){
    return Number(currBox.id)
}



console.log(getID(box3))





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
  



startBtn.addEventListener("click", ()=>{
  startGame();  
})

