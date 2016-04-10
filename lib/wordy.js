'use strict';

function WordProblem(string){

  var prestoChango = { 
    "plus": "+",
    "minus": "-",
    "divided by": "/",
    "multiplied by": "*",
    "subtract": "-"
  };

  //validations
  var validations = [
    string.slice(0,7).toLowerCase() === "what is",
    string.split("")[string.split("").length -1] === "?",
  ];
  if (string.match(/\d+/g) === null) {
    validations.push(false);
  }
  else if (string.match(/\d+/g).length < 2) {
    validations.push(false);
  }


  if (validations.indexOf(false) < 0) {

    var stringForEval = string.slice(8, string.length - 1 );

    // swap string symbols
    for (var k in prestoChango) {
      var subber = new RegExp(" " + k + " ","gi");
      stringForEval = stringForEval.replace(subber, " " + prestoChango[k] + " ");
    }

    // handle nonPEMDAS parenthesis ordering
    if (stringForEval.match(/\d+\s/g).length > 1) {

      var numSetCount = stringForEval.match(/\d+\s/g).length;
      for (var i=0; i < numSetCount; i++) {
        var splitString = stringForEval.split("");
        var numSet = stringForEval.match(/\d+\s/);
        var numSetIndex = stringForEval.match(/\d+\s/).index;
        var numSetLength = stringForEval.match(/\d+\s/)[0].split("").length;
        splitString.splice(numSetIndex + numSetLength - 1, 1, ")");
        splitString.unshift("(");
        stringForEval = splitString.join("");
      }
    }

  }

  this.answer = function(){
    if (validations.indexOf(false) > -1) {
      throw new ArgumentError();
    }
    else {
      return eval(stringForEval);
    }
  };
}

function ArgumentError(){
  this.name = "ArgumentError";
  this.message = "That's a no-go.";
}