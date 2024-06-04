const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
// gallery button section 
document.getElementById('view-more').addEventListener('click', function() {
    const hiddenItems = document.querySelectorAll('.gallery-item.hidden');
    hiddenItems.forEach(item => {
        item.classList.remove('hidden');
    });
    this.style.display = 'none';
    document.getElementById('view-less').classList.remove('hidden');
});

document.getElementById('view-less').addEventListener('click', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach((item, index) => {
        if (index >= 4) {
            item.classList.add('hidden');
        }
    });
    this.classList.add('hidden');
    document.getElementById('view-more').style.display = 'inline-block';
});
