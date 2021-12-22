//added methods
var students = ["Pragya", "Priyanka", "Vaibhav"]
console.log(students)

students.push("Krishna")

console.log(students)
students.unshift("Arjun")
console.log(students)


//deleting methods
students.pop()
console.log("pop",students)

var deleted = students.shift()
console.log("shift",students)
console.log(deleted)


//slice array ek hi element ko add ya delect 
students.splice(1, 0, "mayank", )
console.log("slice methods",students)


//index
var arr = [1, 5, 7, -2, 7,  8, 7]

var ind = arr.indexOf(7)
console.log("indexof",ind)


var ind = arr.lastIndexOf(7)
console.log("lastindex",ind)



var arr = [{name:"a"}, {name:"b"}, {name:"c"}]

var ind = arr.findIndex(function(e){
    return e.name == "b"
})

var founded = arr.find(function(el){
    return el.name == "c"
})

console.log(founded)

var searchSku = "N22670521A"
var count = 0

var founded = products.find(function(el, ind){
   return el.sku == searchSku
})

console.log(founded)

console.log("count is : ", count)

var ages = [10, 25, 20, 90, 9, 7]
var ages = [ 25, 20, 90, ]

var isEveryOneVoter = ages.every(function(age){
    return age>=18
})

console.log(isEveryOneVoter)

var ages = [10, 25, 20, 90, 9, 7]
ages.reverse()
console.log(ages)


var sorted = ages.sort()
console.log(sorted)



var sorted = ages.sort(function(a,b){
    console.log(a,b)
    return b-a
})

console.log(sorted)

var numsStr = ages.join(",")
console.log(numsStr)

var ages2 = [32, 20, 50]
var concated = ages.concat(ages2)

console.log(ages)

var sliced = ages.slice(2, 4)
console.log(sliced)


console.log(ages.includes(7,50))


var arr = [1, 3, 6, 8]
var sum = arr.reduce(function(acc, el){
    console.log(acc, el)
    return acc+el
}, 100)

console.log(sum)


var arr = [10, 10, 20, 10, 20, 30, 10, 0, 8, 9, 8, 9]
var uniqArr = []

arr.forEach(function(el){
    if(!uniqArr.includes(el)){
        uniqArr.push(el)
    }
})

console.log(uniqArr)


var sorted = uniqArr.sort(function(a, b){
    return b-a
})

var secondMax = sorted[1]
console.log(secondMax)


var mbls = ["65497654", "9764313", "98451", "8745412"]

var mblStr = mbls.reduce(function(acc, ele, i){
    if(i == mbls.length-1){
        return acc+ele
      }else{
        return acc+ele+","
      }
})


console.log(mblStr)


var str = mbls.join(",")