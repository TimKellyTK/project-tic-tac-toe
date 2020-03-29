# Instructions

- Set up your HTML, CSS, JS and git files
- Store your gameboard as an array inside of a Gameboard object. Your players are also going tobe stored in objects and you're probably going to want an object to control the flow of the game itself
HINT: Main goal is to have as little global code as possible. Try tucking everything inside a module or factory
RULE OF THUMB: If you need ONE of something use a module, if you need MULTIPLE of something use factories
- Set up your HTML and write a JavaScript function that will render the contents of the gameboard array to the webpage
- Build the functions that allow players to add marks to a specific spot on the board and then tie it to the DOM -> to let players click on the gameboard to make their marker
HINT: Don't forget the logic that keeps players from playing in spots that are already taken
HINT: Think carefully about where logic/code should exist -> a little time brainstorming can make your life much easier later
- Build the logic that checks for when the game is over -> check for 3-in-a-row and a tie
- Clean up the interface to allow players to put in their names, include a button to start/restart the game and add a display element that congratulates the winning player
- OPTIONAL: create an AI so that a player can play against the computer