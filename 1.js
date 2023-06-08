window.onload = function() {
    var min = 1;
    var max = 20;
    var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    var guessInput = document.getElementById("guessInput");
    var submitBtn = document.getElementById("submitBtn");
    var feedback = document.getElementById("feedback");
    var restartBtn = document.getElementById("restartBtn");
    var remainingLives = document.getElementById("remainingLives");
    var lives = 5;
  
    document.getElementById("min").textContent = min;
    document.getElementById("max").textContent = max;
  
    submitBtn.addEventListener("click", function() {
      var guess = parseInt(guessInput.value);
  
      if (isNaN(guess) || guess < min || guess > max) {
        feedback.textContent = "Invalid guess. Please enter a number within the range.";
      } else {
        if (guess < randomNumber) {
          feedback.textContent = "Too low! Try again.";
          min = guess + 1; // Adjust the minimum range based on the guess
          document.getElementById("min").textContent = min; // Update the minimum text in the instruction
        } else if (guess > randomNumber) {
          feedback.textContent = "Too high! Try again.";
          max = guess - 1; // Adjust the maximum range based on the guess
          document.getElementById("max").textContent = max; // Update the maximum text in the instruction
        } else {
          feedback.textContent = "Congratulations! You guessed the number.";
          submitBtn.disabled = true;
        }
  
        guessInput.value = "";
        guessInput.min = min; // Update the minimum attribute of the input
        guessInput.max = max; // Update the maximum attribute of the input
        guessInput.focus();
  
        lives--;
        remainingLives.textContent = lives;
  
        if (lives === 0) {
          feedback.textContent = "Game Over. You ran out of lives. The number was " + randomNumber + ".";
          submitBtn.disabled = true;
        }
      }
    });
  
    restartBtn.addEventListener("click", function() {
      guessInput.value = "";
      feedback.textContent = "";
      submitBtn.disabled = false;
      remainingLives.textContent = "5";
      lives = 5;
      min = 1; // Reset the minimum range
      max = 20; // Reset the maximum range
      randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      guessInput.min = min; // Update the minimum attribute of the input
      guessInput.max = max; // Update the maximum attribute of the input
      document.getElementById("min").textContent = min; // Update the minimum text in the instruction
      document.getElementById("max").textContent = max; // Update the maximum text in the instruction
    });
  }
  