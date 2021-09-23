const target = () => app;

const template = ({ result, content }) => `
    <div class="result">
        <div class="result-header">
            나는 ${result.title} 개발자입니다.
        </div>
        <div class="result-image">
            <img src="../public/src/image/${result.title}.png" />
        </div>    
        <div class="result-content">
            ${content}
        </div>
        <div class="result-content">
            <div class="result-success">
                <div class="result-title">
                    성공사례
                </div>
                <div class="result-list">`+
    result.success.reduce((p, c) => {
        return p + `<img src="../public/src/image/${c}.png" />`;
    }, "") + `
                </div>
            </div>
            <div class="result-language">
                <div class="result-title">
                    관련 언어
                </div>
                <div class="result-list">`+
    result.language.reduce((p, c) => {
        return p + `<img src="../public/src/image/${c}.png" />`;
    }, "") + `
                </div>
            </div>
        </div>
    </div>
`;

export const render = ({ result, content }) => {
	target().innerHTML = template({ result, content });
};
