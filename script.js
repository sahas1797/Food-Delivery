

// JavaScript to manage dropdown visibility
const profileIcon = document.querySelector('.profile-icon');
const dropdownMenu = document.querySelector('.dropdown-menu');

// Show dropdown when profile icon is clicked
profileIcon.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
});

// Hide dropdown when clicking outside of it
document.addEventListener('click', (e) => {
    if (!profileIcon.contains(e.target)) {
        dropdownMenu.style.display = 'none'; // Hide if clicking outside the profile icon
    }
});






// Show the "Back to Top" button after scrolling a certain distance
window.onscroll = function() {
    const backToTopButton = document.getElementById('backToTop');
    if (document.body.scroll > 10 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
};



document.getElementById('backtoTop').onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}


