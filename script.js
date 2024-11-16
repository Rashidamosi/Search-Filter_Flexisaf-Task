// // Get the search input and button elements
// const searchInput = document.querySelector('.search-input');
// const searchButton = document.querySelector('.search-button');

// // Add an event listener to the search button
// searchButton.addEventListener('click', () => {
//   const searchTerm = searchInput.value.trim();
//   if (searchTerm) {
//     // Perform the search operation here
//     console.log(`Searching for: ${searchTerm}`);
//   }
// });

let searchBox = document.querySelector('#search-box'); 
let images = document.querySelectorAll('.container .image-container, .image');

searchBox.oninput = () =>{
  images.forEach(hide => hide.computedStyleMap.display = 'none');
  let value = searchBox.value;
  images.forEach(filter =>{
    let title = filter.getAttribute('data-title');
    if(value == title){
      filter.style.display = 'block'
    }
    if(searchBox.value = ''){
      filter.style.display = 'block'

    }
  });

};

