let userInput = prompt("Enter your choice").toLowerCase().trim();
let compInput = ["rock", "paper", "scissors"];
const random = Math.floor(Math.random() * compInput.length);

if (userInput === "rock") {
  if (compInput[random] === "paper") {
    console.log(compInput[random] + "|you lose!!");
  } else if (compInput[random] === "scissors") {
    console.log(compInput[random] + "|you won!!");
  } else if (compInput[random] === "rock") {
    console.log(compInput[random] + "|Draw, repeat the round");
  }
} else if (userInput === "paper") {
  if (compInput[random] === "rock") {
    console.log(compInput[random] + "|you won!!");
  } else if (compInput[random] === "paper") {
    console.log(compInput[random] + "|Draw, repeat the round");
  } else if (compInput[random] === "scissors") {
    console.log(compInput[random] + "|you lose!!");
  }
} else if (userInput === "scissors") {
  if (compInput[random] === "rock") {
    console.log(compInput[random] + "|you lose!!");
  } else if (compInput[random] === "paper") {
    console.log(compInput[random] + "|you won!!");
  } else if (compInput[random] === "scissors") {
    console.log(compInput[random] + "|Draw, repeat the round");
  }
}
