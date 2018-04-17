

// // "ricky", "desi", "fred", "ethel", "allowance", "tropicana", "hollywood", "mertz", "shopping", "showbiz", "lucy, i'm home", "you got some explaining to do"]

// document.onkeyup = function(event){
//     var letter = event.key.toLowerCase();

//     alert("Let's Play the I Love Lucy Word Game!!")
//     var likeLucy = confirm("Do you want to play the Lucy Word Game?")

//     if(likeLucy){
//         alert("Let's Play!")
//     }

//     else{
//         alert("You're a Fred aren't you?")
//     }
// }

// var $ = function(id){
//     return document.getElementById(id);}

//var options = ["lucy", "ricky", "desi", "fred", "ethel", "allowance", "tropicana", "hollywood", "mertz", "shopping", "showbiz", "lucy, i'm home", "you got some explaining to do"]; 

// guesses
// var guesses = 10


// var word = Math.floor(Math.random()*14);
// var answer = options[];

    // in case of "lucy"


    // document.onkeyup = function(event)
        var userGuess = event.key;   
        var options = ["lucy", "ricky"] //"desi", "fred", "ethel", "allowance", "tropicana", "hollywood", "mertz", "shopping", "showbiz", "lucy, i'm home", "you got some explaining to do"];
        var answer = options[Math.floor(Math.random() * options.length)];
        var guesses;
        var lives;
        var letterGuessed;

 for(var i = 0; i < answer.lenght; i++){
     if 

 }


// if ((answer === "lucy") && (userGuess === "l")){
//     alert("Good Job");
//     document.write(userGuess);
   
// }
// if ((answer === "lucy") && (userGuess === "u")){
//     alert("Good Job");
//     document.write(userGuess);
   
// }

// if ((answer === "lucy") && (userGuess === "c")){
//     alert("Good Job");
//     document.write(userGuess);
    
// }
// if ((answer === "lucy") && (userGuess === "y")){
//     alert("Good Job");
//     document.write(userGuess);}

// else if ((answer === "lucy") && (userGuess !== "l")){
//     alert("You got some explainin to do!");   
   
// }

// else if ((answer === "lucy") && (userGuess !== "u")){
//     alert("You got some explainin to do!");
   
// }

// else if ((answer === "lucy") && (userGuess !== "c")){
//     alert("You got some explainin to do!");
// }

// else if ((answer === "lucy") && (userGuess !== "y")){
//     alert("You got some explainin to do!");}
// }


// //in case of "ricky"
// for (i = 0; i<10; i++){
// document.onkeyup = function(event){
//     var userGuess = event.key;   
//     var options = ["lucy", "ricky", "desi", "fred", "ethel", "allowance", "tropicana", "hollywood", "mertz", "shopping", "showbiz", "lucy, i'm home", "you got some explaining to do"];
//     var answer = options[Math.floor(Math.random() * options.length)];

// // in case of "ricky"
// if ((answer === "ricky") && (userGuess === "r")){
//     alert("Good Job!");
//     document.write(userGuess);
// }
// if ((answer === "ricky") && (userGuess === "i")){
//     alert("Good Job");
//     document.write(userGuess);
// }
// if ((answer === "ricky") && (userGuess === "c")){
//     alert("Good Job");
//     document.write(userGuess);
// }

// if ((answer === "ricky") && (userGuess === "k")){
//     alert("Good Job");
//     document.write(userGuess);
// }
// if ((answer === "ricky") && (userGuess === "y")){
//     alert("Good Job");
//     document.write(userGuess);
// }

// else if ((answer === "ricky") && (userGuess !== "r")){
//     alert("You got some explainin to do!");
// }

// else if ((answer === "ricky") && (userGuess !== "i")){
//     alert("You got some explainin to do!");
// }

// else if ((answer === "ricky") && (userGuess !== "c")){
//     alert("You got some explainin to do!");
// }

// else if ((answer === "ricky") && (userGuess !== "k")){
//     alert("You got some explainin to do!");
// }

