(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//constructor
function RomanNum(){
}

//method
RomanNum.prototype.convertToRoman = function(userInput) {
var romanToNum = {
  M : 1000,
  CM : 900,
  D : 500,
  CD : 400,
  C : 100,
  XC : 90,
  L : 50,
  XL : 40,
  X : 10,
  IX : 9,
  V : 5,
  IV : 4,
  I : 1
};

var roman = "";
for (var key in romanToNum){
  // console.log("key ", key);
  // console.log("value ", romanToNum[key]);
  while (userInput >= romanToNum[key]){
    roman += key;
    userInput -= romanToNum[key];
    // console.log("userInput is decreased to ", userInput)

  }
}
return roman;
};


//exports
exports.romanModule = RomanNum;

},{}],2:[function(require,module,exports){
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

},{"./../js/roman.js":1}]},{},[2]);
