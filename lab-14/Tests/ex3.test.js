const ex3Func = require("../ex3");

test("If a user entered  two numbers and 'avg' operator, she should recive the avarage of the two numbers", () => {
    expect(ex3Func(5, 6, 'avg')).toBe(5.5);
});

test("If a user entered  two numbers and 'min' operator, she should recive the smaller numbers", () => {
    expect(ex3Func(5, 6, 'min')).toBe(5);
});

test("If a user entered  two numbers and 'max' operator, she should recive the bigger numbers", () => {
    expect(ex3Func(5, 6, 'max')).toBe(6);
});

test("If a user entered  two numbers and 'rest' operator, she should recive the reminder of dividing num1 to num2", () => {
    expect(ex3Func(6, 5, 'rest')).toBe(1);
});