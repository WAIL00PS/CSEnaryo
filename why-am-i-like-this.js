document.addEventListener("DOMContentLoaded", function () {
  const totalFlashcards = 150;
  const flashcardsPerPage = 20;
  const totalPages = Math.ceil(totalFlashcards / flashcardsPerPage);
  let currentPage = 1;

  const flashcardsGrid = document.getElementById("flashcards-grid");
  const pageInfo = document.getElementById("page-info");
  const pageInfoBottom = document.getElementById("page-info-bottom");

  // Create all flashcards
  function createFlashcards() {
    flashcardsGrid.innerHTML = "";

    const startIndex = (currentPage - 1) * flashcardsPerPage;
    const endIndex = Math.min(startIndex + flashcardsPerPage, totalFlashcards);

    for (let i = startIndex; i < endIndex; i++) {
      const cardNumber = i + 1;
      const flashcard = document.createElement("div");
      flashcard.className = "flashcard clickable-card";
      flashcard.textContent = `${cardNumber}`;
      flashcard.style.fontSize = "2em"; // Apply font size here
      flashcard.dataset.questionNumber = cardNumber;
      flashcardsGrid.appendChild(flashcard);
    }

    updatePageInfo();
  }

  // Update page information
  function updatePageInfo() {
    pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
    pageInfoBottom.textContent = `Page ${currentPage} of ${totalPages}`;

    // Disable/enable previous button
    document.getElementById("prev-page").disabled = currentPage === 1;
    document.getElementById("prev-page-bottom").disabled = currentPage === 1;

    // Disable/enable next button
    document.getElementById("next-page").disabled = currentPage === totalPages;
    document.getElementById("next-page-bottom").disabled =
      currentPage === totalPages;
  }

  // Event listeners for pagination buttons
  document.getElementById("prev-page").addEventListener("click", function () {
    if (currentPage > 1) {
      currentPage--;
      createFlashcards();
    }
  });

  document.getElementById("next-page").addEventListener("click", function () {
    if (currentPage < totalPages) {
      currentPage++;
      createFlashcards();
    }
  });

  document
    .getElementById("prev-page-bottom")
    .addEventListener("click", function () {
      if (currentPage > 1) {
        currentPage--;
        createFlashcards();
      }
    });

  document
    .getElementById("next-page-bottom")
    .addEventListener("click", function () {
      if (currentPage < totalPages) {
        currentPage++;
        createFlashcards();
      }
    });

  flashcardsGrid.addEventListener("click", function (e) {
    if (e.target.classList.contains("clickable-card")) {
      const questionNumber = e.target.dataset.questionNumber;
      const targetUrl = `quiz/q${questionNumber}.html`;

      fetch(targetUrl)
        .then((response) => {
          if (response.ok) {
            window.location.href = targetUrl;
          } else {
            alert("Sorry, this question is currently unavailable.");
          }
        })
        .catch((error) => {
          alert("Unable to load the question. Please try again later.");
          console.error(error);
        });
    }
  });

  // Initialize
  createFlashcards();
});
