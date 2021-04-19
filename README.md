# OOP-Game-Show-App
This is a word guessing game that generates a random phrase and gives a player 5 tries to guess the word by clicking a letter on the onscreen keyboard.  I used Object-Oriented Programming to create a game and phrase class with unique properties and methods.

## Customizations
I added a few different customizations to this game to make it unique.

1. Random Background Color \ 
When the player starts the game, a random background color is selected.  I added a method to the game class that can be used to create a random number.  This method is called when the game is started and used to create 3 random RGB color values.

1. Click Enter to Start Game \
Added an additional 'keydown' event listener that checks to see if 'Enter' is pressed.  If this key is pressed and start game overlay is visible, a new game is started.

1. Phrase Letter Transition \
Added a custom cubic-bezier transition to the phrases letters.

1. Start Button Hover Effects \
Added custom hover effects to the start button.  The background color is based on the whether the game has been won or lost.

1. Main Text Font \
Updated the main text to Ubuntu.

1. Disabled Key Button Class \
Added a disabled class that is added to keys when they are selected.

**Click below for a preview**\
https://www.jonhayjr.com/OOP-Game-Show-App