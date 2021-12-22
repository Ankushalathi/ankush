var arr = ["6546466464","53468464313"]

var mbString =arr.reduce(function(acc, el){
    return acc+el+","
},"")

console.log(mbString)


var str = "this is a pen , this is my pen , this is a pensonic , this is a good pen " 

var count = str.split("pen").length-1

console.log(count)

var string = "this is my penspeedly"
var len = string.split(" ").filter(function(el){
    return el.includes ("pen")
}).length

console.log(len)


function generateOTP(digit){
var math = Math.random()+""
var otp = math.slice(2, 2+digit)
return otp
}

console.log(generateOTP(4))

function generateOTP(numofdigit){
var str = "0123456789abcdefghijklmnopqrstuvwxyxzABCDEFGHJKLMNIOPQRSTUVWXYZ"

var otp = ""
for(var i=0 ; i<=numofdigit ; i++){
    var rand = Math.round((Math.random()*1000000))%str.length
    otp += str[rand]
}
return otp
}

console.log(generateOTP(6))
 


var str = "0123456789abcdefghijklmnopqrstuvwxyxzABCDEFGHJKLMNIOPQRSTUVWXYZ"

console.log(str.length)


var arr1 = [1,2,3,4,5]
var arr2 = [ 1,2,8,9,5]
var intersection = []

arr1.forEach(function(el){
    if (arr2.includes(el)&& !intersection.includes(el)){
        intersection.push(el)
    }
})

console.log(intersection)

var union = []

arr2.forEach(function(el){
    if(!union.includes(el)){
        union.push(el)
    }
})
console.log(union)


var arr= [1,2,3,4,5,6,7,8,]

var chunk = 2
var chunkArr =[]

for(var i=0 ; i<arr.length ; i+=chunk){
    chunkArr.push(arr.slice(i, i+chunk))

}

console.log( chunkArr)

 
//var array= [1,2,3,4,5,6,7,8,]

//console.log(_.flatten)
// console.log(_.chunk(array, [size=2]))

// console.log(_.chunk(array, [size=1]))

//array problems

var arr1 = [ 1,2,3,4,6,]
var arr2 = [ 1,2,3,7,8]

var comon = []

arr1.forEach(el=>{
    
})

// rotate problems

var arr = [ 1,2,3,4,5,6]

var num = 2
var rotateNum = []

for (var i = num ; i<=num.length ; i++){
    rotateNum.push(num[i])
}
for (var j = num ; i<=num.length ; j++){
    rotateNum.push(num [j])
}

console.log("new",rotateNum)

//new
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

//matrix 

var arr = [ [1,2,3], [4,5,6],[7,8,9]]

var sumArr = Array(arr[0].length).fill(0)
 
 arr.forEach(function(el){
    el.forEach(function(e,i){
     sumArr[i] = sumArr[i]+ e
    })
})

console.log(sumArr)


var arr = [["suyash " , "mern" , "35000"],["ayush" , "degien " , 37000] , ["taha" , "mern" , " 45000"] ]


///19-11

var  arr = [1,2,3,4]

var search = 2

for(var i= 0 ; i < arr .length ; i++){
    if (arr [i ] == search){
       console.log("true")
    }else {
      console.log("false")
    }
}
