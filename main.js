document.addEventListener("DOMContentLoaded", () => {
  const resetBtn = document.getElementById("reset-btn");
  let draggedItem = null;

  // Function to attach drag event listeners to items
  function attachItemListeners() {
    const items = document.querySelectorAll(".item");

    items.forEach((item) => {
      item.addEventListener("dragstart", () => {
        draggedItem = item;
        item.style.opacity = ".5";
      });

      item.addEventListener("dragend", () => {
        item.style.opacity = "1";
      });
    });
  }

  // Function to reset the containers
  function resetContainers() {
    const leftContainer = document.querySelector(".left-container");
    const rightContainer = document.querySelector(".right-container");

    leftContainer.innerHTML = `
      <h3>Items</h3>
      <div class="item" draggable="true">Item 1</div>
      <div class="item" draggable="true">Item 2</div>
      <div class="item" draggable="true">Item 3</div>
    `;

    rightContainer.innerHTML = "<h3>Dropped Items</h3>";

    // Attach event listeners to the newly created items
    attachItemListeners();
  }

  // Initial attachment of event listeners
  attachItemListeners();

  const leftContainer = document.querySelector(".left-container");
  const rightContainer = document.querySelector(".right-container");

  // Drag and drop event listeners for containers
  leftContainer.addEventListener("dragover", (e) => {
    e.preventDefault();
    leftContainer.style.background = "#99a4a97d";
    leftContainer.style.color = "#fff";
  });

  leftContainer.addEventListener("dragleave", () => {
    // Remove any visual feedback when leaving the container
    leftContainer.style.background = "#222";
    leftContainer.style.color = "antiquewhite";
  });

  leftContainer.addEventListener("drop", () => {
    // Add the dragged item to the left container
    leftContainer.appendChild(draggedItem);
    leftContainer.style.background = "#222";
    leftContainer.style.color = "antiquewhite";
  });

  rightContainer.addEventListener("dragover", (e) => {
    e.preventDefault();
    rightContainer.style.background = "#99a4a97d";
    rightContainer.style.color = "#fff";
  });

  rightContainer.addEventListener("dragleave", () => {
    // Remove any visual feedback when leaving the container
    rightContainer.style.background = "#222";
    rightContainer.style.color = "antiquewhite";
  });

  rightContainer.addEventListener("drop", () => {
    // Add the dragged item to the right container
    rightContainer.appendChild(draggedItem);
    rightContainer.style.background = "#222";
    rightContainer.style.color = "antiquewhite";
  });

  // Reset button event listener
  resetBtn.addEventListener("click", () => {
    // Reset containers to their original states
    resetContainers();
  });
});
