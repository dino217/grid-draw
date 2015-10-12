var $square = $('<div class="divBlank"></div>');

var setSquareWidth = function(gridNum){
  return Math.floor(900 / gridNum);
}



$("document").ready(function(){

  var ready = function(gridCount){
    $("#container").empty();
    var squareWidth = setSquareWidth(gridCount);
    for (x = 1; x <= gridCount; x++){
      for (i = 1; i <= gridCount; i++){
        $("#container").append("<div class ='divBlank'></div>");
      }
      $("#container").append("<br>")
    }
    $(".divBlank").outerWidth(squareWidth);
    $(".divBlank").outerHeight(squareWidth);
    $(".divBlank").mouseenter(function(){
      $(this).css("background-color", "#000");
    });
  };

  ready(16);

  $("#resetbutton").click(function(){
    var count = prompt("Give desired width of drawing board.")
    if ( isNaN(count) ){
      alert("Please enter a number.");
      return false;
    } else {
      ready(count);
    }
  });

});
