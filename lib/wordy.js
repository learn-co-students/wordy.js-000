'use strict';

function WordProblem(question){
    var q = question.replace("What is ", "")
        .replace("?", "")
        .replace(/plus/g, "+")
        .replace(/minus/g, "-")
        .replace(/multiplied by/g, "*")
        .replace(/divided by/g, "/")


    var sumComesFirst = q.indexOf('+') < q.indexOf('*');
    if(sumComesFirst) {
        var arr = q.split(" ");
        arr.splice(0,0,"(");
        arr.splice(4,0, ")");
        q = arr.join(' ')
    } 

    if (/cubed/.test(q)) {
        q = q.replace("cubed", "");
        q = q + "*" + q + "*" + q;
    }

    return {
        answer: function(){
            return eval(q);
        }
    }
}

function ArgumentError(){}
