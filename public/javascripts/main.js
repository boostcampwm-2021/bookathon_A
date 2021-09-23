// main.js
import { initQuestion } from "./question/question.js";

const $body = () => document.querySelector("body");

const init = () => {
	$body().innerHTML = `<div id="app"></div>`;
	initQuestion({});
};

init();
