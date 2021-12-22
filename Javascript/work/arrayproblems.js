var x = [1,2,3,4,5]

var y = x.slice()

console.log(x)
console.log(y)

var x = [1,5,5,5,5]
var y = x.map(i => i)

console.log(y)

var y = x.filter( i => i )
console.log("filter",y)

var color = ['red', 'green' , 'yellow', 'blue']

console.log(color.join('+'))
console.log(color.toString())

var num = [ 1,25 ,8 ,9]
var str = num.toString()
var result = str[0]


// console.log(result)

//var arr = [ [1,8,5], [4,5,6],[7,8,7]]
var arr = [ [1,2,0], [4,5,6],[7,8,9]]
var sumArr = Array(arr[0].length).fill(0)

arr.forEach(function(el){
    el.forEach(function(el, i){
        sumArr[i]= sumArr [i]+el
    })
})

console.log(sumArr)


var num = [1,2,3,4,5,6,1,2,3]

var obj = {}

num.forEach(function(el){
    if(obj[el] == undefined){
      obj[el]= 1      
    }else{
        obj[el] = obj[el]+1
    }
})

console.log(obj)



var items = [
    {name:"c", price:50, cat:"Health"}, 
    {name:"d", price:109, cat:"Food"},
    {name:"a", price:10, cat:"Perfume"}, 
    {name:"b", price:30, cat:"Perfume"}, 
    {name:"c", price:5, cat:"Health"}, 
    {name:"d", price:19, cat:"Health"},
]

 var category = []
items.forEach(function(el){
    if(!isCatExist(category ,el.cat)){
        category.push({catName:el.cat})
    }
})


function isCatExist(arr , catName){
    var isExist = false
    arr.forEach(function(el){
     if (el.catName == catName){
         isExist = true
     }
    })
    return isExist
}
console.log(category)

var items = [
    {name:"c", price:50, cat:"Health"}, 
    {name:"d", price:109, cat:"Food"},
    {name:"a", price:10, cat:"Perfume"}, 
    {name:"b", price:30, cat:"Perfume"}, 
    {name:"c", price:5, cat:"Health"}, 
    {name:"d", price:19, cat:"Health"},
    {name:"d", price:19, cat:"car"},
    {name:"d", price:19, cat:"bike"},
]
var category =[]

items.forEach(function(el){
    if(!isCatExist(category,el.cat,)){
        category.push({catName:el.cat})
    }
})

function isCatExist(arr, catName){
    var isExist =false
    arr.forEach(function(el){
        if (el.catName == catName){
            isExist = true
        }
    })
    
    return isExist  
}

console.log("new",category)


var arr = [1,2,3,4,5,0]
var target = 5
var chunks =[]


arr.forEach(function(el,i){
    chunks.push(arr.slice(i, i+2))
})

console.log(chunks)
// for(var i=0 ; i<arr.length ; i+=chunkArr){
//     chunkArr.push(arr.slice(i, i+chunkArr))

// }




var arr = ['X', 'X', 'O', 'X', 'O']


function validateEntries(arr){
    var xCount = arr.filter(function(el){
        return el =="X"
    }).length

    var oCount = arr.filter(function(el){
        return el =="O"
    }).length

    console.log(arr, xCount, oCount)

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

validateEntries

//22

function generateOTP(numOfDigit) {
    var rand = Math.random() + ""
    var otp = rand.slice(2, 2 + numOfDigit)
    return otp

}
console.log(generateOTP(4))

var str = "my name is suyash "
var delimeter = "s"
var num = 98
var strArr = str.split(delimeter)
console.log(typeof (num))
console.log()

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var chunk = 4

var chunkSize = Math.ceil(arr.length /chunk)

var chunkedArr = []

var chunkIndex = 0

for (var i = 0; i < chunkSize; i++) {
    var temp = []
    // temp.push(arr[chunkIndex++])
    // temp.push(arr[chunkIndex++])
    chunkedArr.push(arr.slice(chunkIndex, chunkIndex + 2))
    chunkIndex += 2

}

console.log(chunkedArr)


chunkedArr = []

for (var i = 0; i < arr.length; i += chunk) {
    chunkedArr.push(arr.slice(i, i + chunk))
}

console.log("NEW : ", chunkedArr)


var arr1= [1,2,3,4,5,6,7,77]
var arr2= [1,2,4,8,3,7,5]

var intersection = []

arr1.forEach(function(el){
    if (arr2.includes(el) && !intersection.includes(el)){
        intersection.push(el)
    }
})
console.log(intersection)

var combined = arr1.concat (arr2)

var union = []
combined.forEach(function (el) {
    if (!union.includes(el)) {
        union.push(el)
    }
})

console.log(union)
