// navigation bar 
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// gallery 
const images = [
    {
        src: 'images/IMG-20240601-WA0110.jpg',
        description: 'Beautiful view from the balcony.'
    },
    {
        src: 'images/IMG-20240601-WA0110.jpg',
        description: 'Spacious and comfortable rooms.'
    },
    {
        src: 'images/IMG-20240601-WA0110.jpg',
        description: 'Relaxing lounge area.'
    },
    {
        src: 'images/IMG-20240601-WA0110.jpg',
        description: 'Modern and fully equipped kitchen.'
    },
    {
        src: 'images/IMG-20240601-WA0110.jpg',
        description: 'Luxury dining area.'
    }
];

// Function to carousel items
const carouselSlide = document.querySelector('.carousel-slide');

images.forEach((image, index) => {
    const carouselItem = document.createElement('div');
    carouselItem.classList.add('carousel-item');
    carouselItem.innerHTML = `
        <img src="${image.src}" alt="Image ${index + 1}">
        <div class="carousel-description">${image.description}</div>
    `;
    carouselSlide.appendChild(carouselItem);

    carouselItem.addEventListener('click', () => {
        openModal(image);
    });
});

// Carousel functionality
let currentIndex = 0;

const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

function showSlide(index) {
    if (index >= images.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = images.length - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    carouselSlide.style.transform = `translateX(${offset}%)`;
}

nextButton.addEventListener('click', () => {
    showSlide(currentIndex + 1);
});

prevButton.addEventListener('click', () => {
    showSlide(currentIndex - 1);
});

showSlide(currentIndex);

// Modal functionality
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const captionText = document.getElementById('caption');
const span = document.getElementsByClassName('close')[0];

function openModal(image) {
    modal.style.display = 'block';
    modalImg.src = image.src;
    captionText.innerText = image.description;
}

span.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
