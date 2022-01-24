const stringFun = require("../stringFun");
//test 1 - if we did not pass a nameto the function, its value will be undefined
test("name is name is empty return undefined", () => {
 expect(stringFun()).toBe("undefined");
});
//test 2, name should not have extra spaces before or after it"
test("name does not have extra spaces before or after it", () => {
 expect(stringFun(" name ")).toBe("name");
});
//test 3, name should not start with underscore (_)"
test("name should not start with underscore (_), if it is, remove the underscore", () => {
    expect(stringFun("_name")).toBe("name");
}); 