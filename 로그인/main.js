/* 
// div
const signinForm = document.querySelector(".sign-form");
// 그룹 안
const signinInput = signinForm.querySelector("input");
const signinButton = signinForm.querySelector("button"); */

//단축 코드
const signinForm = document.querySelector(".sign-form");
const signinInput = document.querySelector(".sign-form input");
// const signinButton = document.querySelector(".sign-form button");

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
    console.log(event);
}
// signinButton.addEventListener("click", onSignBtnClick);
signinForm.addEventListener("submit", onSigninSubmit);

/* 3 */
const link = document.querySelector("a");

function onLinkClick(event) {
    // prevnetDefault하기 전 알림창으로 막을 순 있지만 누르면 넘어간다.
    alert("clicked!");
    
    event.preventDefault();
    console.log(event);
}

link.addEventListener("click", onLinkClick);