'use strict'

export default class GameState {
  constructor() {
    this.playing;
    this.gameover = false;
  }

  playingState() {
    return this.playing = true;
  }

  pauseState() {
    return this.playing = false;
  }

  gameOver() {
    this.gameOver = true
  }
}
