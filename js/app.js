/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


let game;

//Start new game when start button is clicked
document.getElementById('btn__reset').addEventListener('click', () => {
    game = new Game();
    //Resets Game
    game.resetGame();
    //Start Game
    game.startGame();
})

//Start new game when enter is pressed on the keyboard and overlay isn't hidden
window.addEventListener('keydown', (e) => {  
    const keyPressed = e.key;
    const overlay = document.querySelector('#overlay');
    if (keyPressed === 'Enter' && overlay.style.display === '') {
        game = new Game();
        //Resets Game
        game.resetGame();
        //Start Game
        game.startGame();
    }
})

//Selects keyboard section and adds event listener to all button elements
const keyboardDiv = document.getElementById('qwerty');
keyboardDiv.addEventListener('click', (e) => {
    //handleInteraction method is only run if a button is clicked
    if (e.target.nodeName === 'BUTTON') {
        game.handleInteraction(e.target);
    }
})

//Listens for keydown and handlesInteraction for related key that was pressed
window.addEventListener('keydown', (e) => {
    const letter = e.key;
    const buttons = document.querySelectorAll('#qwerty button');

    buttons.forEach(button => {
        //If the keyboard button equals the key that was pressed, handleInteraction method is run for that button
        if (button.innerHTML.toLowerCase() === letter && button.disabled === false) {
            game.handleInteraction(button);
        }
    })
})

