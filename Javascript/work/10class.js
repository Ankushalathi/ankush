/* function calc (num1 , num2, op){
   if(op == "+"){
       return res = num1+ num2
   } else if(op =="-"){
       return res = num1 - num2
   }
   
}

var res = calc(50,50)

console.log(calc(10,10))  */

//Q.2
/* 
var arr =[1,2,3,5,14]
var sum = 0

for (var i=0 ; i<=4 ; i++){
    sum+=arr[i]
}

console.log(sum) */

// voters 

/* var ages = [18, 45, 12,23,21,11]
console.log(ages.length)
var voters = 0
var nonVoters = 0

for (var i=0 ; i<ages.length ; i++){
   if(ages[i]>=18){
       voters++
   } else{
       nonVoters++
   }
}

console.log("voters",voters, "nonVoters", nonVoters) */

/* var people = [
    {name : "rohit" , age :12},
    {name : "nirmal" , age :65},
    {name : "anand" , age :22},
    {name : "ritik" , age :32},
    {name : "rahul" , age :68},
]

var voters = 0
var nonVoter = 0
var foundInd = -1

for(var i=0 ; i<people.length ; i++){
    console.log(people[i].age)
    if(people[i].age==65){
        console.log(people[i], i)
        foundInd = i
        break
        voters++
    }else {
        nonVoter++
    }
}
console.log(voters ,nonVoter,foundInd)
 */

/* 

var stations = [
    {name :"a" , dist: 0},
    {name: "b", dist : 6 },
    {name: "c", dist : 7 },
    {name: "d", dist : 11 },
    {name: "e", dist : 12 },
    {name: "f", dist : 23 },
]

var src = "a"
var dst = "d"

var srcIndex = -1
var dstIndex = -1

for(var i=0 ; i<stations.length ; i++){
    if(stations[i].name==src){
        srcIndex = i
    }

    if (stations[i].name==dst){
        dstIndex = i
    }

}

console.log(srcIndex,dstIndex)

var srcDst = stations[srcIndex].dist
var dtsDst =stations[dstIndex].dist

var isCont = srcIndex - dstIndex == -1 || srcIndex - dstIndex ==1
var fare = 5

if (!isCont){
    var travelDist=srcDst - dtsDst
    travelDist = travelDist <0 ? -1*travelDist : travelDist
    if(travelDist > 3){
        fare += (travelDist-3)*1.5
    }
}

console.log(fare)
 */


// ibus array
/* var stations =[ "a", "b", "c","d","e"]
var dist = [ 0,2,4,8,10]

var src = "a"
var dst = "c"

for (var i= 0 ; i<=stations.length ; i++){
    if (stations[i])
} */


var numbers = [ 1,-5,3,5,8]

var small = numbers[0]

for (var i=0 ; i<numbers.length ; i++){
    if(numbers[i]<small){
        small = numbers[i]
    }
}
console.log("Smallest Number",small)



