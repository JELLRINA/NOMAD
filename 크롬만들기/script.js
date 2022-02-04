// alert("hi");
/* 1 : const & log */
const a = 5;
const b = 10;
// const myName = "RINA";
let myName = "RINA";

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello " + myName);
/* 2 : let */
myName = "JELLRINA";

console.log("your new name is " + myName);

/* 3 : boolean */
const amIFat = null;
let something;
console.log(something, amIFat);

/* 4 : array */
/* const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun";
const dayOfWeek = [mon, tue, wed, thu, fri, sat, sun]; */

const dayOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];
const nonsense = [1, 2, "hello", true, false, null, undefined, "rina"];
// 배열 아이템에서 가져오기
console.log(dayOfWeek, dayOfWeek[2], nonsense);
// 요일 추가
dayOfWeek.push("sun");
console.log(dayOfWeek);

/* 5 : object */
const player = {
  name: "rina",
  height: 162,
  age: 31,
};
console.log(player);
console.log(player.age);
player.codeName = "jellrina";
player.age = 28;
console.log(player);

/* 6 : function */
// 변수의 괄호 안 인자 작성 후 로그 출력문 작성
function sayHello(nameOfPerson, age) {
  console.log("Hello my name is " + nameOfPerson + " and I'm " + age + ".");
}
sayHello("rina", 18);
sayHello("jellrina", 28);
sayHello("lily", 10);

// 더하기 나누기 함수 작성
function plus(a, b) {
  console.log(a + b);
}
function divide(firstNumber, secondNumber) {
  console.log(firstNumber + secondNumber);
}
plus(10, 93);
divide(85, 5);

//object와 결합해서 사용
const player1 = {
  name: "rina",
  sayHello: function (otherPersonName) {
    console.log("Hello " + otherPersonName + " nice to meet you!");
  },
};
console.log(player1.name);
player1.sayHello("lily");

/* 7 :object + function */
const calculator = {
  plus: function (a, b) {
    console.log(a + b);
  },
  minus: function (a, b) {
    if (a < b) {
      console.log(b - a);
    } else {
      console.log(a - b);
    }
  },
  divide: function (a, b) {
    if (a < b) {
      console.log("몫 : " + b / a, "나머지 : " + (b % a));
    } else {
      console.log("몫 : " + a / b, "나머지 : " + (a % b));
    }
  },
  // or root
  powerOf: function (a, b) {
    console.log(a ** b);
  },
};
calculator.plus(5, 10);
calculator.minus(5, 10);
calculator.divide(5, 10);
calculator.powerOf(5, 10);

/* 8 : return */
const calculator1 = {
  plus: function (a, b) {
    console.log("hi");
    return a + b;
    console.log("bye");
  },
  minus: function (a, b) {
      return a - b;
  },
  time: function (a, b){
    return a * b;
  },
  divide: function (a, b) {
      return a / b
  },
  // or root
  powerOf: function (a, b) {
    return a ** b;
  },
};

const plusResult = calculator1.plus(2, 5);
const minusResult = calculator1.minus(plusResult, 5);
const timeResult = calculator1.time(2, minusResult);
const divideResult = calculator1.divide(timeResult, plusResult);
const powerOfResult = calculator1.powerOf(divideResult, minusResult);

console.log(plusResult);
console.log(minusResult);
console.log(timeResult);
console.log(divideResult);
console.log(powerOfResult);

/* 9. 팝업창 문자열을 정수로 변환 */
const age = parseInt(prompt("HOW OLD ARE YOU?"));
console.log(age);

// const age = prompt("how old are you?");
// console.log(typeof age);
if(isNaN(age) || age < 0) {
  console.log(prompt("Please write a real positive number."));
}else if (age < 19){
  console.log(prompt("You are too young."));
}else if (age >= 19 && age <= 50){
  console.log(alert("You cad drink!"));
}else if (age > 50 && age <= 80){
  console.log(alert("You should be exercise."));
}else if (age >80){
  console.log(alert("You can do whatever you want."));
};