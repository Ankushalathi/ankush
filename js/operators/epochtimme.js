/* 
var milliSeconds = 67435255674
var seconds = parseInt( milliSeconds /1000)
var extraMilliSeconds = milliSeconds % 1000

console.log("seconds",seconds+" milliseconds",extraMilliSeconds)

var minutes = parseInt(seconds /60)
var extraSeconds = seconds % 60
console.log("minutes ",minutes+" extraseconds =",extraSeconds)


var hours = parseInt (minutes /60)
var extraMinutes = minutes % 60
console.log("hours ", minutes+ "extraminutes =", extraMinutes)


var days = parseInt ( hours /24 )
var extraHours =  hours % 24
console.log ( "days", hours+ "extahour=" , extraHours)


var months = parseInt (days/30)
var extraDays = days %30
console.log("months" ,months+  "extraDays=", extraDays)



var years = parseInt (months/12)
var extraMonths = months %12
console.log("years", years+  "extramonths=", extraMonths)


 */


/* 
var cp = 10000
var sp = 11000
var isFriend = false

var diff = ((sp - cp)/10000)*100


var amount = diff < 0 ? -1*diff : diff

if(isFriend && diff >=10){
    console.log("sell" , "%")
    if(diff < 0){
        console.log("loss of ", amount)
    }else{
        console.log("profit of : ", amount)
    }
}else{
    if ( !isFriend &&  diff >=25 , sp>cp ){
        console.log("sell")
        console.log("profit of : ", amount)
    }else{
        console.log('cant sell')
    }
}
 
 
var maths = 95
var phys = 85
var bio = 88
var hindi = 95 
var english = 90

var total =(maths+phys+bio+hindi+english)

var per = (total/5)

if(per >= 90 && per <=100) {
    console.log("You are In Grade A+")
}else if(per >= 80 && per <90) {
    console.log("you are In Grade A ")
}else if( per >= 65 && per <80) {
    console.log("You Are In Grade B")
}else if( per >= 50 && per <65) {
    console.log("You Are In Grade C")
}else if( per >= 33 && per <50) {
    console.log("You Are In Grade D")
}else if( per <= 33 && per >=0) {
    console.log("You Are Fail")
}
 */


/* var num = 5

if(num%2 ==0){
    console.log("even")
} else{
    console.log("odd")
} */

/* var s1 = 6
var s2 = 6
var s3 = 6

if (s1 > 0 && s2 > 0 && s3 > 0) {
    if (s1 + s2 > s3 && s2 + s3 > s1 && s3 + s1 > s2) {
        console.log("tringle")
        if (s1 == s2 || s2 == s3 || s3 == s1) {
            console.log("isoceles")
        } else if (s1 != s2 && s2 != s3 && s3 != s1) {
            console.log("scalar")
        } else if (s1 == s2 && s2 == s3 ) {
            console.log("equlater")
        }
    } else {
        console.log("invalid")
    }
} else {
    console.log("invalid")
} */

//swap without using third varible
var x = 10
var y = 20

var swapx = (x = x + y, y = x - y, x = x - y)
var swapy = (x = x + y, y = x - y, x = x - y)
console.log("x", swapx, "y", swapy)

//maximum between two numbers
var num1 = 10
var num2 = 10

if (num1 > num2) {
    console.log("Num1", num1)
} else if (num2 > num1) {
    console.log("Num2", num2)
} if (num1 == num2) {
    console.log("Both Are Equal")
}


//maximum between two numbers
var num1 = 15
var num2 = 15
var num3 = 15

if ((num1 > num2) && (num1 > num3)) {
    console.log("num1", num1)
} if (num2 > num1 && num2 > num3) {
    console.log("num2", num2)
} if (num3 > num1 && num3 > num2) {
    console.log("num3", num3)
}
if (num1 == num2) {
    console.log("both are equal")
}




// vowel & consonant

var ch = 'A'

if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' ||ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U') {
    console.log("It Is Vowel")
} else {
    console.log("it is consonant")
}


//leap year

var year = 2013

if(year % 400== 0) {
    console.log(" is a leap year " , year)
} else if( year %100 ==0) {
    console.log("is a not leap year" , year)
}else if ( year % 4==0){
    console.log("is a leap year" , year)
} else{
    console.log("is a not leap year")
}







