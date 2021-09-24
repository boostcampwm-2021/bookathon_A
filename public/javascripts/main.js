// main.js
import { initQuestion } from "./question/question.js";
import {initPage} from "./start/start.js";

const $body = () => document.querySelector("body");

const init = () => {
	$body().innerHTML = `<div id="app"></div>`;
	initPage();
};

init();
