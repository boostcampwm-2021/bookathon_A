import { render } from "./render-question.js";
import { renderResult } from "../result/result.js";
import { setStore, getStore } from "../store.js";

const BASE_API_URL = "http://localhost:3000/question";

// doms
const $target = () => document.querySelector("#app");

export const initQuestion = async ({ num, answer1, answer2 }) => {
	setStore({ currentPage: num });
	render({ num, answer1, answer2 });
	addEvents();
};

const fetchQuestion = async (questionNumber, pick) => {
	return fetch(`${BASE_API_URL}?q=${questionNumber}&pick=${pick}`).then((res) => {
		return res.json();
	});
};

const toNextQuestion = (data) => {
	render(data);
};

const onClickEasterEggHandler = (e) => {
	const $answer = e.target.closest(".answer-easter");
	if (!$answer) return;

	e.stopImmediatePropagation();
	const newAnswer = $answer.cloneNode(true);
	console.log(newAnswer);
	$answer.style.visibility = "hidden";

	const frame = document.querySelector(".question-content");
	frame.appendChild(newAnswer);
	const [frameHeight, frameWidth] = [
		parseInt(window.getComputedStyle(frame).height),
		parseInt(window.getComputedStyle(frame).width),
	];
	console.log(frameHeight, frameWidth);

	newAnswer.style.position = "absolute";
	newAnswer.style.top = `${Math.random() * frameHeight}px`;
	newAnswer.style.left = `${Math.random() * frameWidth}px`;
};

// eventhandlers
const onClickAnswer = async (target) => {
	const $answer = target.closest(".answer");
	if (!$answer) return;
	const picked = $answer.dataset.answer;
	const [result] = await fetchQuestion(getStore().currentQuestionNumber, picked);

	if (getStore().currentQuestionNumber === 0 && picked == 1) {
		setStore({ currentQuestionNumber: 99 });
		toNextQuestion({ num: 99, answer1: "아뇨, 개발에 관심이 생겼습니다.", answer2: "그럼 이만!" });
		return;
	}

	if (!result.name) {
		setStore({ currentQuestionNumber: result.num });
		toNextQuestion(result);
	} else {
		//! to result page
		renderResult(result);
	}
};

const onClickPrevious = (target) => {
	const button = target.closest(".pagenation-button");
	if (!button) return;
	console.log("hihi");
};

const addEvents = () => {
	$target().addEventListener("mouseover", (e) => {
		onClickEasterEggHandler(e);
	});
	$target().addEventListener("click", ({ target }) => {
		onClickAnswer(target);
	});
	$target().addEventListener("click", ({ target }) => {
		onClickPrevious(target);
	});
};
