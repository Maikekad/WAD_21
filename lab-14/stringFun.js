function stringFun(name) {
    if (name == undefined) return "undefined";
    if (name.indexOf("_") == 0) return name.substring(1);
    return name.trim();
   }
   module.exports = stringFun;


   
/*
function stringFun(name) {
 if (name == undefined) {
 name = "undefined";
 }
 if (name.startsWith(" ") || name.endsWith(" ")) {
 name = name.trim()
 }
 if (name.startsWith("_")) {
 name = name.substring(1)
 }
 return name;
}
*/