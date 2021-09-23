import { render } from "./render-question";
import store from "../store";

const BASE_API_URL = "";

const init = async () => {
	const { currentPage, currentQuestionNumber } = store;
	const { question, answer1, answer2 } = await fetchQuestion(currentQuestionNumber, "");
	render({ question, answer1, answer2 });
};

const fetchQuestion = async (questionNumber, pick) => {
	return await fetch(`${BASE_API_URL}?q=${questionNumber}&pick=${pick}`).then((res) => res.json);
};
