import { render } from './render-start.js';
import { initQuestion } from '../question/question.js';
import { setStore } from "../store.js";

const $target = () => document.querySelector("#app");

export const initPage = ()=>{
    setStore({ currentPage:  -1});
	render();
    addEvent();
}

const addEvent = ()=>{
    const button = document.querySelector('#start-button');
    button.addEventListener('click',()=>{
        initQuestion({
		    num: 0,
		    question: "미래의 개발자님, 안녕하세요!",
		    answer1: "사이트 잘못 들어왔어요. 나갈래요",
		    answer2: "개발에 관심이 생겼어요.",
	    });
    })
    window.addEventListener('keydown',(e)=>{
        if(e.key=='y' || e.key=='Y'){
            initQuestion({
                num: 0,
                question: "미래의 개발자님, 안녕하세요!",
                answer1: "사이트 잘못 들어왔어요. 나갈래요",
                answer2: "개발에 관심이 생겼어요.",
            });
        }
    })
}