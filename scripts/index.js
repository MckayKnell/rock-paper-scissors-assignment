let user = prompt("rock, paper, or scissors?");
let opponent = Math.random();
if (opponent < 0.34) {
  opponent = "rock";
} else if (opponent <= 0.67) {
  opponent = "paper";
} else {
  opponent = "scissors";
}

const battle = function (userChoice, opponentChoice) {
  if (userChoice === opponentChoice) {
    return "same choice, go again";
  } else if (userChoice === "rock") {
    if (opponentChoice === "scissors") {
      return "opponent picked scissors, you win";
    } else {
      return "opponent wins with paper";
    }
  } else if (userChoice === "scissors") {
    if (opponentChoice === "paper") {
      return "opponent picked paper, you win";
    } else {
      return "opponent wins with rock";
    }
  } else if (userChoice === "paper") {
    if (opponentChoice === "rock") {
      return "opponent picked rock, you win";
    } else {
      return "opponent wins with scissors";
    }
  }
};

console.log(battle(user, opponent));
