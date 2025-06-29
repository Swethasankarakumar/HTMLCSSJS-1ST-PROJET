let score = 10;
let target = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
  const guess = parseInt(document.getElementById("guess").value);
  const resultMsg = document.getElementById("resultMsg");
  const scoreDisplay = document.getElementById("score");

  if (!guess) {
    resultMsg.textContent = "Please select a number!";
    return;
  }

  if (guess === target) {
    resultMsg.textContent = "You guessed it right! 🎉";
    resultMsg.style.color = "green";
  } else {
    resultMsg.textContent = "You are wrong!";
    resultMsg.style.color = "red";
    score--;
    scoreDisplay.textContent = `Your Score: ${score}`;
  }
}