// else if ((answer === "ricky") && (userGuess !== "y")){
//     alert("You got some explainin to do!");
// }
// }}

// // in case of "desi"
// document.onkeyup = function(event){
//     var userGuess = event.key;   
//     var options = ["lucy", "ricky", "desi", "fred", "ethel", "allowance", "tropicana", "hollywood", "mertz", "shopping", "showbiz", "lucy, i'm home", "you got some explaining to do"];
//     var answer = options[Math.floor(Math.random() * options.length)];
// if ((answer === "desi") && (userGuess === "d")){
//     alert("Good Job!");
//     document.write(userGuess);
// }
// if ((answer === "desi") && (userGuess === "e")){
//     alert("Good Job");
//     document.write(userGuess);
// }
// if ((answer === "desi") && (userGuess === "s")){
//     alert("Good Job");
//     document.write(userGuess);
// }

// if ((answer === "desi") && (userGuess === "i")){
//     alert("Good Job");
//     document.write(userGuess);
// }



// else if ((answer === "desi") && (userGuess !== "d")){
//     alert("You got some explainin to do!");
// }

// else if ((answer === "desi") && (userGuess !== "e")){
//     alert("You got some explainin to do!");
// }

// else if ((answer === "desi") && (userGuess !== "s")){
//     alert("You got some explainin to do!");
// }

// else if ((answer === "desi") && (userGuess !== "i")){
//     alert("You got some explainin to do!");
// }
// }

// // in case of "fred"
// document.onkeyup = function(event){
//     var userGuess = event.key;   
//     var options = ["lucy", "ricky", "desi", "fred", "ethel", "allowance", "tropicana", "hollywood", "mertz", "shopping", "showbiz", "lucy, i'm home", "you got some explaining to do"];
//     var answer = options[Math.floor(Math.random() * options.length)];
// if ((answer === "fred") && (userGuess === "f")){
//     alert("Good Job!")
//     document.write("f");
// }
// if ((answer === "fred") && (userGuess === "r")){
//     alert("Good Job");
//     document.write("r");
// }
// if ((answer === "fred") && (userGuess === "e")){
//     alert("Good Job");
//     document.write("e");
// }

// if ((answer === "fred") && (userGuess === "d")){
//     alert("Good Job");
//     document.write("d");
// }



// else if ((answer === "fred") && (userGuess !== "f")){
//     alert("You got some explainin to do!");
// }

// else if ((answer === "fred") && (userGuess !== "r")){
//     alert("You got some explainin to do!");
// }

// else if ((answer === "fred") && (userGuess !== "e")){
//     alert("You got some explainin to do!");
// }

// else if ((answer === "fred") && (userGuess !== "d")){
//     alert("You got some explainin to do!");
// }
// }

// // in case of "ethel"
// document.onkeyup = function(event){
//     var userGuess = event.key;   
//     var options = ["lucy", "ricky", "desi", "fred", "ethel", "allowance", "tropicana", "hollywood", "mertz", "shopping", "showbiz", "lucy, i'm home", "you got some explaining to do"];
//     var answer = options[Math.floor(Math.random() * options.length)];
// if ((answer === "ethel") && (userGuess === "e")){
//     alert("Good Job!");
//     document.write("e");
// }
// if ((answer === "ethel") && (userGuess === "t")){
//     alert("Good Job");
//     document.write("t");
// }
// if ((answer === "ethel") && (userGuess === "h")){
//     alert("Good Job");
//     document.write("h");
// }

// if ((answer === "ethel") && (userGuess === "e")){
//     alert("Good Job");
//     document.write("e");
// }
// if ((answer === "ethel") && (userGuess === "l")){
//     alert("Good Job");
//     document.write("l");
// }

// else if ((answer === "ethel") && (userGuess !== "e")){
//     alert("You got some explainin to do!");
// }

// else if ((answer === "ethel") && (userGuess !== "t")){
//     alert("You got some explainin to do!");
// }

