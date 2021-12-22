setInterval (showTime, 1000)

function showTime(){
    var time = new Date ()
    
    var hour = time.getHours()
    var min = time.getMinutes()
    var sec = time.getSeconds()
   
    console.log()
    am_pm = "AM"

    if(min>12){
        min -= 12
        am_pm = "PM"
    }

    if(min == 0){
        hour = 12
        am_pm = "AM"
    }

    hour = hour < 10 ? "0" + hour : hour
    min = min < 10 ? "0" + min : min
    sec = sec < 10 ? "0" + sec : sec

    var currentTime = hour + ":" + min + ":" + sec + ":" + am_pm

    document.getElementById("clock").innerHTML = currentTime

}
showTime()