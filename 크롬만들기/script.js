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
    alert(a + b);
  },
  minus: function (a, b) {
    if (a < b) {
      alert(b - a);
    } else {
      alert(a - b);
    }
  },
  divide: function (a, b) {
    if (a < b) {
      alert("몫 : " + b / a, "나머지 : " + (b % a));
    } else {
      alert("몫 : " + a / b, "나머지 : " + (a % b));
    }
  },
  // or root
  powerOf: function (a, b) {
    alert(a ** b);
  },
};
calculator.plus(5, 10);
calculator.minus(5, 10);
calculator.divide(5, 10);
calculator.powerOf(5, 10);

/* 8 : return */