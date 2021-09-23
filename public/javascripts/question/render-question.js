const $target = () => document.querySelector("#app");

const template = ({ num, answer1, answer2, image }) => `
    <div class="question-page">
        <div class="question-window">
            <div class="header">
            </div>
            <section>
                <div class="question-number">${num}</div>
                ${image && `<img src="${image}" />`}
                <div>
                    <div class="answer" data-answer="1">${answer1}</div>
                    <div class="answer" data-answer="2">${answer2}</div>
                </div>
            </section>
            <section class="pagenation">
                <div class="left"><</div>
                <div class="right">></div>
            </section>
        </div>
    </div>
`;

export const render = ({ num, answer1, answer2 }) => {
	$target().innerHTML = "";
	$target().insertAdjacentHTML("beforeend", template({ num, answer1, answer2 }));
};
