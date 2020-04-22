import * as $ from 'jquery';
import popper from 'popper.js'
import  bootstrap from 'bootstrap'
import speak from './speak'
import QuestionStore from './QuestionStore'

(function() {
  console.log("yay");


let speaker =  $('.speak'); 
let questElem =  $('.question');
let optionList =  $('.option-list');
let words = document.getElementsByClassName('word');
console.log(questElem)

function speakerClick (elem, func, words) {
  // if(words){
    elem.on('click', 'i', () => {
      // when working test with getelementbyclassname
      func(words);
      console.log(words)
    })

    elem.on('keydown', 'i', event => {
      // let words = document.querySelectorAll('.word');
      if (event.isComposing || event.keyCode === 13) {
        func(words);
      }
    })
  // } 
}

function loadElem (elem, question, elemtag, elemclass = "") {
  let parentElem = $(`.${elem}`);  

  question.forEach(element => {
    parentElem.append(`<${elemtag} class="${elemclass}">${element}</${elemtag}>&ensp;`)    
  });  
}

function checkans(ans, pelem) {
  let questOption = Array.from($('.option'));
  let answer
  questOption.forEach(e => {
    e.addEventListener('click', () => {
      answer = question.checkAnswer(ans, e.innerHTML)
      if (answer === true) {
        console.log(answer)
        e.style.borderColor = "#28a745"
      }else{
        e.style.borderColor = "2px solid #adb5bd"
      }
      return answer;
    })
  })
}

// function verifyans (val) {
//   if (val) {
    
//   }
// }


let question = new QuestionStore();

let generatedQuest = question.generateQuestion();

speakerClick(questElem, speak, words);

loadElem("question", generatedQuest.triadWord, 'span', 'word')
loadElem("option-list", generatedQuest.options, 'li', 'option')
checkans(generatedQuest, optionList);
console.log(generatedQuest);
// question.checkAnswer(generatedQuest, generatedQuest.answer);



}())