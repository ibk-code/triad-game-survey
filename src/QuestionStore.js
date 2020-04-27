'use strict';

class QuestionStore {
  constructor(){
    this.questions = [
      {
        triadWord: ["salt", "wave", "sand"],
        options: ["river", "sky", "sea"],
        answer: "sea"
      },
      {
        triadWord: ["teacher", "board", "cafeteria"],
        options: ["school", "company", "stadium"],
        answer: "school"
      },
      {
        triadWord: ["ball", "foot", "coach"],
        options: ["sky", "football", "law"],
        answer: "football"
      },
      {
        triadWord: ["bail", "plaintiff", "adjourn"],
        options: ["law", "marketing", "photography"],
        answer: "law"
      },
      {
        triadWord: ["drums", "note", "modulation"],
        options: ["music", "football", "modeling"],
        answer: "music"
      }
    ];
    this.askedQuestions = [];
  }

  // static shuffle () {
  //   this.questions.forEach((elem, ind, arr) => {
  //     let elembefore = elem, newIndex = Math.floor(Math.random() * arr.length);

  //     elem = arr[newIndex];
  //     arr[newIndex] = elembefore
  //   });

    // console.log(this.questions)
  // }

  generateQuestion() {
    // this.constructor.shuffle();
    let questIndex = Math.floor(Math.random() * this.questions.length);
    // console.log(questIndex);
    console.log(this.questions);
    let askedQuestion = this.questions.splice(questIndex, 1)[0];
    this.askedQuestions.push(askedQuestion);

    return askedQuestion;
  }

  checkAnswer(quest, retans) {
    if(quest && retans) {
      if(quest.answer === retans) {
        return true
      }else{
        return false
      }
    }
  }

}

export default QuestionStore;