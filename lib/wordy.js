'use strict';

function WordProblem(question){
  this.question = question.split(" ");
}

WordProblem.prototype.answer = function() {
  var newArray = new Array();
  var answer = 0
  this.question.forEach(function(word){
    var number = parseInt(word)
    if ((number * 0) == false) {
      newArray.push(number)
    } else if (word == "plus" || word == "minus" || word == "divided" ||  word == "multiplied") {
      newArray.push(word)
    }
  });
        if (newArray[1] == "plus") {
          answer = (newArray[0] + newArray[2])
        } else if  (newArray[1] == "minus") {
          answer = (newArray[0] - newArray[2])
        } else if (newArray[1] == "divided") {
          answer = (newArray[0] / newArray[2])
        } else if  (newArray[1] == "multiplied") {
          answer = (newArray[0] * newArray[2])
        } else
          throw new ArgumentError("What?!")

        if (newArray.length > 3) {
            if (newArray[3] == "plus") {
              answer += newArray[4]
            } else if  (newArray[3] == "minus") {
              answer -= newArray[4]
            } else if  (newArray[3] == "multiplied") {
              answer = answer * newArray[4]
            } else if  (newArray[3] == "divided") {
              answer = answer / newArray[4]
            } else
             throw new ArgumentError("What?!")
        }
    return answer
}


function ArgumentError(){}

// adding text so it passes




