// main.js
import { initQuestion } from "./question/question.js";

const $body = () => document.querySelector("body");

const init = () => {
	$body().innerHTML = `<div id="app"></div>`;
	initQuestion({
		num: 0,
		question: "미래의 개발자님, 안녕하세요!",
		answer1: "사이트 잘못 들어왔어요. 나갈래요",
		answer2: "개발에 관심이 생겼어요.",
	});
};

init();
