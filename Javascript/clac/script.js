$(function () {
    var isAns = false;
  
    $("body").keyup(function (e) {
      console.log(e.which);
      if (e.which == 27) {
        $(".display").text(0);
      }
  
      if (e.which == 8) {
        var existingText = $(".display").text();
  
        if (existingText != "0") {
          var lastChar = existingText[existingText.length - 1];
          var newStr = existingText.substr(0, existingText.length - 1);
  
          if (existingText.length == 1) {
            $(".display").text(0);
          } else {
            $(".display").text(newStr);
          }
        }
      }
    });
  
    $(".btn").click(function () {
      var clickedBtn = $(this).attr('btn-value');
      var oldText = $(".display").text();
  
      if (clickedBtn == "=") {
        try {
          var newText = eval(oldText);
        } catch (e) {
          var newText = 0
          console.log(e)
        }
        isAns = true;
      } else {
        if (oldText == "0" || isAns) {
          var newText = clickedBtn;
          isAns = false;
        } else {
          var newText = oldText + clickedBtn;
        }
      }
      $(".display").text(newText);
  
      console.log(newText);
    });
  });
  