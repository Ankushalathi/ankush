var numbers = [ 1,-5,3,5,8,-8,-12]

var small = numbers[0]

for (var i=0 ; i<numbers.length ; i++){
    if(numbers[i]<small){
        small = numbers[i]
    }
}
console.log("Smallest Number",small)

