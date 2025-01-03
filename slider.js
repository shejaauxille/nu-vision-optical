// Select slider container
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider img');
const imageWidth = images[0].clientWidth; // Get the width of one image
let index = 0;

// Function to move the slider to the next image
function moveSlider() {
	index++;
	if (index >= images.length) {
		index = 0; // Reset to the first image after the last one
	}
	slider.scrollTo({
		left: imageWidth * index,
		behavior: 'smooth'
	});
}

// Automatically move slider every 3 seconds
setInterval(moveSlider, 3000);
