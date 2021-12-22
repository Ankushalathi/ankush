

$("#btn").click(function () {
  var content =  "<div> <input type='text'><button class='dlt'>-</button></div>"
   
    $('#input').append(content)
})

$("body").on("click", ".dlt",function(){
 
$(this).parent().remove()
})
