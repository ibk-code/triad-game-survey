'use strict';

class GameSound {
  constructor(src, elem){
    this.src = src;
    this.sound = document.createElement('audio');
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    this.sound.loop = true;
    elem.appendChild(this.sound);
  }

  play() {
    this.sound.play()
  }

  stop() {
    this.sound.pause();
  }

}

export default GameSound;