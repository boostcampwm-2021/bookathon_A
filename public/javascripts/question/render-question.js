const $target = () => document.querySelector("#app");

const template = ({ num, question, answer1, answer2, image }) => `
    <div class="question-page">
        <div class="question-window">
            <div class="header">
                <div class="exit"></div><div></div><div></div>
            </div>
            <section class="question-content-position">
                <div class="question-content">
                    <div class="question-title">$ ${question}</div>
                    ${image ? `<img src="${image}" />` : ""}
                    <div class="question-button">
                        <div class="answer" data-answer="1">${answer1}</div>
                        <span>vs</span>
                        <div class="answer ${num === 99 ? "answer-easter" : ""}" data-answer="2">${answer2}</div>
                    </div>
                </div>
            </section>
            <section class="pagenation"></section>
        </div>
    </div>
`;

export const render = ({ num, question, answer1, answer2 }) => {
	$target().innerHTML = "";
	$target().insertAdjacentHTML("beforeend", template({ num, question, answer1, answer2 }));
};
