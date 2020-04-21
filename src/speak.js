"use strict";

let synth =  window.speechSynthesis;

function speak (words) {
  let arr = Array.from(words);
  
  arr.forEach((a) => {
    var utterThis = new window.SpeechSynthesisUtterance(a.textContent)

    utterThis.onend = () => {
      console.log("Finished speaking");
    }

    utterThis.onerror = () => {
      console.log("An error occured while uttering speech");
    }

    synth.speak(utterThis);
  })
}

export default speak;