// else if ((answer === "ethel") && (userGuess !== "h")){
//     alert("You got some explainin to do!");
// }

// else if ((answer === "ethel") && (userGuess !== "e")){
//     alert("You got some explainin to do!");
// }

// else if ((answer === "ethel") && (userGuess !== "l")){
//     alert("You got some explainin to do!")}
// }

// // in case of "allowance"
// document.onkeyup = function(event){
//     var userGuess = event.key;   
//     var options = ["lucy", "ricky", "desi", "fred", "ethel", "allowance", "tropicana", "hollywood", "mertz", "shopping", "showbiz", "lucy, i'm home", "you got some explaining to do"];
//     var answer = options[Math.floor(Math.random() * options.length)];
// if ((answer === "allowance") && (userGuess === "a")){
//     alert("Good Job!");
//     document.write(userGuess);
// }
// if ((answer === "allowance") && (userGuess === "l")){
//     alert("Good Job");
//     document.write(userGuess);
// }
// if ((answer === "allowance") && (userGuess === "l")){
//     alert("Good Job");
//     document.write(userGuess);
// }

// if ((answer === "allowance") && (userGuess === "o")){
//     alert("Good Job");
//     document.write(userGuess);
// }
// if ((answer === "allowance") && (userGuess === "w")){
//     alert("Good Job");
//     document.write(userGuess);
// }
// if ((answer === "allowance") && (userGuess === "a")){
//     alert("Good Job");
//     document.write(userGuess);
// }
// if ((answer === "allowance") && (userGuess === "n")){
//     alert("Good Job");
//     document.write(userGuess);
// }

// if ((answer === "allowance") && (userGuess === "c")){
//     alert("Good Job");
//     document.write(userGuess);
// }
// if ((answer === "allowance") && (userGuess === "e")){
//     alert("Good Job");
//     document.write(userGuess);
// }

// else if ((answer === "allowance") && (userGuess !== "a")){
//     alert("You got some explainin to do!");
// }

// else if ((answer === "allowance") && (userGuess !== "l")){
//     alert("You got some explainin to do!");
// }

// else if ((answer === "allowance") && (userGuess !== "l")){
//     alert("You got some explainin to do!");
// }

// else if ((answer === "allowance") && (userGuess !== "o")){
//     alert("You got some explainin to do!");
// }

// else if ((answer === "allowance") && (userGuess !== "w")){
//     alert("You got some explainin to do!");
// }

// else if ((answer === "allowance") && (userGuess !== "a")){
//     alert("You got some explainin to do!");
// }

// else if ((answer === "allowance") && (userGuess !== "n")){
//     alert("You got some explainin to do!");
// }

// else if ((answer === "allowance") && (userGuess !== "c")){
//     alert("You got some explainin to do!");
// }

// else if ((answer === "allowance") && (userGuess !== "e")){
//     alert("You got some explainin to do!");
// }
// }

// // in case of "tropicana"
// document.onkeyup = function(event){
//     var userGuess = event.key;   
//     var options = ["lucy", "ricky", "desi", "fred", "ethel", "allowance", "tropicana", "hollywood", "mertz", "shopping", "showbiz", "lucy, i'm home", "you got some explaining to do"];
//     var answer = options[Math.floor(Math.random() * options.length)];
// if ((answer === "tropicana") && (userGuess === "t")){
//     alert("Good Job!");
//     document.write(userGuess);
// }
// if ((answer === "tropicana") && (userGuess === "r")){
//     alert("Good Job");
//     document.write(userGuess);
// }
// if ((answer === "tropicana") && (userGuess === "o")){
//     alert("Good Job");
//     document.write(userGuess);
// }

// if ((answer === "tropicana") && (userGuess === "p")){
//     alert("Good Job");
//     document.write(userGuess);
// }
// if ((answer === "tropicana") && (userGuess === "i")){
//     alert("Good Job");
//     document.write(userGuess);
// }
// if ((answer === "tropicana") && (userGuess === "c")){
//     alert("Good Job");
//     document.write(userGuess);
// }
// if ((answer === "tropicana") && (userGuess === "a")){
//     alert("Good Job");
//     document.write(userGuess);
// }

