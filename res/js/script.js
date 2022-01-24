let userName = "Andrew";
let userAge = 21;
let userPets = ["Cat", "Dog"];
let userBalance = 1200;
const EVERY_DAY_SPENDING = 15.3;
let everyDaySpendingPerPet = 6;
let daysSurvived = 0;

//console.log("Text message", variable) allows you to write to the
console;
console.log("User Name: ", userName);
console.log("User Age: ", userAge);
console.log("User pets: ", userPets);
console.log("User balance:", userBalance);
console.log("Every day spending per pet: ", everyDaySpendingPerPet);
console.log("Days survived: ", daysSurvived);

while (userBalance > 0) {
  let spending = EVERY_DAY_SPENDING + everyDaySpendingPerPet * userPets.length;
  userBalance -= spending;
  daysSurvived++;
}
console.log("User has sufficient money for " + daysSurvived + "days");
userPets.push("Hamster");
console.log("User has sufficient money for " + daysSurvived + "days");

userPets.pop();
everyDaySpendingPerPet = 2.4;
console.log("User has sufficient money for " + daysSurvived + "days");


for (let i = 0; i < 16; i++){
    if((i%3==0)&&(i%5==0)){
        console.log("FizzBuzz")
    }
    else if (i%3 == 0){
        console.log("Fizz")
    }
    else if (i%5 == 0){
        console.log("Buzz")
    }
    else {
        console.log(i)
    }
}


let arr = [0, 1]
let elements = 2
function fibo(arr, elements){
    if (elements == 100){
        return
    }
    else {
        console.log(arr[arr.length-1])
        arr.push(arr[arr.length - 1]+arr[arr.length - 2])
        fibo(arr, elements+1)
    }
}

fibo(arr, elements)




