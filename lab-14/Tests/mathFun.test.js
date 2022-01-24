const mathFun = require("../mathFun");
//test 1 - the function should take a single parameter and returns its value
/*
test("return the passed number", () => {
 expect(mathFun(5)).toBe(5);
});
//test 2 - the function should take two parameters and return their sum
test("return the sum of two passed numbers ", () => {
 expect(mathFun(15, 5)).toBe(20);
}); */
//test 3 - the function should return 0, if no parameters were passed to it
 test("return 0 if no number is passed", () => {
 expect(mathFun()).toBe(0);
}); 