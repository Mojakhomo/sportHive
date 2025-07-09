/* script.js */
document.addEventListener('DOMContentLoaded', () => {
  // Search functionality for the search page
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', function () {
      const filter = this.value.toLowerCase();
      const results = document.querySelectorAll('#searchResults li');
      results.forEach((item) => {
        const keyword = item.getAttribute('data-keyword').toLowerCase();
        item.style.display = keyword.includes(filter) ? 'block' : 'none';
      });
    });
  }

  // Betting Form Submission
  const bettingForm = document.getElementById('betting-form');
  if (bettingForm) {
    bettingForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const match = document.getElementById('match').value;
      const amount = document.getElementById('amount').value;
      alert(`Bet placed on ${match} for M${amount}. Good luck!`);
    });
  }

// Card Flip Functionality
/*document.addEventListener("DOMContentLoaded", () => {
  console.log("JavaScript loaded!"); // Debugging log

  document.querySelectorAll(".flip-card").forEach(card => {
    card.addEventListener("click", function () {
      console.log("Card clicked!"); // Check if event fires
      this.classList.toggle("flipped"); // Apply "flipped" class to ".flip-card" instead of ".flip-card-inner"
    });
  });
});*/

document.addEventListener("DOMContentLoaded", () => {
  console.log("JavaScript loaded!"); // Debugging log

  document.querySelectorAll(".flip-card").forEach(card => {
    card.addEventListener("click", function () {
      console.log("Card clicked!"); // Debugging log

      // Toggle the 'flipped' class
      this.classList.toggle("flipped");

      // Get the title from the front of the card
      let title = this.querySelector(".flip-card-front h3").textContent;

      // Set the title on the back dynamically
      let backContent = this.querySelector(".flip-card-back");
      
      // Check if the content is empty before setting the title
      if (!backContent.dataset.set) {
        backContent.innerHTML = `<h3>${title}</h3>` + backContent.innerHTML;
        backContent.dataset.set = "true"; // Prevent duplicate setting
      }
    });
  });
});




  // Customer Feedback Submission
  const feedbackForm = document.getElementById('feedback-form');
  if (feedbackForm) {
    feedbackForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const feedback = document.getElementById('feedback').value;
      if (feedback) {
        alert('Thank you for your feedback!');
        document.getElementById('feedback').value = '';
      } else {
        alert('Please enter your feedback before submitting.');
      }
    });
  }

  // Supplier Communication Submission
  const supplierForm = document.getElementById('supplier-form');
  if (supplierForm) {
    supplierForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const message = document.getElementById('supplier-message').value;
      if (message) {
        alert('Message sent to suppliers!');
        document.getElementById('supplier-message').value = '';
      } else {
        alert('Please enter a message before sending.');
      }
    });
  }
});