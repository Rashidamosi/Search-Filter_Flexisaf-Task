// Get the search input and button elements
const searchInput = document.querySelector('.search-input');
const searchButton = document.querySelector('.search-button');

// Add an event listener to the search button
searchButton.addEventListener('click', () => {
  const searchTerm = searchInput.value.trim();
  if (searchTerm) {
    // Perform the search operation here
    console.log(`Searching for: ${searchTerm}`);
  }
});