const target = () => document.querySelector("#app");

const template = ({ question, answer1, answer2 }) => `
    <div class="question-page">
        <div class="question-window">
            <header>
            </header>
            <section>
                <div>${question}</div>
                <div>
                    <div>${answer1}</div>
                    </div>${answer2}</div>
                </div>
            </section>
            <section class="pagenation">
                <div class="left"><</div>
                <div class="right">></div>
            </section>
        </div>
    </div>
`;

export const render = ({ question, answer1, answer2 }) => {
	target().innerHTML = template({ question, answer1, answer2 });
};