// if ((answer === "tropicana") && (userGuess === "n")){
//     alert("Good Job");
//     document.write(userGuess);
// }
// if ((answer === "tropicana") && (userGuess === "a")){
//     alert("Good Job");
//     document.write(userGuess);
// }

// else if ((answer === "tropicana") && (userGuess !== "t")){
//     alert("You got some explainin to do!");
// }

// else if ((answer === "tropicana") && (userGuess !== "r")){
//     alert("You got some explainin to do!");
// }

// else if ((answer === "tropicana") && (userGuess !== "o")){
//     alert("You got some explainin to do!");
// }

// else if ((answer === "tropicana") && (userGuess !== "p")){
//     alert("You got some explainin to do!");}

// else if ((answer === "tropicana") && (userGuess !== "i")){
//     alert("You got some explainin to do!");
// }

// else if ((answer === "tropicana") && (userGuess !== "c")){
//     alert("You got some explainin to do!");
// }

// else if ((answer === "tropicana") && (userGuess !== "a")){
//     alert("You got some explainin to do!");
// }

// else if ((answer === "tropicana") && (userGuess !== "n")){
//     alert("You got some explainin to do!");
// }

// else if ((answer === "tropicana") && (userGuess !== "a")){
//     alert("You got some explainin to do!");
// }
// }

// // in case of "hollywood"
// document.onkeyup = function(event){
//     var userGuess = event.key;   
//     var options = ["lucy", "ricky", "desi", "fred", "ethel", "allowance", "tropicana", "hollywood", "mertz", "shopping", "showbiz", "lucy, i'm home", "you got some explaining to do"];
//     var answer = options[Math.floor(Math.random() * options.length)];
// if ((answer === "hollywood") && (userGuess === "h")){
//     alert("Good Job!");
//     document.write(userGuess);
// }
// if ((answer === "hollywood") && (userGuess === "o")){
//     alert("Good Job");
//     document.write(userGuess);
// }
// if ((answer === "hollywood") && (userGuess === "l")){
//     alert("Good Job");
//     document.write(userGuess);
// }

// if ((answer === "hollywood") && (userGuess === "l")){
//     alert("Good Job");
//     document.write(userGuess);
// }
// if ((answer === "hollywood") && (userGuess === "y")){
//     alert("Good Job");
//     document.write(userGuess);
// }
// if ((answer === "hollywood") && (userGuess === "w")){
//     alert("Good Job");
//     document.write(userGuess);
// }
// if ((answer === "hollywood") && (userGuess === "o")){
//     alert("Good Job");
//     document.write(userGuess);
// }

// if ((answer === "hollywood") && (userGuess === "o")){
//     alert("Good Job");
//     document.write(userGuess);
// }
// if ((answer === "hollywood") && (userGuess === "d")){
//     alert("Good Job");
//     document.write(userGuess);
// }

// else if ((answer === "hollywood") && (userGuess !== "h")){
//     alert("You got some explainin to do!");
// }

// else if ((answer === "hollywood") && (userGuess !== "o")){
//     alert("You got some explainin to do!");
// }

// else if ((answer === "hollywood") && (userGuess !== "l")){
//     alert("You got some explainin to do!");
// }

// else if ((answer === "hollywood") && (userGuess !== "l")){
//     alert("You got some explainin to do!");}

// else if ((answer === "hollywood") && (userGuess !== "y")){
//     alert("You got some explainin to do!");
// }

// else if ((answer === "hollywood") && (userGuess !== "w")){
//     alert("You got some explainin to do!");
// }

// else if ((answer === "hollywood") && (userGuess !== "o")){
//     alert("You got some explainin to do!");
// }

// else if ((answer === "hollywood") && (userGuess !== "o")){
//     alert("You got some explainin to do!");
// }

