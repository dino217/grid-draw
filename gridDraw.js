var $square = $('<div class="divBlank"></div>');

var setSquareWidth = function(gridNum){
  return 900 / gridNum;
}

$("document").ready(function(){
  var gridCount = 16;
  var squareWidth = setSquareWidth(gridCount);
  for (x = 1; x <= gridCount; x++){
    for (i = 1; i <= gridCount; i++){
      $("#container").append("<div class ='divBlank'></div>");
    }
    $("#container").append("<br>")
  }
  $(".divBlank").outerWidth(squareWidth);
  $(".divBlank").outerHeight(squareWidth);


});
