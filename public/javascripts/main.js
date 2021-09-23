// main.js
import { initQuestion } from "./question/question.js";

const $body = () => document.querySelector("body");

const init = () => {
	$body().innerHTML = `<div id="app"></div>`;
	initQuestion({ num: 0, answer1: "사이트 잘못 들어왔어요. 나갈래요", answer2: "개발에 관심이 생겼어요." });
};

init();
