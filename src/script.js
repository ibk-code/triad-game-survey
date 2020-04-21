import jquery from 'jquery';
import popper from 'popper.js'
import  bootstrap from 'bootstrap'
import Gamesound from './Bgsound'

(function () {

  console.log("yay")
  let elemWrap = document.querySelector(".g-summary");
  let startSound = new Gamesound("./sound/game.mp3", elemWrap);
  // startSound.play()
}())