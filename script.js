function playGame(userChoice) {
  let compChoice;
  let num = Math.random() * 3;
  if (num > 0 && num <= 1) {
    compChoice = "Bat";
  } else if (num > 1 && num <= 2) {
    compChoice = "Ball";
  } else {
    compChoice = "Stumps";
  }

  let resultMessage = "";

  if (userChoice === compChoice) {
    resultMessage = "The Match Is Tied!";
  } else if (userChoice === "Bat" && compChoice === "Ball") {
    resultMessage = `You choose Bat, Computer choose Ball, The winner is You!`;
  } else if (userChoice === "Ball" && compChoice === "Stumps") {
    resultMessage = `You choose Ball, Computer choose Stumps, The winner is You!`;
  } else if (userChoice === "Stumps" && compChoice === "Bat") {
    resultMessage = `You choose Stumps, Computer choose Bat, The winner is You!`;
  } else {
    resultMessage = `You choose ${userChoice}, Computer choose ${compChoice}, The winner is Computer!`;
  }

  document.querySelector(`#result-message`).innerText = resultMessage;
}
