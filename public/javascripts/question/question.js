import { render } from "./render-question.js";
import { setStore, getStore } from "../store.js";

const BASE_API_URL = "http://localhost:3000/question";

// doms
const $answers = document.querySelectorAll(".answer");

export const initQuestion = async ({ num, answer1, answer2 }) => {
	setStore({ currentPage: num });
	render({ num, answer1, answer2 });

	// test
	const result = await fetchQuestion(2, 1);
	console.log(result);
	// test
};

const fetchQuestion = async (questionNumber, pick) => {
	return fetch(`${BASE_API_URL}?q=${questionNumber}&pick=${pick}`).then((res) => {
		return res.json();
	});
};

// eventhandlers
const onClickAnswer = async ({ target }) => {
	const $answer = target.closest(".answer");
	if (!$answer) return;
	const picked = $answer.dataset.answer;
	const result = await fetchQuestion(getStore().currentPage, picked);
	console.log(result);
};

const addEvents = () => {};
