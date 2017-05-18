'use strict';

function WordProblem(question){
    var q = question.replace("What is ", "")
        .replace("?", "")
        .replace(/plus/g, "+")
        .replace(/minus/g, "-")
        .replace(/multiplied by/g, "*")
        .replace(/divided by/g, "/")

        return {
            answer: function(){
                return eval(q);
            }
        }
}

function ArgumentError(){}
