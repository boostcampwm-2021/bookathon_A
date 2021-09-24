let store = {
	currentPage: "main",
	currentQuestionNumber: 0,
	questionHistory: [0],
};

export const setStore = (obj) => {
	store = { ...store, ...obj };
};

export const getStore = () => store;

export const initialize = () => {
	store = {
		currentPage: "main",
		currentQuestionNumber: 0,
		questionHistory: [0],
	};
};
