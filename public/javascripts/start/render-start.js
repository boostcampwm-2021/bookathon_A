import  { AsciiMorph } from './ascii-art/ascii-morph/asciiMorph.js';

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
                    <h1>저는 undefined 개발자입니다.</h1>
                    </div>
                    <pre id="ascii-art"></pre>
                    <div id='start-button'><h3>\$Press_y_to_start\></h3></div>
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
    const ascii_art = $target().querySelector('#ascii-art');
    const ascii_library=AsciiMorph(ascii_art,{x: 50,y: 25});
    // First, define some ascii art.
const computer = [
"        ,---------------------------,",
"        |  /---------------------\  ,",
"        | | $iamdeveloper>printf()| |",
"        | |                       | |",
"        | |        terminal       | |",
"        | |          is           | |",
"        | |       Awesome         | |",
"        |  \_____________________/  |",
"        |___________________________|",
"      ,---\_____     []     _______/------ ,",
"     /         /______________\           /|",
"    /___________________________________ /  | ___",
"    |                                   |   |    )",
"    |  _ _ _                 [-------]  |   |   (",
"    |  o o o                 [-------]  |  /    _),_",
"    |__________________________________ |/     /  /",
"   /-------------------------------------/|  ( )/",
"  /-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/ /",
"/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/ /",
"~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
    ]
   
   const spongebob = [
"        .--..--..--..--..--..--.",
"      .' \  (`._   (_)     _   \"",
"    .'    |  '._)         (_)  |",
"    \ _.')\      .----..---.   /",
"    |(_.'  |    /    .-\-.  \  |",
"    \     0|    |   ( O| O) | o|",
"     |  _  |  .--.____.'._.-.  |",
"     \ (_) | o         -` .-`  |",
"      |    \   |`-._ _ _ _ _\ /",
"      \    |   |  `. |_||_|   |",
"      | o  |    \_      \     |     -.   .-.",
"      |.-.  \     `--..-'   O |     `.`-' .'",
"    _.'  .' |     `-.-'      /-.__   ' .-'",
"  .' `-.` '.|='=.='=.='=.='=|._/_ `-'.'",
"  -._  `.   |________/\_____|    `-.'",
"    .'   ) .| '=' '='\/ '=' |",
"   `._.`    '---------------'",
"             //___\   //___\"",
"               ||       ||",
"               ||_.-.   ||_.-.",
"             (_.--__) (_.--__)"
    ]

const gameBoy=[
"    |_|_______________|_|",
"    |  ,-------------.  |",
"    | |  .---------.  | |",
"    | |  |         |  | |",
"    | |  |         |  | |",
"    | |  |         |  | |",
"    | |  |         |  | |",
"    | |  `---------'  | |",
"    | `---------------' |",
"    |   _ GAME BOY      |",
"    | _| |_         ,-. |",
"    ||_ O _|   ,-. "._,"|",
"    |  |_|    "._,"   A |", 
"    |    _  _    B      |", 
"    |   // //           |",
"    |  // //    \\\\\\  |",
"    |  `  `      \\\\\\ ,",
"    |________...______,\""
]

  const art_arr=[computer,spongebob,gameBoy];
    
   // Then, you can render (will render instantly)
  // let prevart = getRandomInt(0,3);
   ascii_library.render(art_arr[0]);
   
   // Then morph, to a new creation
  /* let nextart = prevart;
    while(prevart==nextart){
       nextart = getRandomInt(0,3);
    }*/
    ascii_library.morph(art_arr[1]);
}

const getRandomInt = (min, max) =>{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
  }