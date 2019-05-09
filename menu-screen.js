// TODO(you): Modify the class in whatever ways necessary to implement
// the flashcard app behavior.
//
// You may need to do things such as:
// - Changing the constructor parameters
// - Adding methods
// - Adding additional fields

class MenuScreen {
  constructor(containerElement) {
    this.containerElement = containerElement;
  }
  menuItem(){
    for(let i = 0; i < FLASHCARD_DECKS.length;i++){
      let item = document.createElement('div');
      item.setAttribute("id", "choices");
      item.innerHTML = FLASHCARD_DECKS[i].title;
      document.getElementById("choices").appendChild(item)
      item.addEventListener("click" , this.toFlash);
    }
  }
  toFlash() {
      let menu = document.querySelector('#menu');
      app.menu.hide();
      app.flashcards.show(this);
  }
  show() {
    this.containerElement.classList.remove('inactive');
  }
  hide() {
    this.containerElement.classList.add('inactive');
  }
}
