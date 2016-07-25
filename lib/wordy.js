'use strict';

function WordProblem(question){
  var array = question.split(" ");
  var response = "error";
  var isDouble = false;
  if (array.length > 4 && array[0] == "What" && array[1] == "is"){
    var num1 = parseInt(array[2]);
    var op1 = array[3];
    var num2 = parseInt(array[4].replace(/\?/gi, ''));
    if (op1 === "multiplied" || op1 === "divided" && array[4] === "by"){
      var num2 = parseInt(array[5].replace(/\?/gi, ''));
      isDouble = true;
      if (op1 === "multiplied") {
        response = num1 * num2;
      }
      else if (op1 === "divided") {
        response = num1 / num2;
      }
    }
    else {
      var num2 = parseInt(array[4].replace(/\?/gi, ''));
      if (op1 == "minus"){
        response = num1 - num2;
      }
      else if (op1 == "plus"){
        response = num1 + num2;
      } 
    }
    if (array.length > 6){
      if (isDouble == false) {
        var op2 = array[5];
        if (op2 === "multiplied" || op2 === "divided" && array[6] === "by"){
          var num3 = parseInt(array[7].replace(/\?/gi, ''));
          if (op2 === "multiplied") {
            response = response * num3;
          }
          else if (op2 === "divided") {
            response = response / num3;
          }
        }
        else {
          var num3 = parseInt(array[6].replace(/\?/gi, ''));
          if (op2 == "minus"){
            response = response - num3;
          }
          else if (op2 == "plus"){
            response = response + num3;
          } 
        }
      }
      else {
        var op2 = array[6];
        if (op2 === "multiplied" || op2 === "divided" && array[7] === "by"){
          var num3 = parseInt(array[8].replace(/\?/gi, ''));
          if (op2 === "multiplied") {
            response = response * num3;
          }
          else if (op2 === "divided") {
            response = response / num3;
          }
        }
        else {
          var num3 = parseInt(array[7].replace(/\?/gi, ''));
          if (op2 == "minus"){
            response = response - num3;
          }
          else if (op2 == "plus"){
            response = response + num3;
          } 
        }
      }
    }
  }
  this.answer = function(){
    if (isNaN(response) == true){
      throw new ArgumentError();
    }
    else {
      return response;
    }
  }
}

function ArgumentError(){
  this.name = "ArgumentError";
  this.message = "That's a no-go.";
}

ArgumentError.prototype = Object.create(Error.prototype);
ArgumentError.prototype.constructor = ArgumentError; 

