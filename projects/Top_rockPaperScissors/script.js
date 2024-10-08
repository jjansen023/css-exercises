function playGame() {
    // Initialize score variables inside the playGame function
    let humanScore = 0;
    let computerScore = 0;

    // Define the playRound function inside playGame
    function playRound(humanChoice, computerChoice) {
        // Handle a tie
        if (humanChoice === computerChoice) {
            console.log(`It's a tie! Both chose ${humanChoice}`);
            return "tie"; // Return a string for tie
        } 
        // Check if the human wins
        else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            console.log(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}`);
            return "human"; // Return "human" for a win
        } 
        // Otherwise, the computer wins
        else {
            console.log(`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}`);
            return "computer"; // Return "computer" for a loss
        }
    }

    // Function to get the human's choice
    function getHumanChoice() {
        const choices = ["rock", "paper", "scissors"];
        const humanChoice = prompt("Please enter rock, paper, or scissors: ").toLowerCase();
        
        if (!choices.includes(humanChoice)) {
            console.log("Invalid selection. Please choose rock, paper, or scissors.");
            return null; // Return null for invalid choices
        } else {
            return humanChoice; // Return valid input
        }
    }

    // Function to get the computer's choice
    function getComputerChoice() {
        const choices = ["rock", "paper", "scissors"];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex]; // Return a random choice
    }

    // Play 5 rounds
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice(); // Get the human choice
        if (humanChoice === null) {
            console.log("Invalid input, round skipped.");
            i--; // Decrement i to repeat the round if the input is invalid
            continue; // Skip to the next iteration of the loop
        }
        
        const computerChoice = getComputerChoice(); // Get the computer choice
        const result = playRound(humanChoice, computerChoice); // Determine the round outcome

        // Increment scores based on the result
        if (result === "human") {
            humanScore++;
        } else if (result === "computer") {
            computerScore++;
        }
    }

    // Log final scores after 5 rounds
    console.log(`Final Scores - Human: ${humanScore}, Computer: ${computerScore}`);

    // Determine overall winner
    if (humanScore > computerScore) {
        console.log("You are the overall winner!");
    } else if (computerScore > humanScore) {
        console.log("The computer is the overall winner!");
    } else {
        console.log("It's an overall tie!");
    }
}

// To start the game, call playGame()
playGame();
console.log(playGame())
