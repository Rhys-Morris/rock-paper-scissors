            // Welcome message
            console.log("Welcome to Rock, Paper, Scissors!")


            // Create a random computer choice

            function computerDecision() {
                let choice = Math.floor(Math.random() * 3);
                if (choice == 0) {
                    return "Rock";
                } else if (choice == 1) {
                    return "Paper";
                } else {
                    return "Scissors";
                }
            }

            // Simulate a round of Rock, Paper, Scissors
            // 0 = tie    1 = player win    2 = computer win

            function playRound(playerChoice, computerChoice) {
                console.log(`The computer chooses ${computerChoice}`);

                computerChoice = computerChoice.toLowerCase();

                if (playerChoice == computerChoice) {
                    console.log("Tie!")
                    return 0;
                } else if (playerChoice == "rock") {
                    if (computerChoice == "scissors") {
                        console.log(`You Win! Rock beats Scissors!`);
                        return 1;
                    } else {
                         console.log(`You Lose! Paper beats Rock!`);
                         return 2;
                    }
                } else if (playerChoice == "scissors") {
                    if (computerChoice == "paper") {
                        console.log(`You Win! Scissors beats Paper!`);
                        return 1;
                    } else {
                         console.log(`You Lose! Rock beats Scissors!`);
                         return 2;
                    }
                } else if (playerChoice == "paper") {
                    if (computerChoice == "rock") {
                        console.log(`You Win! Paper beats Rock!`);
                        return 1;
                    } else {
                        console.log(`You Lose! Scissors beats Paper!`);
                        return 2;
                    }
                }
            }

            // Simulate a 5 round game of Rock, Paper, Scissors

            function game() {
                let userScore = 0, computerScore = 0;
                let playCount = 0;

                while (playCount < 5) {
                    let choice;
                    let flag = 0;

                    // Get player choice 
                     while (flag == 0) {
                        choice = prompt("Rock, Paper or Scissors?")
                            .toLowerCase();

                        if (choice == "rock" || choice == "scissors" || choice == "paper") {
                            flag++;
                        }
                    }

                    let round = playRound(choice, computerDecision());

                    if (round == 1) {
                        userScore++;
                    } else if (round == 2) {
                        computerScore++;
                    }

                    console.log(`Player Score: ${userScore}\nComputer Score ${computerScore}`);

                    playCount++;
                }

                let winner;

                if (userScore > computerScore) {
                    winner = "Player";
                } else if (computerScore > userScore) {
                    winner = "Computer";
                } else { winner = "Nobody! The competition is a tie"}

                console.log(`The winner is ${winner}!`);
            }

            game();