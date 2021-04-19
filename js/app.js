/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
// const phrase = new Phrase('Life is like a box of chocolates');
// console.log(`Phrase - phrase: ${phrase.phrase}`);

let game;

//Resets game when start button is clicked
document.getElementById('btn__reset').addEventListener('click', () => {
    game = new Game();
    game.startGame();
})

//Selects keyboard div and adds event listener for all button elements
const keyboardDiv = document.getElementById('qwerty');
keyboardDiv.addEventListener('click', (e) => {
    if (e.target.nodeName === 'BUTTON') {
        console.log(e.target.nodeName);
        game.handleInteraction(e.target);
    }
})