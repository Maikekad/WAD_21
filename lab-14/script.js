function sayHi() {
    return "Hi, we start learning Jest!";
   }
   //We need to export our module/function, to import it into the test environment/file later
   module.exports = sayHi;