'use strict';

class Timer {
  constructor(time) {
    this.timeCountDown = time;
    this.counting;
  }

  timerDecrement() {
    return this.timeCountDown -= 1
  }

  decremenTimer(elem, func, ans, begin) {
    let newQuestion
    if(this.timeCountDown !== 0){
      this.counting = setInterval(() => {
        let val = this.timerDecrement()
        elem.textContent = val;
        if(this.timeCountDown === 0){
          this.clearInt(this.counting)
          func(ans);
          newQuestion = setTimeout(() => {
            begin();
          }, 1500)
        }
      }, 1000);
    }
    clearTimeout(newQuestion)
  }

  setTimerZero() {
    this.timeCountDown = 0;
    this.clearInt();
  }

  clearInt() {
    clearInterval(this.counting)
  }
}

export default Timer;