// Step 1: Simulate User Behavior
// - Add event listeners for button clicks and form submissions.
// - Use JavaScript to dynamically update the DOM based on user actions.

// Step 2: DOM Manipulation Functions
// - Implement functions to add, update, and remove DOM elements.
// - Ensure all elements are dynamically created with appropriate attributes and content.

// Step 3: Error Handling
// - Display error messages in the DOM for invalid inputs or missing elements.
// - Create reusable functions to handle common error cases.

// Step 4: Reusable Utilities
// - Create modular utility functions, such as createElement(tag, attributes).
// - Ensure all functions follow DRY principles for maintainability.



// Add Element to DOM

function addElementToDOM(id, text) {
  if (!id) return;

  let element = document.getElementById(id);

  if (!element) {
    element = document.createElement("div");
    element.id = id;
    document.body.appendChild(element);
  }

  element.textContent = text;
}


// Remove Element from DOM

function removeElementFromDOM(id) {
  const element = document.getElementById(id);
  if (element) {
    element.remove();
  }
}


// Simulate Click 
function simulateClick(id, text) {
  let element = document.getElementById(id);

  if (!element) {
    element = document.createElement("div");
    element.id = id;
    document.body.appendChild(element);
  }

  // Directly update DOM (what test expects)
  element.textContent = text;
}


// Error Handling

function showError(message) {
  let errorDiv = document.getElementById("error-message");

  if (!errorDiv) {
    errorDiv = document.createElement("p");
    errorDiv.id = "error-message";
    document.body.appendChild(errorDiv);
  }

  errorDiv.textContent = message;

  // Ensure it's visible 
  errorDiv.classList.remove("hidden");
}

function clearError() {
  const errorDiv = document.getElementById("error-message");
  if (errorDiv) {
    errorDiv.textContent = "";
    errorDiv.classList.add("hidden");
  }
}


// Handle Form Submission

function handleFormSubmit(formId, outputId) {
  const form = document.getElementById(formId);
  const input = form ? form.querySelector("input") : null;

  // If input exists but is empty → show correct error
  if (input && input.value.trim() === "") {
    showError("Input cannot be empty");
    return;
  }

  // If no input at all → still treat as empty
  if (!input) {
    showError("Input cannot be empty");
    return;
  }

  const value = input.value.trim();

  clearError();

  addElementToDOM(outputId, value);

  input.value = "";
}


// Exports

module.exports = {
  addElementToDOM,
  removeElementFromDOM,
  simulateClick,
  handleFormSubmit,
};
