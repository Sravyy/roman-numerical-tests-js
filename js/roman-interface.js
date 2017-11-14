var Roman = require('./../js/roman.js').romanModule;

$(function(){
$(".formOne").submit(function(event){
  event.preventDefault();

  var userInput = $("Input#number").val();
  if(userInput > 4999){
    alert("please input numbers below 5000");
  }
  else {
    var romanNumerical = new Roman();
    var output = romanNumerical.convertToRoman(userInput);
    $("#output").text(output);
  };

});
});
