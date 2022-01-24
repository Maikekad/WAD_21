module.exports = ex1Func;
function ex1Func(num1, operator, num2){
    if(ex1Func.operator == '+') return num1 + num2;
    else if(ex1Func.operator == '++' && ex1Func.num2.length == 0) return num1 + 1;
    else if(ex1Func.operator == '%') return num1 % num2;
    return 0;
}

