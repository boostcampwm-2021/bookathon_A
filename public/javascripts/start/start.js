import { render } from "./render-start.js";
import { initQuestion } from "../question/question.js";
import { setStore } from "../store.js";
import { nextPage, typing } from "../animation.js";

const $target = () => document.querySelector("#app");

export const initPage = () => {
	setStore({ currentPage: -1 });
	render();
	addEvent();
};

const addEvent = () => {
	const button = document.querySelector("#start-button");

	const init = () => {
		const ment = "미래의 개발자님, 안녕하세요!";

		initQuestion({
			num: 0,
			question: ment,
			answer1: "사이트 잘못 들어왔어요. 나갈래요",
			answer2: "개발에 관심이 생겼어요.",
		});

		nextPage(document.querySelector(".question-content"));
		typing(document.querySelector(".question-title"), ment, document.querySelector(".question-button"));
	};

	button.addEventListener("click", () => {
		init();
	});

	window.addEventListener("keydown", (e) => {
		if (e.key == "y" || e.key == "Y") {
			init();
		}
	});
};
