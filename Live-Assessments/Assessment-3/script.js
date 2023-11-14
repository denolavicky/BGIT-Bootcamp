function openModal() {
  document.getElementById("recipeModal").style.display = "block";
}

function closeModal() {
  document.getElementById("recipeModal").style.display = "none";
}

// Close modal if the user clicks outside the modal content
window.onclick = function (event) {
  const modal = document.getElementById("recipeModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
