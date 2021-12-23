console.log("Addy was here")

const buttonClear = document.querySelector('.buttonClear')
console.log(buttonClear)

buttonClear.addEventListener("click",eventHandler)

function eventHandler(){
    alert('You have cleared the game!')
}

const buttonStart =document.querySelector('.buttonStart')
console.log(buttonStart)

buttonStart.addEventListener("click",startGame)
    function startGame(){
    alert('You are starting the game now')
}