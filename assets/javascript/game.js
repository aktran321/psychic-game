var computerOptions = ["a", "b", "c", "d", "e", "f", "g" ,"h" ,"i", "j",
                         "k", "l", "m", "n", "o", "p", "q", "e", "s", "t", 
                         "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses= 0;
var ties = 0;
var lives = 9;

var userText = document.getElementById("user-text");
var computerText = document.getElementById("computer-text");
var tiesText = document.getElementById("ties-text");
var lossText = document.getElementById("losses-text");
var winsText = document.getElementById("wins-text");

var computerGuess = computerOptions[Math.floor(Math.random() * computerOptions.length)];
              console.log(computerGuess);
              computerText.textContent=computerGuess;
              console.log(computerOptions.indexOf(computerGuess));

document.onkeyup=function(event){
    var userGuess = event.key;
    
 
    // This is just saying if the 
    if(computerOptions.indexOf(userGuess) == computerOptions.indexOf(computerGuess)){
        console.log("you are correct!")
       
        //we also want wins to go up and to reset the game
        //guesses to print into the html
        userText.textContent=userGuess;
    } 
    else{
        // we want lives to go down
        // 
        console.log("you are a dumby");
        userText.textContent=userGuess;
        // Once lives integer = 0, we do losses ++ and reset the game
    }
}