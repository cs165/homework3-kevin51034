// TODO(you): Modify the class in whatever ways necessary to implement
// the flashcard app behavior.
//
// You may need to do things such as:
// - Changing the constructor parameters
// - Changing the code in the constructor
// - Adding methods
// - Adding additional fields

class App {
  constructor() {
    const menuElement = document.querySelector('#menu');
    this.menu = new MenuScreen(menuElement);

    const mainElement = document.querySelector('#main');
    this.flashcards = new FlashcardScreen(mainElement);

    const resultElement = document.querySelector('#results');
    this.results = new ResultsScreen(resultElement);


    this.toResult = this.toResult.bind(this);
    document.addEventListener('toResult', this.toResult);


    // Uncomment this pair of lines to see the "flashcard" screen:

    //this.menu.menuItem.addEventListener("click" this.toFlash );
    this.menu.menuItem();

    //this.menu.menuItem.addEventListener

    //this.menu.hide();
    //this.flashcards.show();

    // Uncomment this pair of lines to see the "results" screen:
    //this.menu.hide();
    //this.results.show();
  }
  toResult() {
    this.flashcards.hide();
    this.results.show();
  }
}
