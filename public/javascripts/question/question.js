import { render } from "./render-question.js";
import { setStore, getStore } from "../store.js";

const BASE_API_URL = "http://localhost:3000/question";

// doms
const $target = () => document.querySelector("#app");
const $answers = () => document.querySelectorAll(".answer");

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

// eventhandlers
const onClickAnswer = async (target) => {
	const $answer = target.closest(".answer");
	if (!$answer) return;
	const picked = $answer.dataset.answer;
	const [result] = await fetchQuestion(getStore().currentQuestionNumber, picked);

	if (result) {
		setStore({ currentQuestionNumber: result.num });
		toNextQuestion(result);
	}
};

const addEvents = () => {
	$target().addEventListener("click", ({ target }) => {
		onClickAnswer(target);
	});
};
