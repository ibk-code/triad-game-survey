import * as $ from "jquery";
import popper from "popper.js";
import bootstrap from "bootstrap";
import speak from "./speak";
import QuestionStore from "./QuestionStore";
import Counter from "./Counter";
import GameState from './Gamestate';
import Timer from './Timer'

(function () {
  console.log("yay");
  let gameState, partialCounterStore;
  let question = new QuestionStore();
  let intiateState = new GameState;
  let score = new Counter();
  let scoreField = document.getElementById("game-score");
  let speaker = $(".speak");
  let questElem = $(".question");
  let questElemWrap = $(".question-wrap");
  let optionList = document.getElementById("option-list");
  let options = document.getElementsByClassName("option");
  let words = document.getElementsByClassName("word");
  let gameStateToggler = document.getElementById
  ('btn-play');
  let popModal = document.getElementsByClassName('game-modal-wrap')[0];
  let resumebtn = document.getElementById("resume-game")
  let timerElem = document.getElementById('timer');


  function speakerClick(elem, func, words) {
    // if(words){
    elem.on("click", "i", () => {
      // when working test with getelementbyclassname
      func(words);
      console.log(words);
    });

    elem.on("keydown", "i", (event) => {
      // let words = document.querySelectorAll('.word');
      if (event.isComposing || event.keyCode === 13) {
        func(words);
      }
    });
    // }
  }

  function loadElem(elem, question, elemtag, elemclass = "") {
    let parentElem = $(`.${elem}`);
    parentElem.html(" ")
    question.forEach((element) => {
      parentElem.append(
        `<${elemtag} class="${elemclass}">${element}</${elemtag}>&ensp;`
      );
    });
  }
  

  function correctAnsAlight(ans) {
    let questOption = Array.from(options);
    // console.log(options);
    questOption.forEach((e) => {
      if (e.textContent === ans) {
        e.style.borderColor = "#28a745";
      }
    });
  }

  function disableClick() {
    let questOption = Array.from(options);
    questOption.forEach((e) => {
      e.disabled = true;
    });
  }

  function ansCheck(ans, answer, e) {
    answer = question.checkAnswer(ans, e.innerHTML);
    if (answer === true) {
      e.style.borderColor = "#28a745";
      scoreCounter();
      disableClick();

    } else {
      e.style.borderColor = "#adb5bd";
      correctAnsAlight(ans.answer);
      disableClick();
    }
    return answer;
  }

  function checkans(ans, con) {
    let timing
    let questOption = Array.from($(".option"));
    let answer;
    questOption.forEach((e) => {
      e.addEventListener("click", () => {
        ansCheck(ans, answer, e);
        con.setTimerZero();
        timing = setTimeout(() => {
          beginGame()
        },2000)
      });
    });
    clearTimeout(timing);
  }

  

  function scoreCounter() {
    let newScore = score.incrementScore();
    scoreField.textContent = `${newScore}`;
  }

  function pauseGame(con) {
    // partialCounterStore = num;
    // num = 0;
    // console.log(num)
    // clearInt(num)
    con.clearInt();
    gameStateToggler.innerHTML = '<i class="fas fa-pause"></i> Pause'
    popModal.style.display = 'flex';
  }

  function resumeGame(con, elem, func, ans, begin) {
    // num = partialCounterStore;
    // partialCounterStore = 0;
    // elem = counter(time)
    con.decremenTimer(elem, func, ans, begin)
    gameStateToggler.innerHTML = '<i class="fas fa-play"></i> Play'
    popModal.style.display = 'none';
  }

  function callStatepause (e, func, con) {
    e.addEventListener('click', () => {
      func(con)
    })
  }

  function callStateresume (e, func, con, elem, funcAns, ans, begin) {
    e.addEventListener('click', () => {
      func(con, elem, funcAns, ans, begin)
    })
  }
  

  function beginGame () {
    console.log(performance.now());
    let timer, gamestate, check;
    let generatedQuest = question.generateQuestion();
    console.log(generatedQuest);
    gamestate = intiateState.playingState();
    timer =  new Timer(20);
    timer.decremenTimer(timerElem, correctAnsAlight, generatedQuest.answer, beginGame);
    loadElem("question", generatedQuest.triadWord, "span", "word");
    loadElem("option-list", generatedQuest.options, "button", "option btn-brand");
    // check = counter(timer);
    speakerClick(questElemWrap, speak, words);
    checkans(generatedQuest, timer);
    callStatepause(gameStateToggler, pauseGame, timer);
    callStateresume(resumebtn, resumeGame, timer, timerElem, correctAnsAlight, generatedQuest.answer, beginGame);
    console.log(performance.now());
  }

  function init(){
    beginGame();
  }

  init();


  
})();