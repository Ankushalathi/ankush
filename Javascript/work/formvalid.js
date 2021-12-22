var btn = document.getElementById("btn")
var inp = document.getElementById("inp")
var err = document.getElementById("para")

btn.addEventListener("click", function(e){
   if(inp.value.length == "" ){
    err.innerText = "This field is required"
   }else{
    err.innerText = ""
   }
})


var password = document.getElementById("password")
var pass = document.getElementById("pass")

btn.addEventListener("click", function(e){
    if(password.value.length == ""){
     pass.innerText = "Password Is Required"
    }else {
        pass.innerText = ""
    }
} )
//Email
var email = document.getElementById("email")
var em = document.getElementById("em")

btn.addEventListener("click", function(e){
    if(email.value.length == ""){
        em.innerText = "Email Is Required xyz@gmail.com"
    }else {
        em.innerText= ""
    }
})

//Number
var number = document.getElementById("number")
var num = document.getElementById("num")

btn.addEventListener("click", function(e){
    if(number.value.length == ""){
        num.innerText = "Number Is Required 0-9"
    }else {
        num.innerText= ""
    }
})

//Date of Birth
var date = document.getElementById("date")
var dob = document.getElementById("dob")

btn.addEventListener("click", function(e){
    if(date.value.length == ""){
        dob.innerText = "Date Of Birth Is Required YYYY-MM-DD"
    }else {
        dob.innerText= ""
    }
})
    
//Address
var address = document.getElementById("address")
var add = document.getElementById("add")

btn.addEventListener("click", function(e){
    if(address.value.length == ""){
        add.innerText = "Address Is Required"
    }else {
        add.innerText= ""
    }
})



document.getElementById("frm").addEventListener("click", function(e){
    e.preventDefault()
    alert("form is go")
})