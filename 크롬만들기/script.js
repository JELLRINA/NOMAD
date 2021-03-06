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
  time: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
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
if (isNaN(age) || age < 0) {
  console.log(prompt("Please write a real positive number."));
} else if (age < 19) {
  console.log(prompt("You are too young."));
} else if (age >= 19 && age <= 50) {
  console.log(alert("You cad drink!"));
} else if (age > 50 && age <= 80) {
  console.log(alert("You should be exercise."));
} else if (age > 80) {
  console.log(alert("You can do whatever you want."));
}

/* 10 : js => html 접근 타이틀 변경*/
document.title = " Hello JELLRINA!";

/* 11: html in js  */
// 엘리멘트 아이디 가져오기
const title = document.getElementById("title");

title.style.color = "red";

console.dir(title);
// title.innerText = "Got you!";
console.log(title.id);
console.log(title.className);

/* 12 : searching for elements */
/* const title1 = document.querySelector(".hello h2");
const title2 = document.querySelectorAll(".hello h2");

// 자주 사용하는 elements
const title3 = document.querySelector("#title");
const title4 = document.getElementById("title");

console.log(title1);
console.log(title2);
console.log(title3);
console.log(title4);
 */

/* 13:event */
/* //1.클릭 하려는 곳
const title5 = document.querySelector(".hello h2");
//3.클릭시 색상 변경 및 문구 출력 함수
function handleTitleClick(){
  title5.style.color="blue";
  // console.log("title was clicked!");
}
//2.클릭 이벤트 코드
title5.addEventListener("click", handleTitleClick);
 */

/* 13: mouse event */
const title6 = document.querySelector(".hello h2");

console.dir(title6);

//타이틀 클릭 시
function handleTitleClick() {
  title6.style.color = "violet";
}
//마우스 갖다대기
function handleMouseEnter() {
  title6.innerText = "Mouse is here~";
  // console.log("mouse is here~");
}
//마우스 떼기
function handleMouseLeave() {
  title6.innerText = "Mouse is gone!";
}
title6.addEventListener("click", handleTitleClick);
title6.addEventListener("mouseenter", handleMouseEnter);
title6.addEventListener("mouseleave", handleMouseLeave);
// == 아래와 같이 변경할 수 있지만 .removeEventListener을 사용하려면 위와 같이 쓰는걸
//title6.onclick = handleTitleClick;
/* 14: window resize */
function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}
//복사 함수 실행 시 복사 문구 뜨게하기
function handleWindowCopy() {
  alert("Copier!");
}
//wifi 온오프 함수
function handleWindowOffline() {
  alert("sorry Wi-Fi connection is required.");
}
function handleWindowOnline() {
  alert("Wi-Fi is connected!");
}
window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);

/* 15: if else문 이용 */
const h1 = document.querySelector(".hello h2");

function handleTitleClick() {
  const currentColor = h1.style.color;
  let newColor;
  if (currentColor == "blue") {
    newColor = "tomato";
  } else {
    newColor = "blue";
  }
  h1.style.color = newColor;
}
h1.addEventListener("click", handleTitleClick);

/* 16: css js 각 작성*/
/* const h2 = document.querySelector(".hello h2");

function handleTitleClick() {
  const activeClass = "active";
  if (h2.className === "activeClass") {
    h2.className = "";
  } else {
    h2.className = "activeClass";
  }
}
h2.addEventListener("click", handleTitleClick);
 */
/* 16-2 : 더 간단히 작성하기 */
const h2 = document.querySelector(".hello h2");

function handleTitleClick() {
  /* const clickedClass = "active";
  if(h2.classList.contains(clickedClass)) {
    h2.classList.remove(clickedClass);
  }else {
    h2.classList.add(clickedClass);
  } */
  h2.classList.toggle("active");
}
h2.addEventListener("click", handleTitleClick);