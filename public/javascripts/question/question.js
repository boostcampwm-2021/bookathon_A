import { render } from "./render-question.js";
import { renderResult } from "../result/result.js";
import { setStore, getStore } from "../store.js";
import { nextPage } from "../animation.js";

const BASE_API_URL = "http://localhost:3000/question";

// doms
const $target = () => document.querySelector("#app");

export const initQuestion = async ({ num, question, answer1, answer2 }) => {
	setStore({ currentPage: num });
	render({ num, question, answer1, answer2 });
	addEvents();
};

const fetchQuestion = async (questionNumber, pick) => {
	const url = `${BASE_API_URL}?q=${questionNumber}${pick ? `&pick=${pick}` : ""}`;
	return fetch(url).then((res) => {
		return res.json();
	});
};

const toPreviousQuestion = async (prevQuestionNumber) => {
	const [result] = await fetchQuestion(prevQuestionNumber);
	setStore({ currentQuestionNumber: parseInt(prevQuestionNumber) });
	render(result);
};

const toNextQuestion = (data) => {
	render(data);
};

const onClickEasterEggHandler = (e) => {
	const $answer = e.target.closest(".answer-easter");
	if (!$answer) return;

	e.stopImmediatePropagation();
	const newAnswer = $answer.cloneNode(true);
	$answer.style.visibility = "hidden";

	const frame = document.querySelector(".question-content");
	frame.appendChild(newAnswer);
	const [frameHeight, frameWidth] = [
		parseInt(window.getComputedStyle(frame).height),
		parseInt(window.getComputedStyle(frame).width),
	];

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
		toNextQuestion({
			num: 99,
			question: "갈때 가더라도 Hello World 한줄은 괜찮잖아?",
			answer1: "장난이고, 개발 하고싶습니다.",
			answer2: "그게뭔데.. 나갈래..",
		});
		nextPage(document.querySelector(".question-content"));
		return;
	}

	if (!result.name) {
		setStore({ currentQuestionNumber: result.num });
		getStore().questionHistory.push(getStore().currentQuestionNumber);
		toNextQuestion(result);
		nextPage(document.querySelector(".question-content"));
	} else {
		renderResult(result);
		nextPage(document.querySelector(".result"));
	}

};

// const onClickPrevious = (target) => {
// 	const button = target.closest(".pagenation-button");
// 	if (!button) return;
// 	if (Math.max(...getStore().questionHistory) === 0) {
// 		initQuestion({ num: 0, answer1: "사이트 잘못 들어왔어요. 나갈래요", answer2: "개발에 관심이 생겼어요." });
// 		return;
// 	}
// 	getStore().questionHistory.pop();
// 	toPreviousQuestion(getStore().questionHistory[getStore().questionHistory.length - 1]);
// };

const onClickExit = (target) => {
	const button = target.closest(".exit");
	if (!button) return;
	// alert('')
};

const addEvents = () => {
	$target().addEventListener("mouseover", (e) => {
		onClickEasterEggHandler(e);
	});
	$target().addEventListener("click", ({ target }) => {
		onClickAnswer(target);
		// onClickPrevious(target);
		onClickExit(target);
	});
};
