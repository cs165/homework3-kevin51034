// TODO(you): Modify the class in whatever ways necessary to implement
// the flashcard app behavior.
//
// You may need to do things such as:
// - Changing the constructor parameters
// - Adding methods
// - Adding additional fields

class ResultsScreen {
  constructor(containerElement) {
    this.containerElement = containerElement;

    let item = document.getElementById('continue');
    item.addEventListener("click" , this.check);


  }

  show(numberCorrect, numberWrong) {
    //console.log(FlashcardScreen.percent)
    //document.dispatchEvent(new CustomEvent('checkButton'));
    if(document.querySelector('.percent').textContent == '100'){
      document.querySelector('.continue').innerHTML = 'Start over?'
    }
    else{
      document.querySelector('.continue').textContent = 'Continue?'
    }
    this.containerElement.classList.remove('inactive');
  }

  hide() {
    this.containerElement.classList.add('inactive');
  }
  check() {
    if(document.querySelector('.percent').textContent == '100'){
      app.toMenu();
    }
    else{
      document.querySelector('.continue').textContent = 'Continue?';

      document.dispatchEvent(new CustomEvent('toContinue'));
    }


  }
}
