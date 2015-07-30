'use strict';

function WordProblem(question){
  this.question = question;
  this.splitQ = this.question.split(" ");
}

WordProblem.prototype.answer = function() {
  var newArray = new Array();
  this.splitQ.forEach(function(word){
    var parseWord = parseInt(word)
    if ((parseWord * 0) == false) {
      newArray.push(parseWord)
    } else if (word == "plus" || word == "minus" || word == "divided" ||  word == "multiplied") {
      newArray.push(word)
    } else
      word
  });
    if (newArray.length < 4) {
        if (newArray[1] == "plus") {
          return (newArray[0] + newArray[2])
        } else if  (newArray[1] == "minus") {
          return (newArray[0] - newArray[2])
        } else if (newArray[1] == "divided") {
          return (newArray[0] / newArray[2])
        } else if  (newArray[1] == "multiplied") {
          return (newArray[0] * newArray[2])
        } else
          throw new ArgumentError(); 
    } else
          if (newArray[1] == "plus" && newArray[3] == "plus") {
          return (newArray[0] + newArray[2] + newArray[4])
        } else if  (newArray[1] == "plus" && newArray[3] == "minus") {
          return (newArray[0] + newArray[2] - newArray[4])
        } else if  (newArray[1] == "plus" && newArray[3] == "multiplied") {
          return ((newArray[0] + newArray[2]) * newArray[4])
        } else if  (newArray[1] == "plus" && newArray[3] == "divided") {
          return (newArray[0] + newArray[2] / newArray[4])
        } else if  (newArray[1] == "minus" && newArray[3] == "plus") {
          return (newArray[0] - newArray[2] + newArray[4])
        } else if  (newArray[1] == "minus" && newArray[3] == "minus") {
          return (newArray[0] - newArray[2] - newArray[4])
        } else if  (newArray[1] == "minus" && newArray[3] == "multiplied") {
          return (newArray[0] - newArray[2] * newArray[4])
        } else if  (newArray[1] == "minus" && newArray[3] == "divided") {
          return (newArray[0] - newArray[2] / newArray[4])
        } else if  (newArray[1] == "multiplied" && newArray[3] == "plus") {
          return (newArray[0] * newArray[2] + newArray[4])
        } else if  (newArray[1] == "multiplied" && newArray[3] == "minus") {
          return (newArray[0] * newArray[2] - newArray[4])
        } else if  (newArray[1] == "multiplied" && newArray[3] == "divided") {
          return (newArray[0] * newArray[2] / newArray[4])
        } else if  (newArray[1] == "multiplied" && newArray[3] == "multiplied") {
          return (newArray[0] * newArray[2] * newArray[4])
        } else if  (newArray[1] == "divided" && newArray[3] == "plus") {
          return (newArray[0] / newArray[2] + newArray[4])
        } else if  (newArray[1] == "divided" && newArray[3] == "minus") {
          return (newArray[0] / newArray[2] - newArray[4])
        } else if  (newArray[1] == "divided" && newArray[3] == "multiplied") {
          return (newArray[0] / newArray[2] * newArray[4])
        } else if  (newArray[1] == "divided" && newArray[3] == "divided") {
          return (newArray[0] / newArray[2] / newArray[4])
        } else
          throw new ArgumentError(); 
}



function ArgumentError() {
}
ArgumentError.prototype = Error.prototype;

// throw { name : 'ArgumentError', message : 'Hey' }
// threw { name : 'ArgumentError', message : 'Hey' }.




