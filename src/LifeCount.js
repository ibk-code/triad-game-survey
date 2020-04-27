'use strict';

class LifeCounter {
  constructor(){
    this.life = 3
  }

  lifeDecrease(elem) {
    if(this.life > 0) {
      this.life -= 1;
      elem.textContent = this.life;
    }
  }
}

export default LifeCounter