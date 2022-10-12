function calc(){
    var firstNum = parseFloat(document.getElementById("firstNum").value);
    var secondNum = parseFloat(document.getElementById("secondNum").value);
    var thirdNum = parseFloat(document.getElementById("thirdNum").value);

    var op1 = document.getElementById("op1").value;
    var op2 = document.getElementById("op2").value;

    var ans = document.getElementById("calculationAns");
    
    var tempAns;

    var calculate = {
        '+': function (x, y) { return x + y },
        '-': function (x, y) { return x - y },
        'x': function (x, y) { return x * y },
        '/': function (x, y) { return x / y }
    };

    if(op2 == "+" || op2 == "-" || op1 == "x" || op1 == "/")
    {
        tempAns = calculate[op1](firstNum, secondNum);
        tempAns = calculate[op2](tempAns, thirdNum);
    }
    else{
        tempAns = calculate[op2](secondNum, thirdNum);
        tempAns = calculate[op1](tempAns, firstNum);
    }

    ans.innerHTML = tempAns;
}