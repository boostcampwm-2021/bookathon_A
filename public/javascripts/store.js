let store = {
	currentPage: "main",
	currentQuestionNumber: 0,
	questionHistory: [
		// ex. { 0 : 1, 1: 2, 3: 1, ...}
	],
};

export const setStore = (obj) => {
	store = { ...store, ...obj };
};

export const getStore = () => store;
