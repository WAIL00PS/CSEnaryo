// ====== FLASHCARD LOGIC ======
let currentIndex = 0;
let correct = 0;
let incorrect = 0;
let timer;
let timeLeft = 60;

let totalTimeUsed = 0;
let questionStartTime;

// DOM Elements
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const resultEl = document.getElementById("result");
const finalResultEl = document.getElementById("final-result");
const correctCountEl = document.getElementById("correct-count");
const incorrectCountEl = document.getElementById("incorrect-count");
const totalTimeSpan = document.getElementById("total-time");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");
const explanationDiv = document.getElementById("explanation");
const explanationText = document.getElementById("explanation-text");
const questionsRemainingEl = document.getElementById("questions-remaining");
const questionCounterEl = document.getElementById("question-counter");

// Format time
function formatTime(seconds) {
  if (seconds < 60) {
    return `${seconds} second${seconds !== 1 ? "s" : ""}`;
  }
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  let minutePart = `${minutes} minute${minutes !== 1 ? "s" : ""}`;
  let secondPart =
    remainingSeconds > 0
      ? ` and ${remainingSeconds} second${remainingSeconds !== 1 ? "s" : ""}`
      : "";
  return minutePart + secondPart;
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function startTimer() {
  clearInterval(timer);
  timeLeft = 60;
  updateTimerDisplay();
  questionStartTime = Date.now();

  timer = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();
    if (timeLeft <= 0) {
      clearInterval(timer);
      handleAnswer(null);
    }
  }, 1000);
}

function updateTimerDisplay() {
  const timerContainer = document.getElementById("timer");
  const unit = timeLeft === 1 ? "second" : "seconds";
  timerContainer.innerHTML = `Time left: <span id="time">${timeLeft}</span> ${unit}`;
}

function stopTimerAndCountTime() {
  clearInterval(timer);
  let elapsed = Math.round((Date.now() - questionStartTime) / 1000);
  totalTimeUsed += elapsed;
}

function showQuestion() {
  explanationDiv.style.display = "none";

  if (currentIndex >= questions.length) {
    showResults();
    return;
  }

  const current = questions[currentIndex];
  questionEl.textContent = current.question;
  optionsEl.innerHTML = "";
  resultEl.textContent = "";
  resultEl.className = "";
  nextBtn.style.display = "none";

  current.options.forEach((option) => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => handleAnswer(option);
    optionsEl.appendChild(btn);
  });

  // Update questions remaining counter
  questionsRemainingEl.textContent = questions.length - currentIndex - 1;
  startTimer();
}

function handleAnswer(selected) {
  stopTimerAndCountTime();

  const current = questions[currentIndex];
  const selectedIndex = current.options.indexOf(selected);
  const isCorrect =
    selectedIndex >= 0 && current.answer.includes(selectedIndex);

  // Highlight selected option
  Array.from(optionsEl.children).forEach((btn) => {
    btn.classList.remove("selected");
    if (btn.textContent === selected) {
      btn.classList.add("selected");
    }
  });

  if (isCorrect) {
    resultEl.textContent = "Correct!";
    resultEl.className = "correct";
    correct++;
  } else {
    const correctOptionText = current.answer
      .map((i) => current.options[i])
      .join(", ");

    resultEl.replaceChildren(); // Clear all children
    resultEl.className = "incorrect";

    resultEl.append(
      "Incorrect ",
      document.createElement("br"),
      Object.assign(document.createElement("span"), {
        style: "color: MediumSeaGreen",
        textContent: `Correct answer: ${correctOptionText}`,
      })
    );

    incorrect++;
  }

  Array.from(optionsEl.children).forEach((btn) => {
    btn.disabled = true;
    btn.style.cursor = "default";
  });

  if (current.explanation) {
    explanationText.textContent = current.explanation;
    explanationDiv.style.display = "block";
  }

  nextBtn.style.display = "inline-block";
}

function showResults() {
  stopTimerAndCountTime();

  document.getElementById("flashcard-container").style.display = "none";
  nextBtn.style.display = "none";
  finalResultEl.style.display = "block";

  correctCountEl.textContent = correct;
  incorrectCountEl.textContent = incorrect;
  totalTimeSpan.textContent = formatTime(totalTimeUsed);

  // Hide both timer and question counter
  document.getElementById("timer").style.display = "none";
  questionCounterEl.classList.add("hidden");

  restartBtn.style.display = "inline-block";
}

nextBtn.addEventListener("click", () => {
  currentIndex++;
  showQuestion();
});

restartBtn.addEventListener("click", () => {
  currentIndex = 0;
  correct = 0;
  incorrect = 0;
  totalTimeUsed = 0;

  shuffleArray(questions);

  finalResultEl.style.display = "none";
  restartBtn.style.display = "none";

  document.getElementById("flashcard-container").style.display = "block";
  nextBtn.style.display = "none";
  document.getElementById("timer").style.display = "block";
  questionCounterEl.classList.remove("hidden");

  questionsRemainingEl.textContent = questions.length - 1;
  showQuestion();
});

// Initialize quiz
shuffleArray(questions);
questionsRemainingEl.textContent = questions.length - 1;
showQuestion();
