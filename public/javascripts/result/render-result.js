const target = () => app;

const template = (result, isEgg) =>
	`
    <header>
        <a href="/">return 0;</a>
    </header>
    <div class="result-page">
        <div class="result-window">
            <div class="header">
                <div></div><div></div><div></div>
            </div>
            <section class="result">
                <div>
                    <div class="result-name">저는 ${result.name} ${isEgg ? "" : "개발자"} 입니다.</div>
                    <div class="result-image">
                        <img width="300px" src="../../src/image/thumbnail/${result.image}.png" />
                    </div>
                    <div class="result-short">${result.short}</div>
                    <div class="result-content">${result.content}</div>
                </div>` +
	(isEgg
		? ""
		: `
                <div>
                    <div class="result-success">
                        <div class="title">예시</div>
                        
                        <div class="result-list">` +
		  result.success.reduce((p, c) => {
				return p + `<img class="result-img" src="../../src/image/success/${c}.png" />`;
		  }, "") +
		  `
                        </div>
                    </div>
                    <div class="result-language">
                        <div class="title">사용 언어</div>
                        <div class="result-list">` +
		  result.language.reduce((p, c) => {
				return p + `<img class="result-img" src="../../src/image/language/${c}.png" />`;
		  }, "") +
		  `
                        </div>
                    </div>
                </div>`) +
	`       </section>
            <div class="result-temp"></div>        
        </div>
    </div>
`;

export const render = (result, isEgg) => {
	target().innerHTML = template(result, isEgg);
};
