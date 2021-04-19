/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }
   /** 
* Creates phrases for use in game 
* @return {array} An array of phrases that could be used in the game */ 
    createPhrases() {
     const array = [
         {
             phrase: 'a fool and his money are soon parted' 
        },
         {
             phrase: 'back to square one'
         },
         {
             phrase: 'cry over spilled milk'
         },
         {
             phrase: 'bite the bullet'
         },
         {
             phrase: 'the elephant in the room'
         }
     ]
     return array;
    };
    /** 
* Selects random phrase from phrases property 
* @return {Object} Phrase object chosen to be used 
*/ 
    getRandomPhrase() {
        const randomNumber = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomNumber];
    };
/**
* Begins game by selecting a random phrase and displaying it to user
*/
    startGame() {
        const overlay = document.getElementById('overlay');
        //Hides game screen overlay
        overlay.style.display = 'none';

        //Gets random phrase using getRandomPhrase() method
        const randomPhrase = this.getRandomPhrase();

        ///Create new phrase object with random phrase
        const phrase = new Phrase(randomPhrase.phrase);

        //Adds random phrase to display using addPhraseToDisplay() method
        phrase.addPhraseToDisplay();

        //Updates activePhrase value to randomPhrase
        this.activePhrase = phrase;
    }
    resetGame() {
        const phraseList = document.querySelector('#phrase ul');
        phraseList.innerHTML = '';
        
    }
/**
* Checks for winning move
* @return {boolean} True if game has been won, false if game wasn't
won
*/
    checkForWin() {
    const hide = document.querySelectorAll('.hide');
    const gameWon = hide.length === 0 ? true : false;
    return gameWon;
    };
/**
* Increases the value of the missed property
* Removes a life from the scoreboard
* Checks if player has remaining lives and ends game if player is out
*/
    removeLife() {
        this.missed++;
        const heartImages = document.querySelectorAll('img[src="images/liveHeart.png"]');
        const lastItem = heartImages.length - 1;
        heartImages[lastItem].src = "images/lostHeart.png";

        if (this.missed === 5) {
            const gameWon = this.checkForWin();
            this.gameOver(gameWon);
        }
    };
 /**
* Displays game over message
* @param {boolean} gameWon - Whether or not the user won the game
*/
    gameOver(gameWon) {
        const overlay = document.getElementById('overlay');
        //Show game screen overlay
        overlay.style.display = '';

        const gameOverH1 = document.getElementById('game-over-message');

        if (gameWon) {
            gameOverH1.innerHTML = 'You won!  Great job!';
            overlay.className = 'win';
        } else {
            gameOverH1.innerHTML = 'You lost!  Better luck next time!';
            overlay.className = 'lose';
        }
    };
/**
* Handles onscreen keyboard button clicks
* @param (HTMLButtonElement) button - The clicked button element
*/
    handleInteraction(button) {
    //Selected button letter value
    const buttonLetter = button.innerHTML;
    //Disabled button that was clicked
    button.disabled = true;


    if (this.activePhrase.checkLetter(buttonLetter)) {
        //If clicked letter is in phrase, chosen class is added to clicked letter, matched letters are display, and function checks to see if game has been won
        button.className = 'chosen';    
        this.activePhrase.showMatchedLetter(buttonLetter);
        const gameWon = this.checkForWin();
        //If game was won, gameOver method is run
        if (gameWon) {
            this.gameOver(gameWon);
        }
    } else {
        //If button is wrong, wrong class is added an life is removed.
        button.className = 'wrong';
        this.removeLife();
    }
    };
}

