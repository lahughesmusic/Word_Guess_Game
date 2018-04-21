        var userGuess = [];
        var options = ["lucy", "ricky"] //"desi", "fred", "ethel", "allowance", "tropicana", "hollywood", "mertz", "shopping", "showbiz", "lucy, i'm home", "you got some explaining to do"];
        var alphabet = ["a", "b", "c", "d", "e","f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        var lives = 10;
        var letterGuessed = [];
        var wins = 0;
        var messages = {
            win: "You're Finally a Star",
            lose: "Lucy You Can't Be In The Show",
        };


        var callWord = options[Math.floor(Math.random() * options.length)];
        var output = " ";

        //convert answer string to character array
        var answer = callWord.split("");
        console.log(answer);
        var myLength = answer.length;
        var display = myLength;
      


        
        
        //lives left function
        var livesLeft = function(){
            document.getElementById("livesL").innerHTML = lives;
        }

        //wins function
        var winsW = function(){
            document.getElementById("winsW").innerHTML = wins;
        }

        //letters guessed by user
        var letterG = function(){
            document.getElementById("lettersG").innerHTML = letterGuess;
        }


    
       
  
    
        


        document,onkeyup = function(event){
            //outputting letters guessed
            var guesses = function(){
                letterGuessed = event.key;
                document.getElementById("guessLetter").innerHTML = letterGuessed.join(", ");
            }
    
            for (var i = 0; i < answer.length; i++);{
                display[i] = "_ ";
                output = output + display[i];
                document.getElementById("display").innerHTML = output;
                output = "";}
            if (userGuess == answer[i]);{
                    wins++;
                }
                 else (
                        lives--;
                    guesses();)
                    
            }
        
            
        
        for(var c = 0; c < callWord.length; c++){
            if (userGuess == callWord){
                wins++
                document.getElementById("winsW").innerHTML = wins;}
            else {
                lives--;
                guesses();
            }
            console.log(wins);
        }
    }

        


  
        
        

        











        







