import { render } from "./render-result.js";
import { imageSlider } from "./animation-result.js";
import { setStore, getStore } from "../store.js";

export const renderResult = (result) => {
	render(result);
	imageSlider(document.querySelector(".result-success .result-list"));
	imageSlider(document.querySelector(".result-language .result-list"));
};
