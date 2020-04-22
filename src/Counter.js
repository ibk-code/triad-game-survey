'use strict'

export default class Counter {
  constructor(){
    this.counter = 0; 
  }

  incrementScore() {
    return this.counter += 1;
  }

  scoreReseter() {
    return this.count = 0; 
  }

}