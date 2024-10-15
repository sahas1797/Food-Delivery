
    // document.addEventListener("DOMContentLoaded", function() {
    //     const dropdownToggle = document.querySelector('.dropdown-toggle');
    //     const dropdownMenu = document.querySelector('.dropdown-menu');

    //     // Show the dropdown on click
    //     dropdownToggle.addEventListener('click', function(event) {
    //         event.preventDefault(); // Prevent the default link behavior
    //         dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    //     });

    //     // Hide the dropdown if an item is clicked
    //     dropdownMenu.addEventListener('click', function(event) {
    //         if (event.target.tagName === 'A') {
    //             dropdownMenu.style.display = 'none'; // Hide dropdown on item click
    //         }
    //     });

    //     // Hide the dropdown if clicking outside of it
    //     document.addEventListener('click', function(event) {
    //         if (!dropdownToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
    //             dropdownMenu.style.display = 'none';
    //         }
    //     });
    // });




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
