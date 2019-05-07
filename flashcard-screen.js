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

    this.wrongcard = [][2];
    this.wrongcarddef = new Array();
    this.wrongcardnum = 1;
    this.wrongcount = 0;
    this.continue = 0;


    this.dropRight = this.dropRight.bind(this);
    this.dropLeft = this.dropLeft.bind(this);
    //this.backtoflash = this.backtoflash.bind(this);
    //this.checknum = 1;
    //this.check[0] = 0;
    //this.checkButton = this.toContinue.bind(this);

    this.correcthtml = document.querySelectorAll('.correct');
    this.incorrecthtml = document.querySelectorAll('.incorrect');
    this.correcthtml[0].textContent = '0';
    this.correcthtml[1].textContent = '0';
    this.incorrecthtml[0].textContent = '0';
    this.incorrecthtml[1].textContent = '0';

    document.addEventListener('dropRight', this.dropRight);
    document.addEventListener('dropLeft', this.dropLeft);

    //document.addEventListener('backtoflash', this.backtoflash);

    //document.addEventListener('toContinue', this.toContinue);

    this.flashcardContainer = document.querySelector('#flashcard-container');

  }
  show(item) {
    this.containerElement.classList.remove('inactive');
//catch the title & words & definition
    if(this.continue === 0){
      for(this.itemnum = 0; this.itemnum < FLASHCARD_DECKS.length;this.itemnum++){
        if(item.innerHTML == FLASHCARD_DECKS[this.itemnum].title){
          item = FLASHCARD_DECKS[this.itemnum];
          this.word = Object.entries(FLASHCARD_DECKS[this.itemnum].words);
            const card = new Flashcard(this.flashcardContainer, this.word[this.itemnum][0] , this.word[this.itemnum][1]);
        }
      }
    }
    else {
      console.log('secondround')
      this.word= new Array();
      this.worddef= new Array();
      this.wrongcard = [this.incorrect][2];

      this.continue = 0;
      this.incorrect = 0;
      this.wordnum = 1;
      this.incorrecthtml[0].textContent = '0';
      this.incorrecthtml[1].textContent = '0';
      //this.wrongcard[this.wrongcardnum] = this.word[this.wordnum];
      for(let i=1;i<=this.wrongcard.length; i++) {

        this.word[i] = this.wrongcard[i];
        this.worddef[i] = this.wrongcarddef[i];
        console.log(this.word[i])
        console.log(this.worddef[i])

      }
      this.card = new Flashcard(this.flashcardContainer, this.word[1], this.worddef[1]);
    }

    //const card = new Flashcard(flashcardContainer, word[0][0] , word[0][1]);
    //const card = new Flashcard(flashcardContainer, 'word' , 'definition');
  }
  hide() {
    this.containerElement.classList.add('inactive');
  }

  dropRight() {
    this.correct++;
    //document.querySelectorAll('.correct').textContent = 'this.correct';
    this.correcthtml[0].textContent = this.correct;
    this.correcthtml[1].textContent = this.correct;
    //this.check[this.wordnum] = true;
    //MMMMMMMMMMMMMMMMMMMMM
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
      console.log('3')
       this.flashcardContainer.removeChild(child);

       this.card = new Flashcard(this.flashcardContainer, this.word[this.wordnum][0], this.word[this.wordnum][1]);
       this.wordnum++;
    }

  }
  dropLeft() {
    this.incorrect++;
    this.wrongcount++;
    this.incorrecthtml[0].textContent = this.incorrect;
    this.incorrecthtml[1].textContent = this.incorrect;
    this.continue = 1;
    //this.check[this.wordnum] = false;

    console.log(this.wrongcard)


    this.wrongcard[this.wrongcardnum][0] = this.word[this.wordnum][0];
    //this.wrongcard[this.wrongcardnum][1] = this.word[this.wordnum][1];
    this.wrongcardnum++;


    let child = document.querySelector('.flashcard-box');
    //console.log(this.word.length);

    if (this.wordnum === this.word.length) {

      this.flashcardContainer.removeChild(child);
      document.dispatchEvent(new CustomEvent('toResult'));
    }
    else if (child != null){
       this.flashcardContainer.removeChild(child);
       this.card = new Flashcard(this.flashcardContainer, this.word[this.wordnum][0], this.word[this.wordnum][1]);
       this.wordnum++;
    }
  }
  reset() {
    this.wordnum = 1;
    this.correct = 0;
    this.incorrect = 0;
    this.percent = 0;
    this.correcthtml[0].textContent = '0';
    this.correcthtml[1].textContent = '0';
    this.incorrecthtml[0].textContent = '0';
    this.incorrecthtml[1].textContent = '0';
  }
}
