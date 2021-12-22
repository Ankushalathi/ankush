document.getElementById("frm").addEventListener("submit", function(e){
    e.preventDefault()
    var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    var pwdReg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/
    checkValidation("email", emailReg, "emailErr", "Invalid Email ")
    checkValidation("pwd", pwdReg, "pwdErr", "Invalid Password ")
})


function checkValidation(eleId, reg, errId, errMsg){
    var eleVal = document.getElementById(eleId).value
    if(reg.test(eleVal)){
        //valid
        document.getElementById(errId).innerText = ""

    }else{
        //invalid
        document.getElementById(errId).innerText = errMsg



    }
}