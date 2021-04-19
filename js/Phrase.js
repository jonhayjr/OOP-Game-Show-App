/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }
    /** 
* Display phrase on game board 
*/ 
addPhraseToDisplay() {
    const phraseList = document.querySelector('#phrase ul');
    let HTML = '';
    //Splits phrase into array of characters
    const letters = this.phrase.split('');
   
    //Loops through each item in the letters array.  The HTML that is added depends on whether or no the character is a letter or a space
    letters.forEach(letter => {
        if (letter !== ' ') {
            HTML += `<li class="hide letter ${letter}">${letter}</li>`;
        } else {
            HTML += `<li class="space"> </li>`;
        }
    });

    phraseList.innerHTML = HTML;
};
    /** 
* Checks if passed letter is in phrase 
* @param (string) letter - Letter to check 
*/ 
checkLetter(letter) {
    //Checks to see if phrase contains letter
    const containsLetter = this.phrase.indexOf(letter) >= 0 ? true : false;
    return containsLetter;
}

/**
* Displays passed letter on screen after a match is found
* @param (string) letter - Letter to display
*/
showMatchedLetter(letter) {
    //Selects letters with class of the letter that was selected
  const matchingLetters = document.querySelectorAll(`.${letter}`);
  
  //Add show class to these letters
  matchingLetters.forEach(letter => {
      letter.className = 'show';
  })
};

}
