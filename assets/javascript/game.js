        var userGuess = [];
        var options = ["lucy", "ricky"] //"desi", "fred", "ethel", "allowance", "tropicana", "hollywood", "mertz", "shopping", "showbiz", "lucy, i'm home", "you got some explaining to do"];
        var alphabet = ["a", "b", "c", "d", "e","f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        var lives = 10;
        var letterGuessed;
        var wins = 0
        var messages = {
            win: "You're Finally a Star",
            lose: "Lucy You Can't Be In The Show",
        }
        //lives left function
        var livesLeft = function(){
            document.getElementById("livesL").innerHTML = lives;
        }

        var wins = function(){
            document.getElementById("winsW").innerHTML = wins;
        }

        var letterGuess = function(){
            document.getElementById("lettersG").innerHTML = letterGuessed;
        }

        //stores computer answer
        var callWord = options[Math.floor(Math.random() * options.length)];

        //convert answer string to character array
        var answer = callWord.split();

        //outputting letters guessed
        var guesses = function(){
            document.getElementById("guessLetter").innerHTML = letterGuessed.join(", ");
        }

      
        document.onkeyup = function(event) {
            
            lives--;
            userGuess = event.key;
            livesLeft();
            if (userGuess == answer){
                wins++
                document.getElementById("wins").innerHTML = wins;}
            else {
                lives--;
                document.getElementById("lettersG").innerHTML = letterGuess;}
            };
        
        // for(var i = 0; i < answer.length; i++){
        //     if(userGuess == answer){

        //     }
        

        











        







