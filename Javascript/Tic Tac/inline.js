var activePlayer = 'X'
var actions = Array(9).fill(null)

function run(e, btnIndex){
    var btnText =  e.target.innerText

    if(btnText != "X" && btnText != "O"){
        e.target.innerText = activePlayer
        actions[btnIndex] = activePlayer
        
       if(checkWinner(activePlayer)){
           alert(`${activePlayer} is winner`)
           resetGame()
       }else if(isDraw()){
        alert(`game over`)
        resetGame()
       }else{
        activePlayer = activePlayer == "X" ? "O" : "X"
       }

    }
}

function isDraw(){
    return !actions.includes(null)
}

function checkWinner(player){
    var winningPos = [
        [0, 4, 8],
        [2, 4, 6],
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8]
       
    ]
    var isWinner = false

    winningPos.forEach(function(pos){
        if(actions[pos[0]] == player && actions[pos[1]] == player && actions[pos[2]] ==player){
            isWinner = true
        }
    })
        return isWinner
}

function resetGame(){
    var btns = document.getElementsByTagName("button")
    console.log(btns)


    //Array.from(iterable) => it converts iterable  types to array
    var btnsArr = Array.from(btns)
    btnsArr.forEach(function(btn){
        btn.innerText = "-"
    })
    actions = Array(9).fill(null)
}
