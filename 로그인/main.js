/* 
// div
const signinForm = document.querySelector(".sign-form");
// 그룹 안
const signinInput = signinForm.querySelector("input");
const signinButton = signinForm.querySelector("button"); */

//단축 코드 // '#'은 id '.'은 class
const signinForm = document.querySelector(".sign-form");
const signinInput = document.querySelector(".sign-form input");
// const signinButton = document.querySelector(".sign-form button");
/* 4 */
const gretting = document.querySelector("#greeting");
// hidden이 2개 이상이라 변수 생성하면 편리함.
const HIDDEN_CLASSNAME = "hidden";

function onSigninSubmit(event) {
    // console.dir(signinInput);
    // 인풋.값(텍스트창 입력 시)
    // console.log(signinInput.value);
    // 출력 문장
    // console.log("Click!");
    // console.log("hi", signinInput.value);
    // const username = signinInput.value;
    // console.log(username);
    event.preventDefault();
    signinForm.classList.add(HIDDEN_CLASSNAME);
    const username = signinInput.value;
    /* 5 키값 어플리케이션 설정 */
    localStorage.setItem("username", username);
    /* 4 */
    // gretting.innerText = "Hello" + username;
    // 백틱 기호
    gretting.innerText = `Hello ${username}`;
    // 히든(가리기)를 앞서 사용한 것에 더하면 다시 나타남.
    gretting.classList.remove(HIDDEN_CLASSNAME);
    console.log(username);
}
// signinButton.addEventListener("click", onSignBtnClick);
signinForm.addEventListener("submit", onSigninSubmit);

/* 3 */
const link = document.querySelector("a");

function onLinkClick(event) {
    // prevnetDefault하기 전 알림창으로 막을 순 있지만 누르면 넘어간다.
    // alert("clicked!");
    
    event.preventDefault();
    console.log(event);
}

link.addEventListener("click", onLinkClick);


