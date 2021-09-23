import { render } from "./render-question.js";
// import { setStore, getStore } from "../store";

const BASE_API_URL = "";

// doms
const $answers = document.querySelectorAll(".answer");

export const initQuestion = ({ num, answer1, answer2 }) => {
	render({ num, answer1, answer2 });
};

const fetchQuestion = async (questionNumber, pick) => {
	return fetch(`${BASE_API_URL}?q=${questionNumber}&pick=${pick}`).then((res) => res.json);
};

// eventhandlers
const onClickAnswer = ({ target }) => {
	const $answer = target.closest(".answer");
	if (!$answer) return;
	const picked = $answer.dataset.answer;
};

const addEvents = () => {};
