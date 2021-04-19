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
         },
         {
             phrase: 'once in a blue moon'
         },
         {
             phrase: 'no pain no gain'
         },
         {
             phrase: 'break a leg'
         },
         {
             phrase: 'it takes two to tango'
         },
         {
             phrase: 'like two peas in a pod'
         }
     ]
     return array;
    };
    /** 
* Selects random phrase from phrases property 
* @return {Object} Phrase object chosen to be used 
*/ 
    getRandomPhrase() {
        //Uses getRandomNumber method to select random number based on phrases length
        const randomNumber = this.getRandomNumber(this.phrases.length);
        const randomPhrase = this.phrases[randomNumber];
        return randomPhrase;
    };
/**
* Begins game by selecting a random phrase and displaying it to user
*/
    startGame() {
        const overlay = document.getElementById('overlay');
        //Hides game screen overlay
        overlay.style.display = 'none';

        //Get random background color
        const randomBackgroundColor = `rgb(${this.getRandomNumber(256)}, ${this.getRandomNumber(256)}, ${this.getRandomNumber(256)})`;

        //Update background to random color
        document.querySelector('body').style.backgroundColor = randomBackgroundColor;

        //Gets random phrase using getRandomPhrase() method
        const randomPhrase = this.getRandomPhrase();

        ///Create new phrase object with random phrase
        const phrase = new Phrase(randomPhrase.phrase);

        //Adds random phrase to display using addPhraseToDisplay() method
        phrase.addPhraseToDisplay();

        //Updates activePhrase value to randomPhrase
        this.activePhrase = phrase;
    }
/**
 * Resets game by clearing phrase, updating button styling and replacing heart images
 */
    resetGame() {
        const phraseList = document.querySelector('#phrase ul');
        //Clear phrase HTML
        phraseList.innerHTML = '';

        //Enable all key buttons and update to key class
        const letterButtons = document.querySelectorAll('#qwerty button');
        letterButtons.forEach(button => {
            //Remove transition from buttons to resolve flickering issue
            button.style.transition = 'none';
            button.disabled = false;
            button.className = 'key';
        });

        //Resets heart images
        const heartImages = document.querySelectorAll('li.tries img');

        heartImages.forEach(image => {
            image.src = 'images/liveHeart.png';
        });
    }
/**
* Checks for winning move
* @return {boolean} True if game has been won, false if game wasn't
won
*/
    checkForWin() {
    const hide = document.querySelectorAll('.hide');
    //Use number of display letters with class of hide to determine if player won game.  If not letters have this class, the player won.
    const gameWon = hide.length === 0 ? true : false;
    return gameWon;
    };
/**
* Increases the value of the missed property
* Removes a life from the scoreboard
* Checks if player has remaining lives and ends game if player is out
*/
    removeLife() {
        //1 is added to missed value
        this.missed++;
        const heartImages = document.querySelectorAll('img[src="images/liveHeart.png"]');
        //Heart image is updated to Lost Heart for last item if there are still heart images on screen
        if (heartImages.length > 0) {
            const lastItem = heartImages.length - 1;
            heartImages[lastItem].src = "images/lostHeart.png";
        }
        
        //If player gets 5 wrong guesses, the game is over.
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

        //Custom message is displayed on the overlay depending on whether or not the player won the game.
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
    //Disable button that was clicked
    button.disabled = true;

    //Add disabled class
    button.classList.add('disabled');

    if (this.activePhrase.checkLetter(buttonLetter)) {
        //If clicked letter is in phrase, chosen class is added to clicked letter, matched letters are display, and function checks to see if game has been won
        button.classList.add('chosen');    
        this.activePhrase.showMatchedLetter(buttonLetter);
        const gameWon = this.checkForWin();
        //If game was won, gameOver method is run
        if (gameWon) {
            this.gameOver(gameWon);
        }
    } else {
        //If button is wrong, wrong class is added a life is removed.
        button.classList.add('wrong');
        this.removeLife();
    }
    };
//This method gets random number and uses max parameter
    getRandomNumber (max) {
        let randomNumber = Math.floor(Math.random() * max); 
        return randomNumber;
    }
}

