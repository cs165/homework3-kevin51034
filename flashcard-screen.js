// TODO(you): Modify the class in whatever ways necessary to implement
// the flashcard app behavior.
//
// You may need to do things such as:
// - Changing the constructor parameters
// - Rewriting some of the existing methods, such as changing code in `show()`
// - Adding methods
// - Adding additional fields

class FlashcardScreen {
  constructor(containerElement) {
    this.containerElement = containerElement;
    this.word;
    this.itemnum;
    this.wordnum = 1;
    this.correct = 0;
    this.incorrect = 0;
    this.percent = 0;
    this.dropRight = this.dropRight.bind(this);
    this.dropLeft = this.dropLeft.bind(this);
    this.checkButton = this.checkButton.bind(this);

    document.addEventListener('dropRight', this.dropRight);
    document.addEventListener('dropLeft', this.dropLeft);
    document.addEventListener('checkButton', this.checkButton);

    this.flashcardContainer = document.querySelector('#flashcard-container');

  }
  show(item) {
    this.containerElement.classList.remove('inactive');
//catch the title & words & definition
    for(this.itemnum = 0; this.itemnum < FLASHCARD_DECKS.length;this.itemnum++){
      if(item.innerHTML == FLASHCARD_DECKS[this.itemnum].title){
        item = FLASHCARD_DECKS[this.itemnum];
        this.word = Object.entries(FLASHCARD_DECKS[this.itemnum].words);
          const card = new Flashcard(this.flashcardContainer, this.word[this.itemnum][0] , this.word[this.itemnum][1]);
          //console.log(this.wordnum);
      }
    }
    //const card = new Flashcard(flashcardContainer, word[0][0] , word[0][1]);
    //const card = new Flashcard(flashcardContainer, 'word' , 'definition');
  }
  hide() {
    this.containerElement.classList.add('inactive');
  }

  dropRight() {
    this.correct++;
    this.word.right = 1;
    console.log(this.word.right);

    //document.querySelectorAll('.correct').textContent = 'this.correct';
    let correcthtml = document.querySelectorAll('.correct');
    correcthtml[0].textContent = this.correct;
    correcthtml[1].textContent = this.correct;

    this.percent = Math.round(this.correct/this.word.length*100)
    document.querySelector('.percent').textContent = this.percent;
    //console.log(document.querySelectorAll('.correct').textContent);
    let child = document.querySelector('.flashcard-box');
    //console.log(this.word.length);

    if (this.wordnum === this.word.length) {
      //console.log('123');

      //if (child != null)
      //child = document.querySelector('.flashcard-box');
      this.flashcardContainer.removeChild(child);

      document.dispatchEvent(new CustomEvent('toResult'));
    }

    else if (child != null){
       this.flashcardContainer.removeChild(child);


       this.card = new Flashcard(this.flashcardContainer, this.word[this.wordnum][0], this.word[this.wordnum][1]);
       this.wordnum++;
    }

  }
  dropLeft() {
    this.incorrect++;
    let incorrecthtml = document.querySelectorAll('.incorrect');
    incorrecthtml[0].textContent = this.incorrect;
    incorrecthtml[1].textContent = this.incorrect;


    let child = document.querySelector('.flashcard-box');
    //console.log(this.word.length);

    if (this.wordnum === this.word.length) {
      //console.log('123');


      this.flashcardContainer.removeChild(child);

      document.dispatchEvent(new CustomEvent('toResult'));
    }

    else if (child != null){
       this.flashcardContainer.removeChild(child);


       this.card = new Flashcard(this.flashcardContainer, this.word[this.wordnum][0], this.word[this.wordnum][1]);
       this.wordnum++;
    }
  }
  checkButton() {

  }
}
