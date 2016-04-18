'use strict';

function WordProblem(question){
  this.answer = function() {
    var nums = question.match(/-?\d+/g);
    var allParts = question.split(' ');
    if (allParts[3] == "plus") {
      if (nums.length == 3) {
        if (allParts[5] == "plus") {
          return parseInt(nums[0]) + parseInt(nums[1]) + parseInt(nums[2]);
        } else if (allParts[5] == "minus") {
          return parseInt(nums[0]) + parseInt(nums[1]) - parseInt(nums[2]);
        } else if (allParts[5] == "multiplied") {
          return (parseInt(nums[0]) + parseInt(nums[1])) * parseInt(nums[2]);
        }
      } else {
        return parseInt(nums[0]) + parseInt(nums[1]);
      }
    } else if (allParts[3] == "minus") {
      if (nums.length == 3) {
        if (allParts[5] == "plus") {
          return parseInt(nums[0]) - parseInt(nums[1]) + parseInt(nums[2]);
        } else if (allParts[5] == "minus") {
          return parseInt(nums[0]) - parseInt(nums[1]) - parseInt(nums[2]);
        }
      } else {
        return parseInt(nums[0]) - parseInt(nums[1]);
      }
    } else if (allParts[3] == "multiplied") {
      if (nums.length == 3) {
        if (allParts[6] == "multiplied") {
          return parseInt(nums[0]) * parseInt(nums[1]) * parseInt(nums[2]);
        } else if (allParts[6] == "plus") {
          return parseInt(nums[0]) * parseInt(nums[1]) + parseInt(nums[2]);
        }
      } else {
        return parseInt(nums[0]) * parseInt(nums[1]);
      }
    } else if (allParts[3] == "divided") {
      if (nums.length == 3) {
        if (allParts[6] == "divided") {
          return (parseInt(nums[0]) / parseInt(nums[1])) / parseInt(nums[2]);
        } 
      } else {
        return parseInt(nums[0]) / parseInt(nums[1]);
      };   
    } else if (allParts[3] == "raised") {
      var answer = 1;
      for (var i = parseInt(nums[1]); i != 0; i--) {
        answer = answer * parseInt(nums[0]);
      }
      return answer;
    }
    throw new ArgumentError;
  }
}

function ArgumentError(){}
