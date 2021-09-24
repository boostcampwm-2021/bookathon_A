import { render } from "./render-result.js";
import { initPage } from "../start/start.js";
import { imageSlider } from "./animation-result.js";
import { setStore, getStore } from "../store.js";

export const renderResult = (result) => {
	const egg = ["크롱", "호눅스", "네이버 커넥트"];

	if (egg.includes(result.name)) {
		render(result, true);
	} else {
		render(result, false);
		imageSlider(document.querySelector(".result-success .result-list"));
		imageSlider(document.querySelector(".result-language .result-list"));
	}

	addEvents();
};

const onClickRetry = (e) => {
	initPage();
};

const addEvents = () => {
	document.querySelector("#app > header").addEventListener("click", onClickRetry);
};
