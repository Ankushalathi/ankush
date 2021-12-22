var score1= document.getElementById("score1")
var score2= document.getElementById("score2")

var turn = 1

document.getElementById("btn").addEventListener("click",function(){
    var a = Math.ceil((Math.random()*10)%6 )
    console.log(a)
    switch(a){
        case 1 : document.getElementById("dice").src =  "1.png"
        break
        case 2 : document.getElementById("dice").src =  "2.png"
        break
        case 3 : document.getElementById("dice").src =  "3.png"
        break
        case 4 : document.getElementById("dice").src =  "4.png"
        break
        case 5 : document.getElementById("dice").src =  "5.png"
        break
        case 6 : document.getElementById("dice").src =  "6.png"
        break
    }
   
    turn ++
    if(turn % 2== 1 ){
       document.getElementById("score1").innerText= Number(document.getElementById("score2").innerText = a)
    }
    
})    