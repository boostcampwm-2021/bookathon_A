const $target = () => document.querySelector("#app");

const template = () =>{
    return `
    <div class="question-page">
        <div class="question-window">
            <div class="header">
                <div class="exit"></div><div></div><div></div>
            </div>
            <section class="question-content">
                <div class="start-content">
                    <div id="start-title">
                    <h2>저는 undefined 개발자입니다.</h2>
                    </div>
                    <div id="ascii-art"></div>
                    <div id='start-button'><h3>$Press_y_to_start\></h3></div>
                </div>
            </section>
             <section class="pagenation"></section>
        </div>
    </div>
    `
}

export const render = ()=>{
    $target().innerHTML = "";
    $target().innerHTML = template();

}
