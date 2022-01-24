module.exports = ex3Func;

function ex3Func(num1, num2, op) {
  if (num1 == null && num2 == null && op == null) {
    return "You must enter two numbers and an operator";
  } else if (op == "avg") {
    return (num1 + num2) / 2;
  } else if (op == "min") {
    if (num1 < num2) {
      return num1;
    } else {
      return num2;
    }
  } else if (op == "max") {
    if (num1 > num2) {
      return num1;
    } else {
      return num2;
    }
  } else if (op == "rest") {
      return num1%num2;
  }

}
