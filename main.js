
var guesses = prompt ("Please guess a number");
function myGame(guesses) {
    // var trials = prompt ("Please guess a number");
    var i = Math.floor(Math.random() * 100) + 1; //Generates random numbers and stores it in i

    var j=i%2; //gets the modulus of the random number and stores the result in a variable j
    if (j==0) //checks if j returns a zero or not
        alert (" Number is Even"); 
    else
        alert (" Number is odd"); 

    for(var count=1;count<=guesses; count++) // loop to counter the number of captured inputs
    {
        var num = prompt ("Please enter a number:"); //Captures user input
        if (num==i){                                                                
            alert("You WIN!" );
            break;
        }
        if (num<=i){                                                                                     
            alert("Number is lower, make another guess");
        }
        if (num=>i){                                                                          
                    alert("Number is higher,make another guess");
                }
        if (count==guesses){    // if condition iterates 10 times with invalid gueses
                alert("You LOSE!");}
    }
}

myGame(guesses)
