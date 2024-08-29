function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle("dark-mode");

    var elements = document.querySelectorAll(
        "header, #about, footer, .projects-jump button, main button, .project, .report a, footer button, footer a, header button.toggle-dark-mode"
    );

    elements.forEach(function(element) {
        element.classList.toggle("dark-mode");
    });
}

function navigateToProject(page) {
    window.location.href = page;
}

document.querySelectorAll('.project').forEach(function(project) {
    project.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            project.click(); 
        }
    });
});

let images = [];
let currentSlide = 0;

// Initialize the carousel with specific images for each page
function initializeCarousel(imageArray) {
    images = imageArray; // Set the images array
}

// Open the carousel and set the first image
function openCarousel(index) {
    currentSlide = index;  // Set the current slide index
    updateCarouselImage(); // Update the carousel with the correct image
    document.getElementById('carouselModal').style.display = 'block'; // Show the modal
}

// Close the carousel
function closeCarousel() {
    document.getElementById('carouselModal').style.display = 'none'; // Hide the modal
}

// Change the slide (next/previous)
function changeSlide(step) {
    currentSlide = (currentSlide + step + images.length) % images.length; // Calculate the new slide index
    updateCarouselImage(); // Update the carousel with the new image
}

// Update the image shown in the carousel
function updateCarouselImage() {
    const carouselImage = document.getElementById('carouselImage'); // Get the carousel image element
    carouselImage.src = images[currentSlide]; // Set the src attribute to the current image path
}