// else if ((answer === "hollywood") && (userGuess !== "d")){
//     alert("You got some explainin to do!");
// }
// }

// // in case of "mertz"
// document.onkeyup = function(event){
//     var userGuess = event.key;   
//     var options = ["lucy", "ricky", "desi", "fred", "ethel", "allowance", "tropicana", "hollywood", "mertz", "shopping", "showbiz", "lucy, i'm home", "you got some explaining to do"];
//     var answer = options[Math.floor(Math.random() * options.length)];
// if ((answer === "mertz") && (userGuess === "m")){
//     alert("Good Job!");
//     document.write(userGuess);
// }
// if ((answer === "mertz") && (userGuess === "e")){
//     alert("Good Job");
//     document.write(userGuess);
// }
// if ((answer === "mertz") && (userGuess === "r")){
//     alert("Good Job");
//     document.write(userGuess);
// }

// if ((answer === "mertz") && (userGuess === "t")){
//     alert("Good Job");
//     document.write(userGuess);
// }
// if ((answer === "mertz") && (userGuess === "z")){
//     alert("Good Job");
//     document.write(userGuess);
// }

// else if ((answer === "mertz") && (userGuess !== "m")){
//     alert("You got some explainin to do!");
// }

// else if ((answer === "mertz") && (userGuess !== "e")){
//     alert("You got some explainin to do!");
// }

// else if ((answer === "mertz") && (userGuess !== "r")){
//     alert("You got some explainin to do!");
// }

// else if ((answer === "mertz") && (userGuess !== "t")){
//     alert("You got some explainin to do!");
// }

// else if ((answer === "mertz") && (userGuess !== "z")){
//     alert("You got some explainin to do!");
// }
// }

// // in case of "shopping"
// document.onkeyup = function(event){
//     var userGuess = event.key;   
//     var options = ["lucy", "ricky", "desi", "fred", "ethel", "allowance", "tropicana", "hollywood", "mertz", "shopping", "showbiz", "lucy, i'm home", "you got some explaining to do"];
//     var answer = options[Math.floor(Math.random() * options.length)];
// if ((answer === "shopping") && (userGuess === "s"));{
//     alert("Good Job!");
//     document.write(userGuess);
// }
// if ((answer === "shopping") && (userGuess === "h"));{
//     alert("Good Job");
//     document.write(userGuess);
// }
// if ((answer === "shopping") && (userGuess === "o"));{
//     alert("Good Job");
//     document.write(userGuess);
// }

// if ((answer === "shopping") && (userGuess === "pt"));{
//     alert("Good Job");
//     document.write(userGuess);
// }
// if ((answer === "shopping") && (userGuess === "p"));{
//     alert("Good Job");
//     document.write(userGuess);
// }

// if ((answer === "shopping") && (userGuess === "i"));{
//     alert("Good Job");
//     document.write(userGuess);
// }


// if ((answer === "shopping") && (userGuess === "n"));{
//     alert("Good Job");
//     document.write(userGuess);
// }
// if ((answer === "shopping") && (userGuess === "g")){
//     alert("Good Job");
//     document.write(userGuess);
// }

// else if ((answer === "shopping") && (userGuess !== "s")){
//     alert("You got some explainin to do!");
// }

// else if ((answer === "shopping") && (userGuess !== "h")){
//     alert("You got some explainin to do!");
// }

// else if ((answer === "shopping") && (userGuess !== "o")){
//     alert("You got some explainin to do!");
// }

// else if ((answer === "shopping") && (userGuess !== "p")){
//     alert("You got some explainin to do!");
// }

// else if ((answer === "shopping") && (userGuess !== "p")){
//     alert("You got some explainin to do!");
// }

// else if ((answer === "shopping") && (userGuess !== "i")){
//     alert("You got some explainin to do!");
// }

// else if ((answer === "shopping") && (userGuess !== "n")){
//     alert("You got some explainin to do!");
// }

// else if ((answer === "shopping") && (userGuess !== "g"));{
//     alert("You got some explainin to do!");
// }
// }

