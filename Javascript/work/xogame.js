var arr = ['X', 'X', 'O', 'X', 'O']


function validateEntries(arr){
    var xCount = arr.filter(function(el){
        return el =="X"
    }).length

    var oCount = arr.filter(function(el){
        return el =="O"
    }).length

    // console.log(arr, xCount, oCount)

    var diff = Math.abs(xCount-oCount)

     if(diff == 1 || diff==0){
         return {"X":xCount, "O":oCount, isValid:true}
     }else{
        return {"X":xCount, "O":oCount, isValid:false}
     }
}


var winningPos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

function checkIsWinner(){
    
}

validateEntries(arr)