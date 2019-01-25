
var beepBoop = function(number){
  var stringNumber = "";
  stringNumber = number.toString();

  if (number % 3 === 0){
    return("'I'm sorry...'");
  } else if (stringNumber.includes("1")) {
    return("'Boop!''");
  } else if (stringNumber.includes("0")) {
    return("'Beep!''");
  } else {
    return(stringNumber);
  }

};

$(document).ready(function(){
  $("#number").focus();

  $("form").submit(function(event){
    event.preventDefault();

    var inputNumber = parseInt($("#number").val());
    var outputText = [];

    for(var index = 0; index <= inputNumber; index++){
      outputText.push(beepBoop(index));
    }
    $(".input").hide();
    $(".result").show();
    $("#result").text(outputText.join(", "));
  });

  $("#again").click(function(){
    $(".input").show();
    $(".result").hide();
    $("#number").text("");
    $("#number").focus();
  });
});