// // in case of "showbiz"
// document.onkeyup = function(event){
//     var userGuess = event.key;   
//     var options = ["lucy", "ricky", "desi", "fred", "ethel", "allowance", "tropicana", "hollywood", "mertz", "shopping", "showbiz", "lucy, i'm home", "you got some explaining to do"];
//     var answer = options[Math.floor(Math.random() * options.length)];
// if ((answer === "showbiz") && (userGuess === "s"));{
//     alert("Good Job!");
//     document.write(userGuess);
// }
// if ((answer === "showbiz") && (userGuess === "h"));{
//     alert("Good Job");
//     document.write(userGuess);
// }
// if ((answer === "showbiz") && (userGuess === "o"));{
//     alert("Good Job");
//     document.write(userGuess);
// }

// if ((answer === "showbiz") && (userGuess === "w"));{
//     alert("Good Job");
//     document.write(userGuess);
// }
// if ((answer === "showbiz") && (userGuess === "b"));{
//     alert("Good Job");
//     document.write(userGuess);
// }

// if ((answer === "showbiz") && (userGuess === "i"));{
//     alert("Good Job");
//     document.write(userGuess);
// }

// if ((answer === "showbiz") && (userGuess === "z")){
//     alert("Good Job");
//     document.write(userGuess)
// }

// else if ((answer === "showbiz") && (userGuess !== "s")){
//     alert("You got some explainin to do!");
// }

// else if ((answer === "showbiz") && (userGuess !== "h")){
//     alert("You got some explainin to do!");
// }

// else if ((answer === "showbiz") && (userGuess !== "o")){
//     alert("You got some explainin to do!");
// }

// else if ((answer === "showbiz") && (userGuess !== "w")){
//     alert("You got some explainin to do!");
// }

// else if ((answer === "showbiz") && (userGuess !== "b")){
//     alert("You got some explainin to do!");
// }

// else if ((answer === "showbiz") && (userGuess !== "i")){
//     alert("You got some explainin to do!");
// }

// else if ((answer === "showbiz") && (userGuess !== "z")){
//     alert("You got some explainin to do!");
// }
// }




// // // EXAMPLE
// // var computerChoices = ["r", "p", "s"];

// // // Creating variables to hold the number of wins, losses, and ties. They start at 0.
// // var wins = 0;
// // var losses = 0;
// // var ties = 0;

// // // This function is run whenever the user presses a key.
// // document.onkeyup = function(event) {

// //   // Determines which key was pressed.
// //   var userGuess = event.key;

// //   // Randomly chooses a choice from the options array. This is the Computer's guess.
// //   var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

// //   // Reworked our code from last step to use "else if" instead of lots of if statements.

// //   // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
// //   if ((userGuess === "r") || (userGuess === "p") || (userGuess === "s")) {

// //     if ((userGuess === "r") && (computerGuess === "s")) {
// //       wins++;
// //     } else if ((userGuess === "r") && (computerGuess === "p")) {
// //       losses++;
// //     } else if ((userGuess === "s") && (computerGuess === "r")) {
// //       losses++;
// //     } else if ((userGuess === "s") && (computerGuess === "p")) {
// //       wins++;
// //     } else if ((userGuess === "p") && (computerGuess === "r")) {
// //       wins++;
// //     } else if ((userGuess === "p") && (computerGuess === "s")) {
// //       losses++;
// //     } else if (userGuess === computerGuess) {
// //       ties++;
// //     }

// //     // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
// //     var html =
// //       "<p>You chose: " + userGuess + "</p>" +
// //       "<p>The computer chose: " + computerGuess + "</p>" +
// //       "<p>wins: " + wins + "</p>" +
// //       "<p>losses: " + losses + "</p>" +
// //       "<p>ties: " + ties + "</p>";

// // //     // Set the inner HTML contents of the #game div to our html string
// // //     document.querySelector("#game").innerHTML = html;
// // //   }
// // // };

