var texts = ["graphic designer", "icon designer", "web designer", "print designer"];
var count = 0;

      function changeText() {
  $("#vartext").fadeOut(2000, function() {
              count < 2 ? count++ : count = 0;
              $("#vartext").html(texts[count]);
              $("#vartext").fadeIn(2000)
          });
}
setInterval(changeText, 500);