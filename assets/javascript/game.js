var computerOptions = ["a", "b", "c", "d", "e", "f", "g" ,"h" ,"i", "j",
                         "k", "l", "m", "n", "o", "p", "q", "e", "s", "t", 
                         "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses= 0;
var ties = 0;
var lives = 9;

var userText = document.getElementById("user-text");
var lossesText = document.getElementById("losses-text");
var winsText = document.getElementById("wins-text");
var livesText = document.getElementById("lives-text");
var pastGuesses = document.getElementById("guesses-text");

var computerGuess = computerOptions[Math.floor(Math.random() * computerOptions.length)];
            console.log(computerGuess);
            console.log(computerOptions.indexOf(computerGuess));

document.onkeyup=function(event){
    var userGuess = event.key;
    userText.textContent=userGuess;

    pastGuesses.textContent += " " + userGuess;
    // This is just saying if the 
    if(computerOptions.indexOf(userGuess) == computerOptions.indexOf(computerGuess)){
        console.log("you are correct!")
        wins++;
        winsText.textContent= wins;
        // now reset the lives and the computers guess
        computerGuess = computerOptions[Math.floor(Math.random() * computerOptions.length)];
            console.log("New Random Letter" + " "+ computerGuess);
            console.log(computerOptions.indexOf(computerGuess));
        //resetting the lives
        lives=9;
        //printing for the user to see
        livesText.textContent= lives;
        // Resetting the pastGuesses
        pastGuesses.textContent = "";
        
    } 
    else{
        console.log("WRONG!");
        // we want lives to go down
        lives--;
        livesText.textContent= lives;
        console.log(lives);
        
        
        
        // Once lives integer = 0, we do losses ++ and reset the game
    }
    if(lives==0){
        //RESET THE GAME: losses would go up by 1, the guesses history will clear, and the lives left will go back to 9
        losses++;
        console.log(losses);
        // print out the updated losses
        lossesText.textContent = losses;
        lives=9;
        // once lives gets reset, we want to make sure we update the value so it appears on the screen
        livesText.textContent= lives;
        // now we want to reset the computers guess
        computerGuess = computerOptions[Math.floor(Math.random() * computerOptions.length)];
            console.log("New Random Letter" + " "+ computerGuess);
            console.log(computerOptions.indexOf(computerGuess));
         // Resetting the pastGuesses
         pastGuesses.textContent = "";

    }
}