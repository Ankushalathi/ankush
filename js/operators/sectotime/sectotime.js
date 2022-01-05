 var secs = 1634802327

 var secsInOneYear = 365*24*60*60
 var secsInOneMonth = 30*24*60*60
 var secsInOneDay = 24*60*60
 var secsInminutes = 60*60
 var secsInSecond = 60

 var years = parseInt(secs/secsInOneYear)

 secs %= secsInOneYear
 var months = parseInt(secs/secsInOneMonth)

 secs %= secsInOneMonth
 var days = parseInt(secs/secsInOneDay)

 secs %= secsInOneDay
 var mintues = parseInt(secs/secsInminutes)

 secs %= secsInMinutes
 var seconds = parseInt (secs/secsInSecond)

 

 console.log("years"+ years, "months"+ months, "days"+ days, "minutes"+ mintues, "seconds"+ seconds)

 
  var secs = 1634821987

  var secsInOneYear = 365*24*60*60
  var secsInOneMonth = 30*24*60*60
  var secsInOneDay = 24*60*60
  var secsInMinutes = 60*60
  var secsInSeconds = 60

  var years = parseInt (secs/secsInOneYear)
 
  secs %= secsInOneYear
  var months = parseInt (secs/secsInOneMonth)
  
   secs %= secsInOneMonth
   var days = parseInt (secs/secsInOneDay)

   secs %= secsInMinutes
   var minutes = parseInt (secs/secsInMinutes)

   secs %= secsInSeconds 
   var seconds = parseInt (secs/secsInSeconds)

  console.log("years"+ years, "months"+ months, "days"+ days, "minutes"+ minutes, "seconds"+ seconds)



  var age = 17

  age >=18 ? console.log ("can vote") : console.log("can !vote")

  console.log(age)


  /* var cp= 100
  var sp = 120

  var isFrnd = true
  var ShouldISell = (isfrnd)? (true) : sp<cp

  console.log (ShouldISell) */

  
var cp = 10
var sp = 15
var isFrnd = false

var shouldISell = isFrnd ? true : sp > cp

isFrnd ? console.log("I should sell") : (cp < sp ? console.log("i shold sell") : console.log("I cant sell"))

console.log(shouldISell)
